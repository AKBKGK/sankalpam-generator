# Usage analytics (PostHog) – v5.2.17

Anonymous usage counts so the app can be improved. **Key added (US Cloud)** in `index.html`
(`PH_KEY`; `PH_HOST` is `https://us.i.posthog.com`, or `https://eu.i.posthog.com` for EU Cloud).
The library is pinned: `posthog-js@1.438.7` (`array.no-external.js`, loads no further scripts).

## Events

| Event | When | Properties (besides app_version, surface mobile/desktop, installed) |
|---|---|---|
| `$pageview` | App opened | page address cut to origin + path; referrer cut to its site |
| `tab_opened` | A tab button is tapped | `tab` |
| `quick_help_opened` | Quick Help opened | – |
| `sankalpam_generated` | Generate Saṅkalpam succeeds | `script`, `calendar`, `method`, `attempt` |
| `tarpanam_generated` | Tarpaṇam text shown (not automatic refreshes) | `tarpanam`, `script`, `attempt` |
| `copy_tapped` | Copy text | `doc` |
| `share_tapped` | Share / WhatsApp | `what` (sank, panch, app, other), `method` |
| `pdf_print_opened` | Print / PDF or Compact PDF tapped (print dialog opens) | `doc`, `format`, `attempt` |
| `pdf_print_closed` | Print dialog closed – **saved, printed or cancelled; the app cannot tell which** | same + `seconds` |
| `pdf_email_requested` / `pdf_email_succeeded` / `pdf_email_failed` | "Email this PDF once" | `doc`; failure `code`: `pdf_library`, `server`, `error` |
| `feedback_sent` | Feedback sent (the text is not included) | – |
| `email_subscribed` | Daily email sign-up accepted (the address is not included) | `mode` |

`attempt` is a short random code that links one generated saṅkalpam/tarpaṇam to its PDF taps.

**PDF funnel:** `sankalpam_generated` → `pdf_print_opened` → `pdf_print_closed`. "Closed" does not mean a PDF was saved.

## Privacy

- Never sent: names, gotra, star, rāśi, birth details, places typed, email addresses, feedback text, saṅkalpam/tarpaṇam text, page title.
- No cookies (browser storage only), no person profiles, no autocapture, no session recording, no surveys, no feature flags, no performance capture.
- Not sent with `?nocount=1` (owner's phone), Do Not Track, automated browsers, or after the visitor turns it off in **More → Usage statistics**.
- In PostHog → Project settings, turn on **Discard client IP data** and set the data retention you want.
- If PostHog is blocked or down, the app works exactly as before.
- The Apps Script counter (opens, WhatsApp shares, PDF taps) is unchanged and runs alongside.
