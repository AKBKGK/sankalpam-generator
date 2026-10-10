# Saṅkalpam Generator

A free, single-page app that prepares a complete, correctly worded **saṅkalpam** for daily pūjā and pārāyaṇam, and the full **tarpaṇam** text, with the day's **pañcāṅgam** calculated for your city.

**Open the app:** https://sankalpam.live/

> A **saṅkalpam** is a vow: you state when, where, who and why before a pūjā.

## New in 5.2.2

- **No silent defaults** – the birth star starts blank and must be chosen; rāśi follows the star. Family members too.
- **Gotra not known** – choose "Not known (use Kāśyapa)".
- **Name ending** – None · नाम्नः (default), Śarmā, Varmā, Gupta or Dāsa, with the Viṣṇu Purāṇa 3.10.9 verse behind "Why?". Women: नाम्न्याः.
- **First name only** – the name box asks for the first name, without the surname.
- **Live preview** – your own line of the saṅkalpam appears as you type.
- **Share** – send the saṅkalpam to WhatsApp, Gmail and others from your phone.
- **Daily email** – sign up right under your saṅkalpam.
- **Use my location** – picks the nearest city for sunrise.
- **Opens like an app** from the home-screen icon.

## What it does

- **Choose your pañcāṅgam** – **Vākya** (traditional) or **Tirukkaṇita** (modern astronomical). The choice is shown, highlighted, at the foot of every saṅkalpam and tarpaṇam.
- **Pañcāṅgam for your city** – saṁvatsara, ayana, ṛtu, māsa, pakṣa, tithi, vāsara, nakṣatra, yoga and karaṇa at sunrise, with "upto" times (70+ cities in India and abroad).
- **Which day? (new in 5.0)** – finds the right day for tarpaṇam by the aparāhṇa (afternoon) rule:
  - **Amāvāsyā** – the next Amāvāsyā, with the afternoon window highlighted and a "close call" warning when the choice is tight.
  - **Mahālaya pakṣam** – the dates of the pakṣam and Mahālaya Amāvāsyā; the day for each tithi on request.
  - **Māsa pirappu** – the next month's saṅkrānti time, the day the Tamil month begins, and the next 12 months.
  - **Compare** Vākya and Tirukkaṇita side by side; **Use** fills in the date (and month) for the tarpaṇam.
- **Pañcāṅgam calendar (new in 5.0.4)** – any month and year, with Ekādaśī, Pradoṣam, Caturthī, Amāvāsyā, Pūrṇimā and Mahālaya Pakṣa calculated from the tithi, the day's śrāddha tithi, tithi and nakṣatra times, Rāhu kālam, Yamagaṇḍam and Kuḷigai,.
- **Phone and computer** (new in 5.0.5) – one app: phones get a touch-friendly layout, computers the full desktop layout.
- **Your calendar** – Tamil (solar) or Telugu / Kannada (lunar, with adhika and nija māsa).
- **Your details and family** – name (Tamil spellings become Sanskrit stems, e.g. Chidambareshwaran → चिदम्बरेश्वर, Subramanian → सुब्रह्मण्य), gotra, birth star and pāda (rāśi fills in automatically), family members.
- **What you will chant** – Śrī Rudram, Vedic sūktas, sahasranāmams and aṣṭottaras, with closing verses to match.
- **Tarpaṇam** – the complete text (Kṛṣṇa Yajur Veda, Āpastamba sūtra) for Mahālaya, Amāvāsyā, Māsa pirappu and grahaṇa, with both sides of the family.
  - **Kāruṇika pitṛs** – add relatives one at a time; the gotra fills in from the relationship (your gotra for Periyappā, Chithappā and their wives; your mother's for Māmā and Māmī); lines are grouped by gotra.
- **Your script** – Sanskrit (Devanagari), Tamil (Grantha), Telugu, Kannada or English letters (IAST).
- **Copy, print or save as PDF**, including a small PDF for WhatsApp, or email the PDF once.

## Vākya and Tirukkaṇita

- **Tirukkaṇita (Drik)** calculates the Sun and Moon with modern astronomy ([Astronomy Engine](https://github.com/cosinekitty/astronomy), Lahiri ayanāṁśa) for the true sunrise at your city.
- **Vākya** follows the traditional Vākyakaraṇa method (Vararuci's 248 candravākyas and the Vākya Sun table), used mainly in Tamil Nadu. It is computed, not copied, and calibrated to printed Vākya pañcāṅgams for Tamil Nadu (about 11–13°N). Clock times follow the printed convention: 6:00 AM + nāzhigai × 24 minutes.
- **Tested against print (2026):** tithi and nakṣatra names all match; times within about 2–7 minutes; saṅkrānti within a minute; all Tamil month starts match.
- Vākya and Tirukkaṇita can differ by 30–60 minutes or more, and occasionally by a day. **Follow the pañcāṅgam your family uses; if in doubt, ask your vādhyār.**
- This app is independent and is not affiliated with or endorsed by any pañcāṅgam publisher or maṭha.

## Privacy

- The app runs in your browser. No sign-in is needed.
- Your details are saved only on your own device. **Ancestors' names and Kāruṇika pitṛs stay only on your device and are never sent anywhere.**
- **Feedback** is sent anonymously through a Google Form.
- **Optional daily email:** if you subscribe, your email address and the details you entered are stored in a private Google Sheet, used only to send you the daily saṅkalpam. You confirm by email first, and every email has an **Unsubscribe** link that deletes your details.

## Please note

The tarpaṇam text follows traditional Dharma Śāstra (Yājñavalkya and Manu Smṛti); vādhyārs and regional traditions may differ. Dates and timings are a guide. **Please have your vādhyār check the text before use.**

## Licence

Released under the [MIT License](LICENSE) – © 2026 Saṅkalpam Generator. You may use, copy, change and share the code, keeping the copyright and licence notice. The Vedic mantras belong to the Vedic tradition and are not claimed.

## Credits

Astronomical calculations: [Astronomy Engine](https://github.com/cosinekitty/astronomy) by Don Cross (MIT License).
