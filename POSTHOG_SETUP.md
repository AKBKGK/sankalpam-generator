# Sankalpam.live PostHog integration

Prepared: 26 October 2026. This is a review change, not a deployed integration.

## Current status

- The supplied public website project token is in `posthog-config.js`.
- The project's API host is not confirmed. Its configuration is deliberately empty; no SDK loads and no PostHog events are sent until it is filled correctly.
- `index.html` and `sankam-mobile.html` load the same optional tracking helper.
- No analytics opt-out button is added. Existing owner-device exclusion (`?nocount=1`, reset with `?nocount=0`) remains. Browser DNT/GPC signals are respected.
- No PostHog dashboard, subscription, project setting or actual email has been created by this source change.

## Finish the connection

1. In the existing PostHog project's JavaScript installation snippet, copy `api_host` exactly. The helper accepts `https://us.i.posthog.com` or `https://eu.i.posthog.com`. The token prefix does not establish the correct region.
2. Fill `apiHost` in `posthog-config.js`. Never put a personal API key or a password in browser code.
3. Test on a copy at the real domain before production deployment. Localhost, file previews and other hostnames do not send data.
4. Keep dashboard sharing private. Do not enable public links or put personal management credentials in GitHub.
5. In project settings, confirm IP discarding, retention, replay settings and usage limits. Do not claim legal anonymity: random browser identifiers are pseudonymous.
6. For replay, verify masking with actual outgoing SDK snapshots and the private replay viewer before launch. The source enables the replay capability, but project-level replay enablement is also needed. The offline tests verify configuration, not the real recorder's output.
7. When deploying, upload both shared JS files alongside the two HTML files. Preserve the rest of the website and existing Google Apps Script email service. Deploying HTML alone would leave the helper unavailable (the app itself continues to work).

The existing GitHub source identifies itself as a review build. Confirm the deployed source before replacing the live application.

## Confirmed event map

| Event | Actual trigger | Meaning |
|---|---|---|
| `$pageview` | SDK initializes for an eligible page | A recorded page view, with sanitized URL and referral origin |
| `$pageleave` | Browser pagehide | Best-effort page leave; delivery is not guaranteed |
| `feature_used` | An approved navigation or feature button is clicked | A deliberate activation, not proof the feature completed |
| `document_generation_requested` | Saṅkalpam or explicit tarpaṇam generation is requested, including Quick Help's other-person path | A request; it can be rejected by input validation |
| `document_generated` | Document HTML has been rendered | Document rendering completed; no PDF is implied |
| `form_validation_failed` | Existing form-validation highlighting runs | A validation event; no field names or values are sent |
| `pdf_flow_started` | Print/Compact PDF or existing email-PDF workflow starts | A new random `attempt_id` for this attempt |
| `pdf_print_requested` | Just before the browser print function is called | Print/Save-as-PDF was requested |
| `pdf_print_dialog_closed` | Browser emits afterprint | The print interface finished; it may have been cancelled |
| `pdf_generation_requested` | The email-PDF generator starts | Actual in-browser PDF generation requested |
| `pdf_generation_succeeded` | The generator returns a nonempty PDF data URI | PDF created, not email delivered or file saved |
| `pdf_generation_failed` | A handled generation/print failure | Fixed failure code, never the raw error |
| `pdf_email_succeeded` | Existing email service returns `ok` | Service accepted the email; inbox delivery is not independently verified |
| `pdf_email_failed` | Service rejects the request or sending fails | Distinct from a PDF generation failure |

The current app's normal PDF option uses the browser's print dialog. There is no reliable `pdf_download_succeeded` event: the page cannot establish that a file was saved. The actual JavaScript PDF generator exists in the currently hidden one-time email-PDF feature; this change does not unhide it.

## Private dashboard

Create a dashboard named **Sankalpam usage and PDF requests**, timezone **Asia/Kolkata**.

| Section | Configuration |
|---|---|
| Usage | `$pageview` totals, unique pseudonymous browser IDs and sessions by day; break down by `$device_type` and `surface` |
| Traffic sources | `$pageview` broken down by `$referring_domain`; direct/unknown shown separately |
| Features | `feature_used` counts and sessions, broken down by `feature` |
| Main document-to-print funnel | `$pageview` → `document_generation_requested` → `document_generated` → `pdf_print_requested`, within the same session and proposed 30-minute conversion window |
| Print attempt details | `pdf_flow_started` → `pdf_print_requested` → `pdf_print_dialog_closed`, filtered to `output_mode` print/compact_print and correlated by `attempt_id` |
| Email-PDF attempts | `pdf_flow_started` → `pdf_generation_requested` → `pdf_generation_succeeded` → `pdf_email_succeeded`, filtered to `output_mode=email_pdf` and correlated by `attempt_id` |
| Errors | `pdf_generation_failed` / `pdf_email_failed` counts by fixed `failure_code`; show alongside funnels |

Do not match a later attempt's completion to an earlier attempt. Use the funnel's constant-property/attempt correlation where supported; otherwise use an attempt-level query rather than presenting session totals as per-attempt success rates. Exclude incomplete current windows when calling a drop-off final.

The main funnel is session-level: generation can also refresh when language changes or when sharing, and one session can generate more than one document. The attempt-level funnels start at the actual PDF/print entry point. A drop-off is recorded non-completion, not evidence of frustration or a known cause. Browser privacy signals, blockers, missing events and network failures reduce observed counts.

Traffic attribution uses referral origin only. Query strings and fragments, including UTM parameters, are excluded in this initial integration. Do not claim campaign-level attribution.

## Daily owner email (requested; not yet configured)

- Recipient: **akumar118@gmail.com** only.
- Frequency: **daily**.
- Time: **00:00 Asia/Kolkata (12 midnight IST)**.
- Reporting period: the previous completed IST calendar day, not a rolling partial day.
- Content: usage, sources, feature use, print/PDF requests, funnel drop-offs and fixed error counts. No personal visitor data or recording attachments.

From the private dashboard, create an email subscription. Choose the requested schedule and confirm the displayed next delivery and timezone. If the UI uses UTC, midnight IST corresponds to **18:30 UTC on the preceding date**. Set insight date filters to the previous completed IST day and confirm the actual reporting interval before saving. Do not assume snapshot subscriptions infer the reporting period from the delivery time.

A browser project token can submit events; it cannot administer the private dashboard or create an email subscription. Account/project access is still needed for that final configuration. Email sending can run with the user's computer and browser closed once the PostHog subscription is configured.

## Privacy and verification

- Explicit event properties are allowlisted. User-provided values, email recipients, gotra, stars, birth information, document text, generated filenames and raw errors are not passed to analytics.
- Automatically attached event properties are filtered; current/referral URLs lose query strings and fragments. No `identify()` calls or person profiles are used.
- Replay masks all text and inputs and blocks generated output, ancestor relation data, wizard/Quick Help panels, images, canvases and iframes. Request/response bodies, headers, console recording and JSON-LD capture are disabled; network URL queries/fragments are scrubbed.
- The existing on-device data storage and subscription consent/unsubscribe flow are not altered. The help text discloses PostHog collection without adding an app analytics opt-out control.
- Analytics exceptions are swallowed. Existing rendering, email and print behavior must remain available when PostHog is blocked.

Run the offline checks with:

```sh
node --test tests/posthog.test.cjs
```

These checks compile all inline application scripts and exercise the real print/email-PDF functions with mocked browser APIs, email delivery and SDK. They verify sanitization, direct/mobile attribution, separate attempts, print cancellation semantics, failure paths and absent/blocked analytics. No test events or real emails are sent.

Real Safari/Chrome, real SDK snapshots, live event arrival, private dashboard access and scheduled email delivery remain to be verified after the host and project access are available. Chromium was unavailable in the preparation environment; no full browser result is claimed.

## Primary documentation

- [JavaScript installation](https://posthog.com/docs/libraries/js)
- [Configuration and before_send](https://posthog.com/docs/libraries/js/config)
- [Replay masking](https://posthog.com/docs/session-replay/privacy)
- [Network capture controls](https://posthog.com/docs/session-replay/network-recording)
- [Funnels](https://posthog.com/docs/product-analytics/funnels)
- [Scheduled email subscriptions](https://posthog.com/docs/product-analytics/subscriptions)
