# Saṅkalpam Generator

A free, single-page app that prepares a complete, correctly worded **saṅkalpam** for daily pūjā and pārāyaṇam, and the full **tarpaṇam** text (for those whose father has passed away), with the day's **pañcāṅgam** calculated for your city.

**Open the app:** https://sankalpam.live/

> **What is a saṅkalpam?** Saṅkalpa (सङ्कल्पः) means a firm resolve. Before a pūjā, homa or tarpaṇam you state **when** (the day's pañcāṅgam), **where**, **who** (your name, gotra and star) and **why**. This app prepares it for you.
>
> **Form or formless?** Both are honoured – Śvetāśvatara Upaniṣad 6.11 (beyond qualities, nirguṇa) and Bhagavad Gītā 7.21 (with form) and 12.3–4 (the formless too). A saṅkalpam is said before sandhyā, japa, pārāyaṇam, homa and tarpaṇam too – not only image worship.

## How it works – in the order you use it

1. **Choose your pañcāṅgam** – Tamil (solar months), Telugu or Kannada (lunar, from Ugādi, with adhika and nija māsa); **Vākya** (traditional) or **Tirukkaṇita** (modern astronomy). Choosing the Telugu or Kannada calendar also switches the letters (with Undo); changing the letters never changes the calendar without asking.
2. **Your name** – first name only; it appears in Sanskrit as you type, with Tamil, Telugu, Kannada and English letters. **Name ending**: None · नाम्नः, Śarmā, Varmā, Gupta or Dāsa, with the Viṣṇu Purāṇa 3.10.9 verse behind **Why?**. Women: नाम्न्याः.
3. **Your gotra** – searchable list, or "I don't know my gotra" (Kāśyapa is used).
4. **Your birth star** – or **"I don't know my star"**: find it from your date, place and time of birth.
5. **Your saṅkalpam** – with the pañcāṅgam for your city (saṁvatsara, ayana, ṛtu, māsa, pakṣa, tithi, vāsara, nakṣatra, yoga, karaṇa, with "upto" times; 70+ cities). Add what you will chant (Śrī Rudram, sūktas, sahasranāmams, aṣṭottaras, and on Pradoṣam days प्रदोषपुण्यकाले / प्रदोषपूजां), family members and prayers.
6. **Share, print or email** – **Share** sends the saṅkalpam in the letters you chose (Sanskrit, Tamil, Telugu, Kannada or English) to WhatsApp or any app; on a computer WhatsApp opens with the text ready. Copy, print, PDF (also a small PDF for WhatsApp), or the saṅkalpam by email every evening.

## Also in the app

- **Quick chat** – for anyone who does not want the whole app: "My saṅkalpam", "Today's pañcāṅgam", "Good time today" and "Next Amāvāsyā / tarpaṇam day", one question at a time. It can also make a saṅkalpam for someone else (used once, not saved), and find a star from the date of birth. No AI – the app's own engine answers, on the phone.
- **Daily pañcāṅgam** – Tamil date, tithi and star with start and end times, sunrise, sunset, karaṇam, śrāddha tithi, **good time** (Gowri nalla neram, day and night, as printed in Tamil calendars, sunrise taken as 6 AM), **Amṛta / Siddha / Maraṇa yogam** (weekday and star), Rāhu kālam, Yamagaṇḍam, Kuḷigai, **śūlam and parihāram**, and **Chandrāṣṭamam by rāśi** (with stars, pādas and the time it changes); **Share on WhatsApp** sends it in Tamil (or your language).
- **Tarpaṇam** – for those whose father has passed away: the complete text (Kṛṣṇa Yajur Veda, Āpastamba sūtra) for Mahālaya, Amāvāsyā, Māsa pirappu and grahaṇa, with both sides of the family and Kāruṇika pitṛs (the gotra fills in from the relationship; lines grouped by gotra).
- **Which day?** – the right day for tarpaṇam by the aparāhṇa (afternoon) rule: Amāvāsyā (with the afternoon window marked and a "close call" warning), Mahālaya pakṣam, and Māsa pirappu (saṅkrānti time and the next 12 months). Compare Vākya and Tirukkaṇita side by side. The tarpaṇam suggestion and the daily email use the same day.
- **Calendar** – any month and year, with Ekādaśī, Pradoṣam, Caturthī, Amāvāsyā, Pūrṇimā and Mahālaya pakṣa, the day's śrāddha tithi, and tithi and nakṣatra times.
- **Returning users** – a Namaste card with today's saṅkalpam in one tap, Share, "Start again with my name" and the coming tarpaṇam days.
- **Help** (More tab) and a **features page**: https://sankalpam.live/?features
- **Phone and computer** – one app; it can be added to the home screen and opens like an app.

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
- **PDF count:** when you tap Print / PDF or Compact PDF, the app counts it – only whether it was a saṅkalpam or tarpaṇam and which button. No names or other details are sent.
- **Optional daily email:** if you subscribe, your email address and the details you entered are stored in a private Google Sheet, used only to send you the daily saṅkalpam. You confirm by email first, and every email has an **Unsubscribe** link that deletes your details.

## Please note

The tarpaṇam text follows traditional Dharma Śāstra (Yājñavalkya and Manu Smṛti); vādhyārs and regional traditions may differ. Dates and timings are a guide. **Please have your vādhyār check the text before use.**

## Licence

Released under the [MIT License](LICENSE) – © 2026 Saṅkalpam Generator. You may use, copy, change and share the code, keeping the copyright and licence notice. The Vedic mantras belong to the Vedic tradition and are not claimed.

## Credits

Astronomical calculations: [Astronomy Engine](https://github.com/cosinekitty/astronomy) by Don Cross (MIT License).
