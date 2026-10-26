'use strict';
// Offline regression checks: no PostHog requests or real emails are sent.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {test} = require('node:test');
const root = path.resolve(__dirname, '..');
const integration = fs.readFileSync(path.join(root, 'sankalpam-posthog.js'), 'utf8');
const SECRET = 'PRIVATE_SENTINEL_90210';

function harness(settings = {}) {
  const records = [], listeners = {}, scripts = [], storage = new Map();
  if (settings.owner) storage.set('sankalpam.noCount', '1');
  const window = {
    location: new URL(settings.url || ('https://sankalpam.live/?email=' + SECRET + '#sgmove=' + SECRET)),
    SANKALPAM_POSTHOG: {projectToken: 'phc_testtoken', apiHost: settings.host === undefined ? 'https://eu.i.posthog.com' : settings.host, replayEnabled: true},
    navigator: {doNotTrack: settings.dnt ? '1' : '0', globalPrivacyControl: !!settings.gpc},
    crypto: require('node:crypto').webcrypto,
    localStorage: {getItem: k => storage.get(k), setItem: (k,v) => storage.set(k,v), removeItem: k => storage.delete(k)},
    addEventListener: (name, fn) => { listeners[name] = fn; },
    removeEventListener: name => { delete listeners[name]; }
  };
  const classList = {toggle() {}, remove() {}};
  const document = {referrer: 'https://search.example/search?email=' + SECRET, title: SECRET,
    createElement: () => ({}), head: {appendChild: node => scripts.push(node)},
    addEventListener: (name, fn) => { listeners[name] = fn; }, body: {classList}};
  const context = vm.createContext({window, document, URL, URLSearchParams, Set, Math, console,
    APP_VERSION: 'test-release'});
  vm.runInContext(integration, context);
  let options;
  function load() {
    assert.equal(scripts.length, 1);
    options = window.posthog._i[0][1];
    const sdk = {capture(name, props) {
      const record = options.before_send({event: name, properties: {...props, token: 'phc_testtoken',
        distinct_id: 'test-browser-id', $session_id: 'test-session', $device_type: 'Desktop',
        $current_url: window.location.href, $initial_current_url: window.location.href,
        $initial_referrer: document.referrer, $title: SECRET, name: SECRET, email: SECRET}});
      if (record) records.push(record);
    }};
    window.posthog = sdk;
    options.loaded(sdk);
  }
  return {context, window, document, records, scripts, listeners, load, get options() {return options;}};
}

test('missing/unknown host, local previews, owner exclusion and browser privacy send nothing', () => {
  for (const settings of [{host: ''}, {host: 'https://example.org'}, {url: 'http://localhost:3000/'},
    {url: 'https://other.example/'}, {owner: true}, {url: 'https://sankalpam.live/?nocount=1'}, {dnt: true}, {gpc: true}]) {
    const h = harness(settings);
    h.window.SGAnalytics.capture('feature_used', {feature: 'calendar'});
    assert.equal(h.scripts.length, 0);
    assert.equal(h.records.length, 0);
  }
});

test('SDK loading queues events, uses the selected region, and strips PII/default URL properties', () => {
  const h = harness();
  h.window.SGAnalytics.capture('feature_used', {feature: 'calendar', name: SECRET, email: SECRET});
  assert.equal(h.records.length, 0);
  assert.equal(h.scripts[0].src, 'https://eu-assets.i.posthog.com/static/array.js');
  h.load();
  assert.deepEqual(h.records.map(r => r.event), ['$pageview', 'feature_used']);
  assert.equal(h.records[0].properties.$current_url, 'https://sankalpam.live/');
  assert.equal(h.records[0].properties.$referrer, 'https://search.example');
  assert.equal(h.records[0].properties.$referring_domain, 'search.example');
  assert.ok(!JSON.stringify(h.records).includes(SECRET));
  h.window.SGAnalytics.capture('unreviewed_event', {value: SECRET});
  assert.equal(h.records.length, 2);
});

test('direct traffic and the separate mobile file are labelled accurately', () => {
  const h = harness({url: 'https://sankalpam.live/sankam-mobile.html', host: 'https://us.i.posthog.com'});
  h.document.referrer = '';
  h.load();
  assert.equal(h.records[0].properties.surface, 'mobile_file');
  assert.equal(h.records[0].properties.$referrer, '');
  assert.equal(h.records[0].properties.$referring_domain, '$direct');
});

test('a blocked SDK never throws or reports invented successes', () => {
  const h = harness();
  h.scripts[0].onerror();
  assert.doesNotThrow(() => h.window.SGAnalytics.beginPdf('sank', 'print'));
  assert.equal(h.records.length, 0);
});

test('feature clicks use only approved identifiers, never button text or form input', () => {
  const h = harness(); h.load(); h.records.length = 0;
  function click(id, tab) {
    const el = {id, dataset: tab ? {tab} : {}, disabled: false,
      textContent: SECRET, value: SECRET, hasAttribute: () => false, getAttribute: () => null};
    h.listeners.click({target: {closest: () => el}});
  }
  click('subBtn'); click(SECRET); click('', 'calendar'); click('', SECRET);
  assert.deepEqual(h.records.map(r => r.properties.feature), ['subscribe', 'calendar']);
  assert.ok(!JSON.stringify(h.records).includes(SECRET));
});

test('replay config masks text/inputs, blocks output, disables bodies/logs and strips URL secrets', () => {
  const h = harness(); h.load();
  assert.equal(h.options.autocapture, false);
  assert.equal(h.options.person_profiles, 'never');
  assert.equal(h.options.enable_recording_console_log, false);
  assert.equal(h.options.session_recording.maskAllInputs, true);
  assert.equal(h.options.session_recording.maskTextSelector, '*');
  assert.ok(h.options.session_recording.blockSelector.includes('#result'));
  assert.ok(h.options.session_recording.blockSelector.includes('#tResult'));
  assert.equal(h.options.session_recording.recordBody, false);
  assert.equal(h.options.session_recording.streamNetworkBody, false);
  assert.equal(h.options.session_recording.captureJsonLd, false);
  assert.ok(h.options.session_recording.blockSelector.includes('#karuList'));
  const scrubbed = h.options.session_recording.maskCapturedNetworkRequestFn({name: h.window.location.href,
    requestBody: SECRET, responseBody: SECRET, requestHeaders: {authorization: SECRET}, responseHeaders: {secret: SECRET}});
  assert.equal(scrubbed.name, 'https://sankalpam.live/');
  assert.ok(!JSON.stringify(scrubbed).includes(SECRET));
});

function functionSource(html, name, async = false) {
  const start = html.indexOf((async ? 'async ' : '') + 'function ' + name + '(');
  assert.ok(start >= 0, name);
  const end = html.indexOf('\n}', start);
  assert.ok(end >= 0, name);
  return html.slice(start, end + 2);
}

for (const file of ['index.html', 'sankam-mobile.html']) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  test(file + ': all inline scripts compile and the shared assets are loaded', () => {
    for (const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script\s*>/gi)) {
      if (match[1].trim()) assert.doesNotThrow(() => new vm.Script(match[1]));
    }
    assert.ok(html.includes('<script defer src="posthog-config.js"></script>'));
    assert.ok(html.includes('<script defer src="sankalpam-posthog.js"></script>'));
  });

  function withFunctions(names) {
    const h = harness(); h.load();
    const nodes = new Map();
    const $ = id => {
      if (!nodes.has(id)) nodes.set(id, {value: '', textContent: '', innerHTML: '', dataset: {}, style: {},
        classList: {add() {}, remove() {}}, scrollIntoView() {}, cloneNode() {return {};}});
      return nodes.get(id);
    };
    Object.assign(h.context, {$, fetch: async () => ({json: async () => ({ok: true})}),
      SUBSCRIBE_URL: 'https://example.invalid/email', pdfName: () => SECRET + '.pdf',
      setTimeout: () => 0, clearTimeout() {}, console: {error() {}, warn() {}}});
    h.window.print = () => { if (h.listeners.afterprint) h.listeners.afterprint(); };
    for (const name of ['sgTrack', 'sgPdfAttempt', ...names]) {
      vm.runInContext(functionSource(html, name, name === 'generateAndSendPdf'), h.context);
    }
    h.records.length = 0;
    return {...h, $, nodes};
  }

  test(file + ': print requests close without claiming a PDF was saved; attempts stay separate', () => {
    const h = withFunctions(['printDoc']);
    vm.runInContext("printDoc('sank', false); printDoc('tarp', true);", h.context);
    assert.deepEqual(h.records.map(r => r.event), ['pdf_flow_started','pdf_print_requested','pdf_print_dialog_closed',
      'pdf_flow_started','pdf_print_requested','pdf_print_dialog_closed']);
    assert.equal(new Set(h.records.slice(0,3).map(r => r.properties.attempt_id)).size, 1);
    assert.notEqual(h.records[0].properties.attempt_id, h.records[3].properties.attempt_id);
    assert.ok(!JSON.stringify(h.records).includes(SECRET));
    assert.equal(h.document.title, SECRET);
  });

  test(file + ': failed print restores the UI and records only a fixed failure code', () => {
    const h = withFunctions(['printDoc']);
    h.window.print = () => {throw Error(SECRET);};
    assert.throws(() => vm.runInContext("printDoc('sank', true)", h.context));
    assert.deepEqual(h.records.map(r => r.event), ['pdf_flow_started','pdf_print_requested','pdf_generation_failed']);
    assert.equal(h.records[2].properties.failure_code, 'print_unavailable');
    assert.equal(h.document.title, SECRET);
    assert.ok(!JSON.stringify(h.records).includes(SECRET));
    assert.equal(h.listeners.afterprint, undefined);
  });

  test(file + ': missing analytics has no effect on the existing print operation', () => {
    const h = withFunctions(['printDoc']);
    delete h.window.SGAnalytics;
    assert.doesNotThrow(() => vm.runInContext("printDoc('sank', false)", h.context));
    assert.equal(h.records.length, 0);
    assert.equal(h.document.title, SECRET);
  });

  test(file + ': invalid document inputs cannot record success; valid rendering works without analytics', () => {
    const h = withFunctions(['generateSankalpam']);
    Object.assign(h.context, {esc: value => value, notDeva: () => false, famCheck: () => false,
      famData: () => [], flagInvalid() {}, composeSankalpam: () => '<p>' + SECRET + '</p>',
      genStamp: () => 'test', saveDetails() {}, switchTab() {}});
    vm.runInContext('generateSankalpam()', h.context);
    assert.deepEqual(h.records.map(r => r.event), ['document_generation_requested']);
    for (const id of ['date','name','nameD','gotraD','nak']) h.$(id).value = id === 'date' ? '2026-10-26' : '0';
    h.records.length = 0;
    vm.runInContext('generateSankalpam()', h.context);
    assert.deepEqual(h.records.map(r => r.event), ['document_generation_requested','document_generated']);
    assert.ok(!JSON.stringify(h.records).includes(SECRET));
    delete h.window.SGAnalytics;
    assert.doesNotThrow(() => vm.runInContext('generateSankalpam()', h.context));
    assert.ok(h.$('result').innerHTML.includes(SECRET));
  });

  function pdfGenerator(h, value = 'data:application/pdf;base64,QUJD') {
    const generator = () => ({set() {return this;}, from() {return this;}, outputPdf: async () => value});
    h.window.html2pdf = h.context.html2pdf = generator;
  }

  test(file + ': actual PDF generation and accepted email delivery are distinct, correlated events', async () => {
    const h = withFunctions(['generateAndSendPdf']); pdfGenerator(h);
    await vm.runInContext("generateAndSendPdf('sank', '" + SECRET + "@example.com', $('status'))", h.context);
    assert.deepEqual(h.records.map(r => r.event), ['pdf_flow_started','pdf_generation_requested','pdf_generation_succeeded','pdf_email_succeeded']);
    assert.equal(new Set(h.records.map(r => r.properties.attempt_id)).size, 1);
    assert.ok(!JSON.stringify(h.records).includes(SECRET));
  });

  test(file + ': broken PDF output cannot be counted as generation or email success', async () => {
    const h = withFunctions(['generateAndSendPdf']); pdfGenerator(h, 'data:application/pdf;base64,');
    await vm.runInContext("generateAndSendPdf('sank', '" + SECRET + "@example.com', $('status'))", h.context);
    assert.deepEqual(h.records.map(r => r.event), ['pdf_flow_started','pdf_generation_requested','pdf_generation_failed']);
    assert.equal(h.records[2].properties.failure_code, 'pdf_generation');
  });

  test(file + ': sending errors retain the real PDF success but do not claim delivery', async () => {
    const h = withFunctions(['generateAndSendPdf']); pdfGenerator(h);
    h.context.fetch = async () => {throw Error(SECRET);};
    await vm.runInContext("generateAndSendPdf('tarp', '" + SECRET + "@example.com', $('status'))", h.context);
    assert.deepEqual(h.records.map(r => r.event), ['pdf_flow_started','pdf_generation_requested','pdf_generation_succeeded','pdf_email_failed']);
    assert.equal(h.records[3].properties.failure_code, 'email_service');
    assert.ok(!JSON.stringify(h.records).includes(SECRET));
  });
}
