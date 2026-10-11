================================================================================
SAṄKALPAM GENERATOR v5.2.3
Updated: 2026-10-11
================================================================================

FILES IN THIS FOLDER
────────────────────
  index.html            → the app (everything is inside this one file) – CHANGED
  manifest.webmanifest  → app name and icons ("display": "standalone", as 5.2.2)
  README.md             → project description (shown on GitHub) – CHANGED
  README.txt            → this file – CHANGED
  CHANGELOG.md / .txt   → version history – CHANGED
  LICENSE               → MIT License (unchanged)
  (icons: apple-touch-icon.png, icon-192.png, icon-512.png – unchanged)

================================================================================
WHAT'S NEW IN 5.2.3  (details in CHANGELOG.txt)
  • FIRST VISIT IN 5 STEPS – a welcome screen guides a new user:
      1 Today      – today's pañcāṅgam at once, with "Share today's pañcāṅgam"
      2 Your name  – shown large in Sanskrit, with Tamil, Telugu, Kannada and
                     English letters; the user's own line of the saṅkalpam
                     starts filling in
      3 Gotra      – searchable list, or "I don't know my gotra" (Kāśyapa)
      4 Birth star – or "I don't know my star" (see below)
      5 Saṅkalpam  – "Your saṅkalpam is ready, <name>"
    "Full form" (top right) skips to the full form. Users who saved their
    details earlier do NOT see the welcome screens.
  • "I DON'T KNOW MY STAR" – date, place (current city filled in) and time of
    birth. With the time: the exact star and pāda. Without it: each star of
    that day with its from–to times; the user chooses, and the printout says
    "Birth star chosen by the user (time of birth not known)."
    Calculated with the modern (Tirukkaṇita) method.
  • STAR FINDER ANY TIME – "Don't know your star? Find it from your date of
    birth" link under Birth Nakṣatra in the full form.
  • FOR ANOTHER PERSON – "Guided steps / for another person" on the Namaste
    card. A warning first: the phone keeps one person's details, so the saved
    name, gotra, star and family members are replaced (Continue / Cancel).
  • RETURNING USERS – "Namaste, <name>" card: today's saṅkalpam in one tap,
    Share, and "Coming up" (next Māsa pirappu and Amāvāsyā tarpaṇam days,
    by the same rules as the "Which day?" card).
  • DAILY PAÑCĀṄGAM EXTRAS (step 1 box, welcome card, Calendar):
      – Sunrise rounded to the nearest minute (e.g. 05:58:50 → 5:59 AM)
      – Sunset
      – Karaṇam: the two karaṇas of the tithi at sunrise (e.g. Kiṃstughna, Bava)
      – Chandrāṣṭamam (e.g. Pūraṭṭādhi, Uttiraṭṭādhi)
      – Rāhu kālam, Yamagaṇḍam, Kuḷigai
    Checked against a printed Tamil pañcāṅgam for Sun 11 Oct 2026 (Chennai):
    all of these match.
  • CALENDAR – day details show sunrise and sunset; in Vākya mode the note
    "Tithi and star times follow the Vākya convention: counted from 6:00 AM"
    replaces the old "sunrise 6:00 AM" wording.
  • MAHĀLAYA – after Mahālaya pakṣa ends, the Calendar no longer shows the
    "Mahālaya Pakṣa (pink days)" chip or pink days (until 15 days before the
    next pakṣa). The owner link ?show=mahalaya still shows it.
  • TABS – 4 on phones: Saṅkalpam, Tarpaṇam, Calendar, More. The daily email
    is in More, and under every saṅkalpam.
  • "Make it yours" under the saṅkalpam: What I chant, Family, Prayers,
    Name ending.
  • The "देवनागरी" language label is no longer cut off on phones.
  • REPEAT REMOVED: "अनेन मया कृतेन कर्मणा श्रीपरमेश्वरः प्रीयताम् ॥" and
    "ॐ तत्सत् ब्रह्मार्पणमस्तु ॥" appeared twice at the end of the saṅkalpam
    (Detailed and Simple endings). Now once. Very simple ending unchanged.

NOT CHANGED: all pañcāṅgam calculations, the tarpaṇam text, and the rest of
the saṅkalpam. Tested: apart from the removed repeat and the version, 5.2.3
gives exactly the same saṅkalpam and tarpaṇam as 5.2.2, and the same daily
email text.

"UPDATE NOW": tested on phone and computer – a user with 5.2.2 open sees
"A new version of the app is available. Update now" and one tap loads 5.2.3.

================================================================================
⚠️  BEFORE YOU UPLOAD – PLEASE READ
  1. STILL WAITING FOR (not shown in the app until given):
       – Good time (nalla neram) table from our pañcāṅgam
       – Amṛtādi yogam table (weekday × star)
  2. VĀDHYĀR TO CONFIRM:
       – Chandrāṣṭamam rule used: the stars whose 17th star is the Moon's star
         (Moon's star + 11). It matches the printed pañcāṅgam for 11 Oct 2026.
       – Karaṇam listed as the two karaṇas of the tithi at sunrise.
       – Everything listed for 5.2.2 (name endings, नाम्न्याः, Kāśyapa).
       – Very simple ending has both "ॐ तत्सत् सर्वं श्रीपरमेश्वरार्पणमस्तु" and
         "ॐ तत्सत् ब्रह्मार्पणमस्तु" (as in earlier versions) – keep both?
  3. AMĀVĀSYĀ DATE – "Coming up" uses the app's own tarpaṇam-day rule (the
     same as the "Which day?" card). For Aippasi 2026 it gives Sun 8 Nov
     (Vākya). Please check this against the printed pañcāṅgam.
  4. DAILY EMAIL (Code.gs v8) – no change needed. It loads the app's code
     from CONFIG.APP_URL (the GitHub address). Tested by simulating the
     loader: existing subscribers get exactly the same email text.
     After uploading, run refreshEngine() once in the Apps Script editor.
  5. iPHONE – test once from the home-screen icon (saved details, Print / PDF).
  6. Keep a backup of your current v5.2.2 files.

================================================================================
OPTION A – GITHUB PAGES  (when you decide to upload)
  1. Open the repository → Add file → Upload files.
  2. Drag in: index.html, manifest.webmanifest, README.md, README.txt,
     CHANGELOG.md, CHANGELOG.txt. (Same names, so they replace the old ones.)
  3. Commit message: "v5.2.3: 5-step welcome, star finder, daily pañcāṅgam
     extras, 4 tabs".
  4. Commit changes. The site updates in about a minute.

OPTION B – HOSTINGER
  1. hPanel → Websites → your site → File Manager → public_html.
  2. Upload index.html and manifest.webmanifest (replace when asked).

AFTER UPLOAD – TEST (on a phone)
  1. Open the site and reload. Anyone on v5.2.2 sees "Update now".
  2. In a private/incognito window: the welcome screen opens at step 1 with
     today's pañcāṅgam (sunrise, sunset, Chandrāṣṭamam).
  3. Step 2: type a name – it appears large in Sanskrit and the other scripts.
  4. Step 4: "I don't know my star" → date of birth, tick "I don't know my
     time of birth" → Find my star → choose one → See my saṅkalpam.
     The footnote says "Birth star chosen by the user …".
  5. Reload: "Namaste, <name>" with Coming up.
  6. Calendar: sunrise and sunset in the day details; no Mahālaya chip.
  7. Apps Script editor → run refreshEngine() once.
  To see the welcome screens again on your own phone: add ?welcome=1 to the
  address (e.g. https://sankalpam.live/?welcome=1).

================================================================================
