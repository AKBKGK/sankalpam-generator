/* Sankalpam analytics. No form values, document text or email addresses are read. */
(function (w, d) {
  'use strict';
  if (w.SGAnalytics) return;
  var config = w.SANKALPAM_POSTHOG || {};
  var hosts = ['https://us.i.posthog.com', 'https://eu.i.posthog.com'];
  var active = hosts.indexOf(config.apiHost) !== -1 && /^phc_[A-Za-z0-9]+$/.test(config.projectToken || '') &&
    /^(www\.)?sankalpam\.live$/.test(w.location.hostname);
  try {
    var originalQuery = typeof SG_QS === 'string' ? SG_QS : w.location.search;
    var owner = new URLSearchParams(originalQuery).get('nocount');
    if (owner === '1') w.localStorage.setItem('sankalpam.noCount', '1');
    if (owner === '0') w.localStorage.removeItem('sankalpam.noCount');
    if (w.localStorage.getItem('sankalpam.noCount') === '1') active = false;
  } catch (ignore) {}
  // Preserve browser-level privacy signals; no app opt-out control is added.
  if (w.navigator.globalPrivacyControl === true || w.navigator.doNotTrack === '1') active = false;

  var events = new Set(['$pageview', '$pageleave', 'feature_used', 'document_generation_requested',
    'document_generated', 'form_validation_failed', 'pdf_flow_started', 'pdf_print_requested',
    'pdf_print_dialog_closed', 'pdf_generation_requested', 'pdf_generation_succeeded',
    'pdf_generation_failed', 'pdf_email_succeeded', 'pdf_email_failed']);
  var features = new Set(['form', 'output', 'tarpanam', 'calendar', 'email', 'feedback', 'quick_help',
    'features', 'copy_sankalpam', 'copy_tarpanam', 'share_sankalpam', 'share_panchangam',
    'share_app', 'add_family', 'add_karunika', 'subscribe', 'feedback_send', 'wizard_complete']);
  var sdkKeys = new Set(['token', 'distinct_id', '$device_id', '$session_id', '$window_id', '$lib',
    '$lib_version', '$insert_id', '$is_identified', '$process_person_profile', '$browser', '$browser_version',
    '$os', '$os_version', '$device_type', '$screen_width', '$screen_height', '$viewport_width',
    '$viewport_height', '$time', '$timezone', '$timezone_offset', '$host', '$pathname',
    '$current_url', '$referrer', '$referring_domain']);
  var queue = [], ready = false, unavailable = false;
  var page = /sankam-mobile\.html$/.test(w.location.pathname) ? 'mobile_file' : 'main';
  var release = 'unknown';
  try { if (typeof APP_VERSION === 'string') release = APP_VERSION; } catch (ignore) {}

  function safeUrl(value, originOnly) {
    if (!value) return '';
    try {
      var u = new URL(value, w.location.origin);
      if (!/^https?:$/.test(u.protocol)) return '';
      return u.origin + (originOnly ? '' : u.pathname);
    } catch (ignore) { return ''; }
  }

  function properties(input) {
    input = input || {};
    var out = {surface: page, app_release: release};
    if (features.has(input.feature)) out.feature = input.feature;
    if (input.document_type === 'sank' || input.document_type === 'tarp') out.document_type = input.document_type;
    if (['print', 'compact_print', 'email_pdf'].indexOf(input.output_mode) !== -1) out.output_mode = input.output_mode;
    if (typeof input.attempt_id === 'string' && /^[a-f0-9-]{36}$/.test(input.attempt_id)) out.attempt_id = input.attempt_id;
    if (['print_unavailable', 'pdf_library', 'pdf_generation', 'email_service', 'email_rejected'].indexOf(input.failure_code) !== -1) {
      out.failure_code = input.failure_code;
    }
    return out;
  }

  function beforeSend(event) {
    // Replay snapshots use the SDK's masking controls below, independently of event properties.
    if (event.event === '$snapshot') return event;
    if (!events.has(event.event)) return null;
    var input = event.properties || {}, out = properties(input);
    Object.keys(input).forEach(function (key) {
      if (sdkKeys.has(key)) out[key] = input[key];
    });
    out.$current_url = safeUrl(w.location.href, false);
    out.$pathname = w.location.pathname;
    out.$referrer = safeUrl(d.referrer || '', true);
    out.$referring_domain = out.$referrer ? new URL(out.$referrer).hostname : '$direct';
    // Never retain the dynamically generated PDF filename as a page title.
    out.$title = 'Sankalpam Generator';
    event.properties = out;
    return event;
  }

  function capture(name, input) {
    if (!active || unavailable || !events.has(name)) return;
    var props = properties(input);
    try {
      if (ready) w.posthog.capture(name, props);
      else if (queue.length < 100) queue.push([name, props]);
    } catch (ignore) {} // Analytics must never interrupt the application.
  }

  function beginPdf(kind, mode) {
    var id;
    try { id = w.crypto.randomUUID(); } catch (ignore) {
      // Per-attempt correlation only, never an authentication or visitor identifier.
      id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.floor(Math.random() * 16); return (c === 'x' ? r : (r & 3) | 8).toString(16);
      });
    }
    var attempt = properties({document_type: kind, output_mode: mode, attempt_id: id});
    capture('pdf_flow_started', attempt);
    return attempt;
  }

  w.SGAnalytics = Object.freeze({capture: capture, beginPdf: beginPdf});
  if (!active) return;

  var options = {
    api_host: config.apiHost,
    defaults: '2026-08-30',
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    capture_dead_clicks: false,
    capture_exceptions: false,
    capture_heatmaps: false,
    capture_performance: false,
    rageclick: false,
    person_profiles: 'never',
    disable_surveys: true,
    enable_recording_console_log: false,
    disable_session_recording: config.replayEnabled !== true,
    before_send: beforeSend,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: '*',
      blockSelector: '#result, #tResult, #kartaPv, #karuList, #wz, #qc, img, canvas, iframe',
      recordHeaders: false,
      recordBody: false,
      streamNetworkBody: false,
      captureJsonLd: false,
      maskCapturedNetworkRequestFn: function (request) {
        if (request.name) request.name = safeUrl(request.name, false);
        // Defensive scrubbing in addition to disabling body/header access above.
        request.requestBody = undefined;
        request.responseBody = undefined;
        request.requestHeaders = undefined;
        request.responseHeaders = undefined;
        return request;
      }
    },
    loaded: function (sdk) {
      ready = true;
      queue.splice(0).forEach(function (item) {
        try { sdk.capture(item[0], item[1]); } catch (ignore) {}
      });
    }
  };

  // Standard PostHog HTML bootstrap, adapted to supply the reviewed configuration above.
  // https://posthog.com/docs/libraries/js (posthog-js is MIT licensed).
  try {
    if (!w.posthog) {
      var stub = [];
      stub._i = [];
      stub.__SV = 1;
      stub.people = [];
      stub.init = function (token, settings) { stub._i.push([token, settings, 'posthog']); };
      w.posthog = stub;
      var script = d.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = config.apiHost.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js';
      script.onerror = function () { unavailable = true; queue.length = 0; };
      w.posthog.init(config.projectToken, options);
      d.head.appendChild(script);
    } else {
      w.posthog.init(config.projectToken, options);
    }
  } catch (ignore) { unavailable = true; queue.length = 0; }

  capture('$pageview');
  d.addEventListener('click', function (event) {
    var el = event.target.closest && event.target.closest('button, [data-qc-open]');
    if (!el || el.disabled) return;
    var key = el.dataset.tab;
    var byId = {featOpen: 'features', featShare: 'share_app', homeShare: 'share_sankalpam',
      shareBtn: 'share_sankalpam', tCopy: 'copy_tarpanam', famAdd: 'add_family', karuAdd: 'add_karunika',
      subBtn: 'subscribe', fbSend: 'feedback_send', wzDone: 'wizard_complete'};
    if (!key) key = byId[el.id];
    if (el.hasAttribute('data-qc-open')) key = 'quick_help';
    if (el.getAttribute('onclick') === 'copySankalpam()') key = 'copy_sankalpam';
    if (el.hasAttribute('data-share-day') || el.hasAttribute('data-share-cal')) key = 'share_panchangam';
    if (features.has(key)) capture('feature_used', {feature: key});
  }, true);
  w.addEventListener('pagehide', function () { capture('$pageleave'); });
})(window, document);
