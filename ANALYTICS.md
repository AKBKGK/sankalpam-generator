# Usage analytics (PostHog) – from v5.2.17, more events in v5.2.19, share tags in v5.2.20

Anonymous usage counts so the app can be improved. **Key added (US Cloud)** in `index.html`
(`PH_KEY`; `PH_HOST` is `https://us.i.posthog.com`, or `https://eu.i.posthog.com` for EU Cloud).
The library is pinned: `posthog-js@1.438.7` (`array.no-external.js`, loads no further scripts).

**The one number to watch:** weekly makers = unique users with `sankalpam_generated` or `tarpanam_generated` in a week.

## Events

Every event also carries `app_version`, `surface` (mobile/desktop) and `installed`.

| Event | When | Properties | Since |
|---|---|---|---|
| `$pageview` | App opened | page address cut to origin + path; referrer cut to its site; `utm_source`, `utm_medium`, `utm_campaign` when the link had them | v5.2.17 (tags v5.2.19) |
| `tab_opened` | A tab button is tapped | `tab` | v5.2.17 |
| `quick_help_opened` | Quick Help opened | – | v5.2.17 |
| `quick_help_answer` | A Quick Help answer shown | `topic` (sankalpam, panchang, good_time, next_days) | v5.2.19 |
| `welcome_step_viewed` | Each welcome step shown – counts views, also on Back/Next and repeat opens; count unique users for the funnel | `step` (1–4), `for` (self, family, form) | v5.2.19 |
| `welcome_completed` | "See my saṅkalpam" in the welcome steps | `gotra_known` (yes/no), `star_from` (list, finder_time, finder_day) | v5.2.19 |
| `star_finder_used` | Star finder shows a result | `with_time` (yes/no), `for` (self, family, form, quick_help) | v5.2.19 |
| `sankalpam_generated` | Generate Saṅkalpam succeeds | `script`, `calendar`, `method`, `attempt` | v5.2.17 |
| `tarpanam_generated` | Tarpaṇam text shown (not automatic refreshes) | `tarpanam`, `script`, `attempt` | v5.2.17 |
| `generate_blocked` | Generate, Subscribe or Tarpaṇam stopped by a missing or wrong field (not automatic refreshes) | `doc` (sank, tarp, email); `field` – see below | v5.2.19 |
| `tarpanam_date_confirmed` | "My pañcāṅgam gives this date – continue" tapped | `tarpanam` | v5.2.19 |
| `which_day_used` | "Use" tapped in "Which day?" | `tarpanam` | v5.2.19 |
| `calendar_action` | Calendar: festival chosen, day shared, "Saṅkalpam for this day" | `action` (festival, share_day, sankalpam_for_day) | v5.2.19 |
| `setting_changed` | Language, calendar or method changed | `setting` (language, calendar, method), `to`, `auto` (yes = the app changed it: letters follow the calendar, Tirukkaṇita abroad) | v5.2.19 |
| `app_updated` | First open after an update (once per phone per version) | `from`, `to` (version numbers; `from` is `older` for the first update to v5.2.19) | v5.2.19 |
| `copy_tapped` | Copy text | `doc` | v5.2.17 |
| `share_tapped` | Share / WhatsApp | `what` (sank, panch, app, other), `method` | v5.2.17 |
| `pdf_print_opened` | Print / PDF or Compact PDF tapped (print dialog opens) | `doc`, `format`, `attempt` | v5.2.17 |
| `pdf_print_closed` | Print dialog closed – **saved, printed or cancelled; the app cannot tell which** | same + `seconds` | v5.2.17 |
| `pdf_email_requested` / `pdf_email_succeeded` / `pdf_email_failed` | "Email this PDF once" | `doc`; failure `code`: `pdf_library`, `server`, `error` | v5.2.17 |
| `feedback_sent` | Feedback sent (the text is not included) | – | v5.2.17 |
| `email_subscribed` | Daily email sign-up accepted (the address is not included) | `mode` | v5.2.17 |

**`generate_blocked` fields:** saṅkalpam – `date`, `name`, `gotra`, `star`, `devanagari`, `family_gotra`, `family_devanagari`, `family_star`;
email – also `email`, `consent`, `family_consent`, `time`; tarpaṇam – `date`, `gotra`, `name_ending`, `alive`, `mother_gotra`, `devanagari`,
`karunika`, `ancestor_names`, `date_not_suited`.

`attempt` is a short random code that links one generated saṅkalpam/tarpaṇam to its PDF taps.

**PDF funnel:** `sankalpam_generated` → `pdf_print_opened` → `pdf_print_closed`. "Closed" does not mean a PDF was saved.

**First-visit funnel:** `$pageview` → `welcome_step_viewed` step 2 → 3 → 4 → `welcome_completed` → `sankalpam_generated`.

## Source tags

The app reads `utm_source`, `utm_medium` and `utm_campaign` from the address it was opened with (before it tidies the address bar)
and sends them with `$pageview`. Only short plain words are kept (letters, digits, `_ . -`, up to 40). Never put a person's name in a tag – a plain word cannot be told apart from a name. Example for your own posts:
`https://sankalpam.live/?utm_source=whatsapp&utm_medium=group&utm_campaign=diwali`.
**From v5.2.20 the app's own Share messages are tagged:** the sankalpam.live link in a shared saṅkalpam, pañcāṅgam or "Share the app" message ends with
`?utm_source=share&utm_medium=sankalpam` / `panchang` / `app` (`?features&utm_source=share&utm_medium=app` for the features page).
In PostHog, filter `$pageview` by `utm_source = share` and break down by `utm_medium` to see visits that came from shares.
The text on screen, Copy text and the PDF are unchanged; links already forwarded before v5.2.20 stay untagged.

## Privacy

- Never sent: names, gotra, star, rāśi, birth details, places typed, email addresses, feedback text, saṅkalpam/tarpaṇam text, page title.
- Every property is a short fixed word or number (checked in the v5.2.19 tests).
- No cookies (browser storage only), no person profiles, no autocapture, no session recording, no surveys, no feature flags, no performance capture.
- Always on from v5.2.18 (no switch; a short note in **More → Usage statistics** says what is counted). Not sent with `?nocount=1` (owner's phone), Do Not Track, automated browsers, or on a phone where the visitor turned it off in v5.2.17.
- In PostHog → Project settings, turn on **Discard client IP data** and set the data retention you want.
- **Location:** even with client IP discarded, PostHog works out a location from the IP before dropping it ([PostHog docs](https://posthog.com/docs/privacy/data-storage)). Decide whether to keep country only (remove city with PostHog's property filter) and say so in Help.
- If PostHog is blocked or down, the app works exactly as before.
- The Apps Script counter (opens, WhatsApp shares, PDF taps) is unchanged and runs alongside.
- One new item on the phone: `sankalpam.lastVer` (the last version opened), so `app_updated` is counted once.

## Dashboards to build in PostHog

1. **Weekly health** – weekly makers, new users per week, daily ÷ monthly users, shares per maker.
2. **First visit** – the first-visit funnel above; `generate_blocked` broken down by `field`.
3. **Coming back** – retention (made one → made one again, by week); share of `installed`. Check once that retention works on anonymous events.
4. **Features and sources** – trends per feature event; new users by `utm_source`; PDF funnel; `pdf_email_failed` by `code`.

Filter out internal and test users in every insight; break down by `app_version` after each release.

## Volume and cost

PostHog: first 1 million events a month free; then $0.00005 per event, falling to $0.000009 above 250 million ([pricing](https://posthog.com/docs/product-analytics/pricing)). Free plan keeps data 1 year ([pricing](https://posthog.com/pricing)). Estimate (not measured): about 50 events per monthly user, so about 20,000 monthly users fit in the free tier – replace with the real figure after four weeks.

## Still open

| Item | Status |
|---|---|
| Source tag on the app's own Share links | Done in v5.2.20 (long form, read by PostHog directly) |
| Country only, or also city, from the IP | Owner to decide; PostHog setting, no code |
| Retire the Apps Script counter | After four weeks of running both |
| Check that retention works on anonymous events | Once, in PostHog |
