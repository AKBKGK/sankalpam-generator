================================================================================
SAṄKALPAM GENERATOR v5.2.16
Updated: 2026-10-23
================================================================================

FILES IN THIS FOLDER
────────────────────
  index.html            → the app (everything is inside this one file) – CHANGED
  manifest.webmanifest  → app name and icons (unchanged – do not upload)
  README.md             → project description (shown on GitHub) – CHANGED
  README.txt            → this file – CHANGED
  CHANGELOG.md / .txt   → version history – CHANGED
  sankam-mobile.html    → old v5.0.4 edition – unchanged (not linked; consider
                          removing it later)

WHAT CHANGED IN 5.2.16 (details in CHANGELOG.txt)
  • Vākya times closer to print (about 1–1.5 min average, all within 5 min).
  • Festivals: Sarasvatī Pūjā 20 Oct, Vijayadaśamī 21 Oct, Śrī Jayantī 4 Sep
    2026, Ugādi 7 Apr 2027; tradition labels.
  • Tarpaṇam on a date that does not suit it: asks you to confirm first.
  • Outside India and Sri Lanka: Tirukkaṇita automatically (Vākya still
    selectable).
  • One Lahiri ayanāṁśa; one consistent method note; no publication names.

FIRST – EMAIL SCRIPT v12 (before uploading index.html)
  The old script (v11) cannot read the new app's Vākya profile, so Vākya
  daily emails would stop. v12 works with both 5.2.15 and 5.2.16.
  1. Apps Script editor → replace all of Code.gs with the v12 file → Save.
  2. Deploy → Manage deployments → Edit (pencil) → Version: New version →
     Deploy (the web-app address stays the same).
  3. Run sampleEmailToMe() – a sample saṅkalpam email should arrive.

UPLOAD (GITHUB PAGES)
  1. Keep a copy of your current 5.2.15 files.
  2. Repository → Add file → Upload files.
  3. Drag in: index.html, README.md, README.txt, CHANGELOG.md, CHANGELOG.txt.
  4. Commit message: "v5.2.16: Vākya times closer to print, layout fixes,
     festival choices, tarpaṇam date check".
  5. Commit changes. The site updates in about a minute.

AFTER UPLOAD
  1. Open sankalpam.live on your phone and reload: "Update now" → v5.2.16.
  2. Calendar → 8 Nov 2026: Amāvāsyā and Dīpāvalī, with tithi and star times.
  3. Calendar → 20 Oct 2026: Sarasvatī Pūjā; 21 Oct: Vijayadaśamī;
     4 Sep: Gokulāṣṭamī and Śrī Jayantī; 7 Apr 2027: Ugādi.
  4. Tarpaṇam → Amāvāsyā on 23 Oct 2026: a warning and a "continue" button;
     on 8 Nov 2026 the text appears directly.
  5. Apps Script editor → run refreshEngine() once; run ownerRefresh() in the
     private WhatsApp page project. Check the next daily email.
     If the private owner page uses the old internal Vākya profile names,
     change them to 'vakya' and 'vakya2' (renamed in 5.2.16).
  6. Next morning's usage email: three columns (that day, last 7 days, since
     counting began) and, from the first new openings, "Places".
  7. If anything is wrong: restore index.html from the previous commit (v12
     keeps working with the old app).

RE-UPLOADING WITHOUT A NEW VERSION NUMBER
  index.html has a line  const APP_BUILD = '2026-10-24 11:52';
  Change the date/time in that line whenever you upload a changed index.html
  but keep the same version. Phones that have the app open then show
  "Update now" (on opening, on returning to the app, or every 30 minutes).

================================================================================
EARLIER NOTES (v5.2.14 and before)
================================================================================
SAṄKALPAM GENERATOR v5.2.14
Updated: 2026-10-18
================================================================================

FILES IN THIS FOLDER
────────────────────
  index.html            → the app (everything is inside this one file) – CHANGED
  manifest.webmanifest  → app name and icons (unchanged)
  README.md             → project description (shown on GitHub) – CHANGED
  README.txt            → this file – CHANGED
  CHANGELOG.md / .txt   → version history – CHANGED
  LICENSE               → MIT License (unchanged)
  (icons: apple-touch-icon.png, icon-192.png, icon-512.png – unchanged)

================================================================================
WHAT'S NEW IN 5.2.14
  • TARPAṆAM CHECKED AGAINST THE PRINTED BOOKLET (Yajurveda Amāvāsya
    Tarpaṇam) – for Amāvāsyā, Māsa pirappu and grahaṇa (Mahālaya unchanged):
    – अस्मत् in every tarpaṇa line: "वसुरूपान् अस्मत् पितॄन् …" (pp. 18–29),
      in āvāhanam and in yathāsthānam (pp. 17, 33);
    – 2-B ends "अक्षन् पितरः" (p. 20); with 2 kūrchams 8-B ends
      "अक्षन् (मातुः) पितरः" (p. 26);
    – 1 kūrcham: "ज्ञाताज्ञात अस्मत् वर्गद्वय पितॄन् स्वधा नमस्तर्पयामि" (3×)
      after the women (p. 29); after pradakṣiṇam "अस्मत् वर्गद्वय पितृभ्यो
      नमः" with sesame on the kūrcham (p. 32);
    – "येषां न माता न पिता न भ्राता न बन्धुः …" without तृप्यत, then the
      kūrcham down with the water (p. 33);
    – pradakṣiṇam three times, abhivādaye and namaskāram in one or two lines;
    – 1 kūrcham: no Ṛk mantras for the mātāmaha varga (each line 3×), as in
      5.2.13. VĀDHYĀR TO CONFIRM: booklet p. 17 says pp. 18 onward are for
      1 kūrcham, and pp. 23–28 give those mantras.
  • SAMĀPANAM (all tarpaṇams): keep the pavitram behind the ear for ācamanam,
    then remove it.
  • TIME OF TARPAṆAM – when the tithi, star, yoga or karaṇa changes between
    sunrise and sunset, choose the time slot (opens on the sunrise slot); the
    saṅkalpam follows it. Example, 18 Oct 2026, Vākya: sunrise–7:14 AM
    Saptamī · Pūrvāṣāḍhā; 7:14 AM–12:25 PM Aṣṭamī · Pūrvāṣāḍhā; after
    12:25 PM Aṣṭamī · Uttarāṣāḍhā. Amāvāsyā always says अमावास्यायां.
    Not for Mahālaya (sunrise values, as before).
  • TARPAṆAM TABLE: tithi and star with from–to times and dates.
  • ENGLISH LETTERS EASY TO READ (replaces IAST): no marks, च = ch,
    श/ष = sh, ṛ = ru ("kayena vacha", "Vadhulagotran
    Chidambareshvarasharmanah vasurupan asmat pitrun"); names and gotra with a
    capital; headings, table and instructions without marks too. Saṅkalpam,
    tarpaṇam and the daily email (after refreshEngine).
  • NAME SPELLINGS: Venkatasubramanian → वेङ्कटसुब्रह्मण्य, Sivasankaran →
    शिवशङ्कर, Muthumeenakshi → मुत्तुमीनाक्षी, Anandavalli → आनन्दवल्ली,
    Abhirami → अभिरामी, Sivasankari → शिवशङ्करी, Seethalakshmi → सीतालक्ष्मी.
  • PDF: the "Which day?" box no longer prints at the top; footer, table,
    tarpaṇa lines and headings kept together on a page; the top "Please have
    your vādhyār check this text before use" line removed (footer line kept).
NOT CHANGED: Mahālaya wording; all calculations; the Devanagari, Tamil,
Telugu and Kannada saṅkalpam. TESTED: 114 PDFs (saṅkalpam and all five
tarpaṇams, 5 scripts, 1 and 2 kūrchams, normal and compact, Drik) – nothing
missing, nothing past the margins, footer on the last page; wording EVAL
48/48.
  • DAILY EMAIL: run refreshEngine() once after uploading. English emails then
    use the easy letters too (not tested here – the email script is private).

================================================================================
EARLIER – 5.2.13
  • FIX (reported by a user, 17 Oct 2026): when a tithi or star runs across
    midnight, both dates are now shown. Before: "Moolam · from 16 Oct, 6:47 AM
    till 9:46 AM" – the end was on 17 Oct but read as 16 Oct. Now: "from
    16 Oct, 6:47 AM till 17 Oct, 9:46 AM". Same in the WhatsApp text (all
    languages), the day box, the welcome card, the computer panel and the
    Calendar. This was there since 5.2.10.
  • OUTSIDE INDIA AND SRI LANKA
    – choosing such a city asks once: Tirukkaṇita is recommended there
      (Vākya stays available – it is worked out for India);
    – all times say which clock they are in ("New York time (EDT)"; with
      Vākya, tithi and star times are Indian time and sunrise, Rāhu kālam
      and good time are local – both are said);
    – Rāhu kālam, Yamagaṇḍam, Kuḷigai and Gowri good times come from the
      city's own sunrise and sunset (daytime and night each in 8 parts; the
      same parts as the printed table). Example, New York, Sat 17 Oct 2026
      (sunrise 7:09, sunset 6:13 PM): Rāhu 9:55 – 11:18 AM. India and
      Sri Lanka keep the printed table (6 AM base) – unchanged.
  • USE MY LOCATION – the exact place (rounded to about 1 km) and the
    phone's time zone become "📍 My location" in the city list, with an
    optional name ("Dublin, Ohio"). Asked only when the button is tapped;
    saved on the device; sent only if the daily email is signed up for.
    (Shown on https pages only, as browsers require.)
  • TARPAṆAM DAYS MARKED – Māsa pirappu, Amāvāsyā, Mahālaya pakṣam and
    eclipses: "🪔 Māsa pirappu – a tarpaṇam day" on the home card, the day
    box and the first line of the WhatsApp pañcāṅgam, with
    "Prepare tarpaṇam ›". (Telugu / Kannada calendars: "Saṅkramaṇam".)
  • WHATSAPP PAÑCĀṄGAM IN ENGLISH by default; Tamil, Telugu or Kannada when
    those letters are chosen at the top.
  • EASIER TO UNDERSTAND – "What this app does – and for whom" (welcome, and
    one line on the home card); Vākya / Tirukkaṇita explained in two lines;
    "Quick chat" is now "Quick Help" (one button); "Full form" link only
    where it helps.
  • Includes everything in 5.2.12 below (if you have not uploaded 5.2.12,
    upload 5.2.13 instead – it has both).
NOT CHANGED: the saṅkalpam and tarpaṇam text and calculations; times for
cities in India and Sri Lanka. Tested: the daily email for existing
subscribers is identical with 5.2.12 and 5.2.13.

================================================================================
EARLIER – 5.2.12
  • STAR FINDER – after "Don't know your star?", the star found is shown in a
    green box (star · rāśi · pāda) with "Use this star ›", which takes you back
    to where you were: the birth-star field of the form, or on to your
    saṅkalpam in the welcome steps. Nothing changes until you tap it.
  • FAMILY MEMBERS – each has "Don't know? Find the star ›"; the star found
    fills only that person's row.
  • SAVED STARS LOCKED – your star and your family's saved stars are shown
    locked. "Change star…" warns first: "The birth star is recited in the
    saṅkalpam. Change it only if you are sure."
  • PĀDA "Not needed" for everyone (you, family, welcome, finder) whose star
    lies in one rāśi (18 of the 27 stars). The 9 stars that span two rāśis
    (Kṛttikā, Mṛgaśira, Punarvasu, Uttara Phalgunī, Citrā, Viśākhā,
    Uttarāṣāḍhā, Dhaniṣṭhā, Pūrva Bhādrapadā) keep "Don't know" and Pāda 1–4.
    A star changed by hand starts again with "Don't know".
  • HOME – one button: "Generate Saṅkalpam" at the bottom opens it (the card
    keeps Share). For another date it says "Saṅkalpam for <date> is ready",
    with "Back to today".
  • SRI LANKA – Colombo is treated like an Indian city: Indian Standard Time,
    Vākya without the "outside India" note.
  • FIXES (independent tester, 14 Oct):
    – a family member's rāśi Meṣa (pāda unknown) was lost after reopening and
      recited as Vṛṣabha – fixed;
    – Quick chat: a half-typed gotra ("bhar") is no longer saved as typed – it
      asks "Did you mean…?";
    – kāruṇika pitṛ with no gotra / no Devanagari name: asked for before
      printing (no more "……");
    – Devanagari boxes accept Devanagari only (your name, gotra, family,
      tarpaṇam names);
    – shared / copied saṅkalpam: no colour legend; the details as
      "Label: value" lines;
    – welcome: "Step n of 4", keyboard stays inside, Esc closes, the language
      message no longer covers the buttons; "The app has been updated" note
      now below the Namaste card; small-phone (320 px) header fits;
    – email screen keeps "More" highlighted; spellings Kauṇḍinya, Paṅguni;
      rāśi names capitalised; family "Pāda 1–4".
    – "Generated …" time in the city's own time zone (IST for India and Sri
      Lanka).
  • NAMES – Tamil "-āl" endings for women: Girigujambaal → गिरिगुजम्बा
    (vādhyār to confirm).
CHANGED IN THE SAṄKALPAM TEXT (screen, print, daily email) – only 3 header
lines: the name as recited (Śrīnivāsa, not SHREENIVAASA); tithi / star end
times in AM/PM, the same as the pañcāṅgam card ("upto 1:16 AM (next day)");
"Paṅguni". The recited text itself is unchanged. Tested: 5.2.11 vs 5.2.12 –
30 saṅkalpam cases, tarpaṇam, "Which day?", 4 daily emails, owner WhatsApp
text; only these lines differ.
NOT IN THIS VERSION (waiting for your decision): Tirukkaṇita for cities
outside India; "copy my details to another device"; place line abroad.

================================================================================
EARLIER – 5.2.11  (look only)
  • COLOURS "Kumkum & Sandal" – sandal background, maroon band with white
    text on each section heading, sandal menu on computers. Screen only: the
    printed / PDF saṅkalpam and tarpaṇam, the daily email and the WhatsApp text
    look exactly as before.
  • WIDE COMPUTER SCREENS (1200 px and wider), Saṅkalpam tab: two columns –
    the steps on the left, "Today's pañcāṅgam" on the right (stays in view
    while scrolling, follows the date, city and method you choose, with its own
    "Share on WhatsApp"). The day box under step 1 is hidden there, so nothing
    shows twice. Smaller screens and the other tabs: as before.
  • SCREEN NOTE shortened to "Sunrise and sunset change by city."
  • Small fixes: Samāpanam choices no longer cut off on computers; the Telugu
    / Kannada star name in "Your Tārābalam" keeps both brackets.
NOT CHANGED: all calculations, the saṅkalpam and tarpaṇam text, the WhatsApp
text, print / PDF and the daily email. Tested: 5.2.10 and 5.2.11 give the same
saṅkalpam, tarpaṇam, "Which day?", WhatsApp text, daily email and owner
WhatsApp text; print / PDF pages pixel-identical; no sideways scrolling from
320 to 1920 px; "Update now" takes a 5.2.10 user to 5.2.11. Checked again by
an independent reviewer (two rounds; all points fixed).

================================================================================
EARLIER – 5.2.10
  • CHANDRĀṢṬAMAM BY RĀŚI – now the rāśi rule (the Moon in the 8th rāśi from
    the birth rāśi), with the stars and pādas and the time it changes, in the
    method chosen. 11 Oct 2026, Chennai, Vākya: Kumbha (Avittam 3–4, Sathayam,
    Pūraṭṭādhi 1–3) till 11:02 AM, then Mīna (Pūraṭṭādhi 4, Uttiraṭṭādhi,
    Revatī). Same stars as Drik Panchang; Drik time 10:04 AM, ours 10:03 AM.
    (5.2.9 showed one star at a time and switched at the star change.)
  • NEW EVERY DAY: Tamil date (Puraṭṭāsi 24), śūlam and parihāram, śrāddha
    tithi, start and end of the tithi and star (and what follows), Gowri night
    times, "sunrise and sunset change by city", City and Method on their own
    line – in the WhatsApp text, welcome card and Calendar (the step-1 box
    adds Tamil date, śūlam, śrāddha tithi and Chandrāṣṭamam).
  • WHATSAPP – the day's pañcāṅgam goes in Tamil by default (or the language
    chosen; English when English letters are chosen), with a line that the
    app has the other languages. Phones get the text only (no title). Every
    share button reads "Share on WhatsApp"; the Calendar has one for any day.
    On computers: "If WhatsApp didn't open, open it and paste the copied
    text."
  • VĀKYA MONTH (fix) – with Vākya and the Tamil calendar, the Tamil month (and
    ṛtu, ayana, year) now follows the Vākya saṅkrānti, as the printed Vākya
    pañcāṅgam does. 17 Sep 2026: Kanyā saṅkrānti at 33-12 nāzhigai (7:17 PM,
    after sunset), so the saṅkalpam says Siṃha (Āvaṇi 31); Puraṭṭāsi 1 is
    18 Sep. 5.2.9 said Kanyā on 17 Sep. Only a few days a year change (6 in
    2026–27, e.g. 14 Jan 2026 stays Mārgazhi – Pongal / Thai 1 is 15 Jan).
    Māsa pirappu (tarpaṇam reminder, "Which day?") and the daily email follow
    the same rule: 18 Sep 2026, not 17 Sep. Māsa pirappu follows the Vākya
    saṅkrānti whenever Vākya is chosen (any calendar), as "Which day?" did.
  • CHANTS – Śrīmad Nārāyaṇīyam under "Sūktams & Stotrams".
  • CLOSING – "Offering at the end": Standard (as before), offer the chants by
    name, with pārāyaṇam / ghanam / arcana as ticked (…घनपारायणेन …), pray for the wish
    (मम सकलाभीष्टसिद्धिरस्तु), or both. Vādhyār to confirm the wording.
  • PĀDA – for a star in two rāśis, "Find my pāda from my date, time and place
    of birth" opens the star finder. Other stars: pāda "Not needed" (as before).
  • NAMES – Lakshmii, Meenaakshii (women) → लक्ष्मी, मीनाक्षी (were …िई);
    Gowri, Kowsalya, Mowli → गौरी, कौसल्या, मौलि.
  • YOUR TĀRĀBALAM AND CHANDRABALAM – in the daily box and welcome card, for
    your own star and rāśi (as printed in Tamil pañcāṅgams): Tārā = count
    from your star to the day's star, remainder after 9 (2, 4, 6, 8, 9 good;
    3, 5, 7 not good; 1 your own star); Chandra = count from your rāśi to the
    Moon's rāśi (1, 3, 6, 7, 10, 11 good; 2, 5, 9 middling; 4, 8, 12 not
    good). Both change when the star / Moon's rāśi changes. Checked against
    Drik Panchang's "Good Tarabalam" list (11 Oct 2026, all 27 stars). Not in
    the WhatsApp text (it goes to many people).
  • QUICK CHAT – a clear yellow 💬 button at the top of the home card ("Quick
    chat") and of the welcome steps ("Chat", plus "Prefer a quick chat?"),
    visible without scrolling on small phones too.
  • "UPDATE NOW" – now also shows on top of the welcome steps and Quick chat
    (they used to cover it). Tested on phone and computer: shows, and one tap
    loads the new version.
  • Footer: "Made with devotion by ArvindK".
NOT CHANGED: the saṅkalpam and tarpaṇam text (with "Standard" closing, apart
from the Vākya month fix above), the daily email, all other calculations. Tested: 5.2.9 and 5.2.10 give the same
saṅkalpam (30 cases), tarpaṇam, "Which day?" and daily email.

================================================================================
EARLIER – 5.2.9
  • The "tap 🎤 on your keyboard" hints are hidden for now (Quick chat welcome,
    name and gotra questions, More → Quick chat card). People can still use
    their keyboard's own voice typing; the app simply does not mention it.
  • Everything else as 5.2.8 (gotra spellings, tarpaṇam wording when sharing).
NOT CHANGED: saṅkalpam, tarpaṇam, pañcāṅgam and daily email.

================================================================================
EARLIER – 5.2.8
  • SHARING THE APP – the message now reads: "Saṅkalpam Generator – your daily
    saṅkalpam with the day's pañcāṅgam, and tarpaṇam for those whose father
    has passed away. Free: https://sankalpam.live/?features". The features
    page says the same on its Tarpaṇam card, and Quick chat is described with
    "the next Amāvāsyā" instead of "the next tarpaṇam day".
  • GOTRA SPELLINGS – the gotra search (welcome steps and Quick chat) now finds
    the gotra when it is spelt as spoken or in everyday English: Bharadwaj →
    Bhāradvāja, Koundinya → Kaundinya, Kaushik → Kauśika, Vashishta →
    Vasiṣṭha (w/v, x/ks, z/j, ou/au and a missing final "a" are treated alike).
  • SPEAK INSTEAD OF TYPING – Quick chat says "tap 🎤 on your keyboard" at the
    name and gotra questions (the phone's own voice typing; nothing new in the
    app). The name is always shown back ("It will be recited as …") to check.
NOT CHANGED: saṅkalpam, tarpaṇam, pañcāṅgam and daily email.

================================================================================
EARLIER – 5.2.7
  • QUICK CHAT – "Prefer a quick chat? ›" on the opening page, "Quick chat" on
    the Namaste card and in More. Welcome, then: My saṅkalpam · Today's
    pañcāṅgam · Good time today · Next Amāvāsyā / tarpaṇam day.
      – My saṅkalpam: "Saṅkalpam for <name>?" Yes / Someone else. First-time
        users are asked city, name, male/female, (name ending), gotra and star
        once, and these are saved.
      – Someone else: asked each time; used once, NOT saved; your own details,
        family and prayers are untouched (their saṅkalpam uses the standard
        prayers and today's date).
      – "I don't know" for gotra (Kāśyapa) and star (date, place and time of
        birth; without the time, choose from that day's stars).
      – Every pañcāṅgam reply ends with "Vākya · <city> · Tamil calendar ·
        Change ›". No AI, no personal details sent anywhere, no cost.
  • Checked by an independent review: "Someone else" never changes saved
    details; fixes made for share/PDF of someone else's saṅkalpam, double taps,
    questions hidden behind buttons, long names and keyboard focus.
  • GOOD TIME (GOWRI NALLA NERAM) – every day in the daily pañcāṅgam, the
    welcome card, the Calendar day details and "Share this pañcāṅgam":
    the good slots of the day and the night, from our Tamil calendar's Gowri
    table (sunrise taken as 6 AM, 8 slots of 1½ hours). Good: Uthi, Amirtham,
    Labham, Dhanam, Sugam. Not good: Rogam, Soram, Visham.
      Saturday night: the calendar prints Soram twice; the 4:30–6:00 AM slot is
        taken as Rogam (your decision). Good times are the same either way.
  • YOGAM – Amṛta, Siddha or Maraṇa yogam every day, from our calendar's
    weekday × star table; when the star changes, e.g. "Amṛta yogam till
    12:54 AM (next day), then Maraṇa yogam". Follows the chosen method
    (Vākya or Tirukkaṇita) for the star.
  • Help: "Good time and yogam".
NOT CHANGED: saṅkalpam, tarpaṇam, "Which day?" and the daily email (tested
identical to 5.2.6).
  ⚠ Native readers to check the new Telugu and Kannada words
    (గౌరీ మంచి సమయం, ಗೌರಿ ಶುಭ ಸಮಯ, అమృత/సిద్ధ/మరణ యోగం, ಅಮೃತ/ಸಿದ್ಧ/ಮರಣ ಯೋಗ).

================================================================================
EARLIER – 5.2.6
  • SIMPLE OPENING PAGE, in order: what a saṅkalpam is → choose your
    pañcāṅgam → "Make my saṅkalpam". Today's pañcāṅgam is one tap below
    ("See today's pañcāṅgam"). Everything fits on one phone screen.
  • NAME ENDING IN THE FIRST STEPS – the name step now has None · Śarmā ·
    Varmā · Gupta · Dāsa, with "Why?" showing the Viṣṇu Purāṇa 3.10.9 verse
    (verse and reference only). Women: नाम्न्याः (shown as a note).
  • SHARE THE SAṄKALPAM ON WHATSAPP IN ANY LANGUAGE – the saṅkalpam is shared
    in the letters chosen (Sanskrit, Tamil, Telugu, Kannada, English). Phones:
    the share sheet (WhatsApp, etc.). Computers (no share sheet): "Share on
    WhatsApp" opens WhatsApp with the text, and the text is copied too.
    The Share button now shows on computers as well.
  • NO VERSION NUMBERS ON FEATURES – What's new, the update note ("The app has
    been updated") and the features page show no numbers. (The version is
    still in the update box and at the foot of each saṅkalpam.)
  • "FORM OR FORMLESS?" – a link on the opening page (and in Help) opens
    verses showing both are honoured: Śvetāśvatara Upaniṣad 6.11, Gītā 7.21
    and 12.3–4. Back returns to the same place.
  • FEATURES PAGE = what the app does + the Help (11 questions, in the order
    you use the app, starting with "What is a saṅkalpam?").
  • ONE AMĀVĀSYĀ DAY – the tarpaṇam suggestion and the daily email reminder
    now use the same afternoon (aparāhṇa) rule as "Which day?". Example:
    Aippasi 2026, Chennai, Vākya → Sun 8 Nov only (before: 8 and 9 Nov).
  • PRADOṢAM in "What you will chant" – two tick boxes (nothing ticked
    automatically; not saved; not in the daily email):
      – before the chants:  प्रदोषपुण्यकाले श्रीरुद्र … पारायणं करिष्ये ॥
      – its own line:        प्रदोषपूजां करिष्ये ॥
    Wording from the owner; vādhyār may refine later.
  • "WHICH DAY?" PICTURE – the afternoon window is marked by a gold bar above
    the strip (no box over the tithi names); Amāvāsyā is written in white.
  • No outside website links in the name-ending "Why?" (verse and reference
    only).
NOT CHANGED: calculations, saṅkalpam text, tarpaṇam text (tested: identical
to 5.2.5 on 30 saṅkalpam cases, tarpaṇam and "Which day?").
Telugu / Kannada calendar re-checked: Ugādi 19 Mar 2026 (Parābhava), Adhika
Jyeṣṭha 17 May–15 Jun 2026, Kārtika from 10 Nov 2026, Ugādi 7 Apr 2027
(Plavaṅga) – all match published pañcāṅgams.

================================================================================
EARLIER – 5.2.5
  • Namaste card (returning users) now shows the meaning of saṅkalpam:
    "A saṅkalpam is a vow: you state when, where, who and why before a pūjā."
  • "Start again with my name" button on the Namaste card: the guided steps
    from the name, with your saved details kept (nothing is cleared).
  • "For another person" stays as a separate link, with its warning.
NOT CHANGED: everything else (tested: saṅkalpam, tarpaṇam and email identical
to 5.2.4).

================================================================================
EARLIER – 5.2.4
  • CALENDAR AT THE START – the welcome screen and step 1 show "Your pañcāṅgam":
      Tamil (solar months) · Telugu (lunar, Ugādi) · Kannada (lunar, Ugādi),
      and Vākya · Tirukkaṇita, with a short note on the difference.
  • LETTERS FOLLOW THE CALENDAR – choosing the Telugu or Kannada calendar
    switches the saṅkalpam to Telugu / Kannada letters at once, with "Undo".
  • CALENDAR ASKED, NEVER CHANGED SILENTLY – choosing Telugu or Kannada letters
    while the calendar is another one asks once: "Use the Telugu calendar too?"
  • Telugu / Kannada calendar with Vākya: a hint that many Telugu and Kannada
    pañcāṅgams are not Vākya (vādhyār to confirm – easy to switch off).
  • WHATSAPP TEXT IN TAMIL, TELUGU, KANNADA – "Share this pañcāṅgam" sends the
    day's pañcāṅgam in the saṅkalpam language chosen (Sanskrit and English-letter
    users keep the English-letter text). Times stay in digits (5:59 AM).
  • WHAT'S NEW NOTE – after an update, people who used an older version see a
    short note once; × or "See what's new" closes it. Always in More → What's new.
    First-time users don't see it.
  • HELP – More → Help: 8 short questions and answers.
  • FEATURES PAGE – https://sankalpam.live/?features (also More → "See
    features" / "Share link") lists what the app does.
  • The owner's WhatsApp tools are no longer inside the public app.
  • FIX: Tirukkaṇita users saw some times with the wrong AM/PM (10:00–12:59)
    in the daily box and shared text – corrected.
NOT CHANGED: calculations, saṅkalpam text, tarpaṇam text, daily email text
(tested: identical to 5.2.3).

  ⚠ Native readers to check the Tamil, Telugu and Kannada words in the WhatsApp
    text (tithi, star, yogam, karaṇam, Kuḷigai …) before telling users.

================================================================================
EARLIER – 5.2.3 (details in CHANGELOG.txt)
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
  1. STILL WAITING FOR: the regular nalla neram table (not added).
  2. VĀDHYĀR TO CONFIRM: name endings and नाम्न्याः; Kāśyapa when the gotra is
     not known; Chandrāṣṭamam rule; karaṇa listing; the Amāvāsyā day
     (8 Nov 2026 for Chennai, Vākya); the Tirukkaṇita hint for Telugu /
     Kannada.
  3. NATIVE READERS to check the Tamil, Telugu and Kannada words in the
     WhatsApp pañcāṅgam text.
  4. DAILY EMAIL (Code.gs v9) – no change to the script. After uploading, run
     refreshEngine() once in the Apps Script editor, and ownerRefresh() in
     your private WhatsApp page project (the email header now shows the name
     as recited and AM/PM end times).
  5. Keep a backup of your current 5.2.11 files.

================================================================================
OPTION A – GITHUB PAGES  (when you decide to upload)
  1. Open the repository → Add file → Upload files.
  2. Drag in: index.html, README.md, README.txt, CHANGELOG.md, CHANGELOG.txt.
     (Same names, so they replace the old ones.)
  3. Commit message: "v5.2.14: tarpaṇam as in the booklet (asmat, akṣan, jñātājñāta, yeṣāṃ), time of tarpaṇam, easy English letters, name spellings, PDF fixes".
  4. Commit changes. The site updates in about a minute.

OPTION B – HOSTINGER
  1. hPanel → Websites → your site → File Manager → public_html.
  2. Upload index.html (replace when asked).

AFTER UPLOAD – TEST (on a phone)
  1. Open the site and reload. Anyone on 5.2.5 sees "Update now", then the
     note "The app has been updated" once.
  2. In a private/incognito window: the opening page shows what a saṅkalpam
     is, "Your pañcāṅgam" and "Make my saṅkalpam" on one screen.
  3. Step 2: type a name, tap Śarmā – your line shows शर्मणः. Tap "Why?" –
     the verse and "Read the verse" link appear.
  4. Finish the steps → Share → WhatsApp: the text is in your chosen letters.
  5. Tarpaṇam tab, date 9 Nov 2026 (Chennai, Vākya): no Amāvāsyā suggestion;
     8 Nov: Amāvāsyā.
  6. More → See features: features, then Help.
  7. Apps Script editor → run refreshEngine() once.
  To see the welcome screens again on your own phone: add ?welcome=1 to the
  address (e.g. https://sankalpam.live/?welcome=1).

================================================================================
