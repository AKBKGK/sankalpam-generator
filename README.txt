================================================================================
SAṄKALPAM GENERATOR v5.2.2
Updated: 2026-10-10
================================================================================

FILES IN THIS FOLDER
────────────────────
  index.html            → the app (everything is inside this one file) – CHANGED
  manifest.webmanifest  → app name and icons – CHANGED ("display": "standalone")
  README.md             → project description (shown on GitHub) – CHANGED
  README.txt            → this file – CHANGED
  CHANGELOG.md / .txt   → version history – CHANGED
  LICENSE               → MIT License (unchanged)
  (icons: apple-touch-icon.png, icon-192.png, icon-512.png – unchanged)

================================================================================
WHAT'S NEW IN 5.2.2  (details in CHANGELOG.txt)
  • Birth star starts blank and must be chosen (no more silent "Aśvinī").
    Rāśi and pāda wait for the star. A short note asks the user to confirm it.
    The same applies to family members.
  • Gotra list: "Not known (use Kāśyapa)".
  • Name ending: None · नाम्नः (default), Śarmā, Varmā, Gupta, Dāsa – all
    available in the saṅkalpam, with a note and a "Why?" link to the
    Viṣṇu Purāṇa 3.10.9 verse. Women: नाम्न्याः, as before.
  • Name box: "Your first name only (no surname)", example "shreenivaasa".
  • Live preview: the user's own line of the saṅkalpam appears while typing,
    with ____ for anything still missing.
  • Share button (phone share sheet: WhatsApp, Gmail …).
  • Email box under the saṅkalpam ("Get your saṅkalpam every evening").
  • Home-screen icon opens like an app ("standalone").
  • Vākya stays the default; the Vākya / Tirukkaṇita switch moved into
    "Edit pañcāṅgam".
  • One highlighted line: "A saṅkalpam is a vow: you state when, where,
    who and why before a pūjā."
  • "📍 Use my location for sunrise times" picks the nearest city in the list
    (only when the button is pressed; nothing is saved or sent).
  • Details (name, gotra, star, ending) are remembered as soon as they are
    entered, not only after Generate.
  • Tarpaṇam with a non-Śarmā ending: "Use Śarmā and continue" button.
  • Mahālaya tarpaṇam hidden except from 15 days before Mahālaya pakṣa until
    it ends (next shown 1–30 Sep 2027, by the app's calculation).
    OWNER LINK (to check or correct it at any time, on your device only):
      https://sankalpam.live/?show=mahalaya      (stays on for that device)
      https://sankalpam.live/?show=off           (hides it again)
    Note: this is not a password – anyone who knows the link can use it.

NOT CHANGED: all pañcāṅgam calculations and the whole tarpaṇam text. A test
with the same saved details gives exactly the same saṅkalpam (Śarmā) and
tarpaṇam as v5.2.1, apart from the version number.

================================================================================
⚠️  BEFORE YOU UPLOAD – PLEASE READ
  1. VĀDHYĀR CHECK (sacred text). Please have your vādhyār confirm:
       – the saṅkalpam endings वर्मणः, गुप्तस्य, दासस्य and नाम्नः
         (men, "None"), and नाम्न्याः for women;
       – "Not known → Kāśyapa" for an unknown gotra.
     If any of these is not confirmed, tell me and I will switch it off.
  2. TARPAṆAM stays Śarmā-only (as in 5.2.1). Because the new default ending
     is None, a new user who generates a tarpaṇam sees a "Use Śarmā and
     continue" button. Users who saved details earlier keep Śarmā.
  3. DAILY EMAIL (Code.gs v8) – NO CHANGE NEEDED. Code.gs loads the app's code
     from the live page at CONFIG.APP_URL, so the emails follow 5.2.2 by
     themselves. Tested by simulating the Code.gs loader on 5.2.1 and 5.2.2:
     existing (Śarmā) subscribers get exactly the same email text; new
     subscribers get नाम्नः / नाम्न्याः as chosen. Two things to do:
       – CONFIG.APP_URL is still https://akbkgk.github.io/sankalpam-generator/,
         so upload index.html to GITHUB too (Option A), or change APP_URL to
         https://sankalpam.live/ and redeploy.
       – After uploading, run refreshEngine() once in the Apps Script editor
         (otherwise the old code is used for up to 6 hours).
     (Blank stars cannot reach the email: Subscribe now requires the star.)
  4. iPHONE HOME-SCREEN ICON. With "standalone", an iPhone may keep the
     home-screen app's saved details separately from Safari's. Test once on
     an iPhone: open from the icon, check that saved details are there, and
     that Print / PDF still works. If not, change "standalone" back to
     "browser" in manifest.webmanifest.
  5. Keep a backup of your current v5.2.1 files.

================================================================================
OPTION A – GITHUB PAGES
  1. Open the repository → Add file → Upload files.
  2. Drag in: index.html, manifest.webmanifest, README.md, README.txt,
     CHANGELOG.md, CHANGELOG.txt. (Same names, so they replace the old ones.)
  3. Commit message: "v5.2.2: blank birth star, name endings, live preview,
     share, location".
  4. Commit changes. The site updates in about a minute.

OPTION B – HOSTINGER
  1. hPanel → Websites → your site → File Manager → public_html.
  2. Upload index.html and manifest.webmanifest (replace when asked).
     The .md/.txt files are optional here.

AFTER UPLOAD – TEST (on a phone)
  1. Open the site and reload. Anyone on v5.2.1 sees "Update now".
  2. In a private/incognito window: Birth Nakṣatra shows "– Select birth
     star –"; Name ending shows "None · नाम्नः".
  3. Type a name and choose a gotra: the live preview shows the name and
     ____ for the star. Press Generate: the star box turns red.
  4. Choose a star and Generate: the text says … नक्षत्रे … राशौ जातस्य
     <name>नाम्नः. Change the ending to Śarmā: …शर्मणः.
  5. Share opens the phone's share sheet. The email box under the text
     takes you to the Email tab with the address filled in.
  6. "📍 Use my location" asks for permission and picks the nearest city.
  7. Add to Home Screen, open from the icon: no browser address bar.
  8. Tarpaṇam tab with Śarmā: the tarpaṇam is the same as before.
  9. Tarpaṇam tab: "Mahālaya pakṣa tarpaṇam" is NOT in the list today.
     Open https://sankalpam.live/?show=mahalaya – it appears again.
 10. Apps Script editor → run refreshEngine() once (daily email uses 5.2.2).

================================================================================
