================================================================================
SAṄKALPAM GENERATOR v4.6
Updated: 2026-09-30
================================================================================

CONTENTS OF THIS FOLDER:
────────────────────────
1. Code.gs                    → Google Apps Script (Backend)
2. index.html                 → Web App Frontend (GitHub Pages)
3. README.txt                 → This file (deployment instructions)
4. CHANGELOG.txt              → Detailed version history & features

================================================================================
WHAT'S NEW IN v4.6:
───────────────────

FEATURE 1: EMAIL THIS PDF ONCE
✓ New button on Saṅkalpam and Tarpaṇam output tabs
✓ Users can email the PDF to themselves (one-time, no subscription needed)
✓ No confirmation email required - sends immediately
✓ Smart logging: only tracked if user is NOT a daily subscriber

FEATURE 2: PDF DOWNLOAD TRACKING
✓ Automatic tracking when users download PDFs
✓ Tracks both "Print/Save as PDF" and "Compact PDF (WhatsApp)" separately
✓ Anonymous tracking (doesn't require user email)
✓ Helps analyze which format users prefer

================================================================================
DEPLOYMENT INSTRUCTIONS:
─────────────────────────

STEP 1: UPDATE GOOGLE APPS SCRIPT (Code.gs)
────────────────────────────────────────────
1. Go to your Google Sheet with subscribers
2. Click: Extensions → Apps Script
3. You'll see the Code.gs file in the editor
4. Select ALL content (Ctrl+A)
5. DELETE everything
6. Open the Code.gs file from this folder
7. Copy ALL content
8. Paste into the Google Apps Script editor
9. Click SAVE (Ctrl+S)
10. Verify: Deploy → Manage deployments → check web app URL is active
    (URL should end with /exec)

STEP 2: UPLOAD index.html TO GITHUB
───────────────────────────────────
1. Go to your GitHub repository (Sankalpam-Generator repo)
2. Click on index.html in your repo
3. Click the pencil icon (Edit this file)
4. Select ALL content (Ctrl+A)
5. DELETE everything
6. Open the index.html file from this folder
7. Copy ALL content
8. Paste into GitHub editor
9. Scroll down to "Commit changes"
10. Enter commit message: "v4.6: Add Email PDF Once and PDF download tracking"
11. Click "Commit changes"
12. App updates automatically within 30 seconds

STEP 3: TEST THE FEATURE
───────────────────────
1. Go to your live app: https://akbkgk.github.io/sankalpam-generator/
2. Refresh browser (Ctrl+Shift+R to clear cache)
3. Generate a Saṅkalpam
4. Look for new button: "📧 Email This PDF Once"
5. Click it and enter your test email
6. Check your email for the PDF
7. Test PDF downloads: click "Print/Save as PDF"
8. Check your Google Sheet "OneTimeEmails" tab for logs

================================================================================
FILES TO UPLOAD TO GITHUB:
──────────────────────────

REQUIRED (2 files):
  ✓ Code.gs        → Google Apps Script editor (NOT to GitHub repo)
  ✓ index.html     → Upload to your GitHub repository (main folder)

OPTIONAL (for documentation):
  • README.txt     → Add to GitHub repo (or update existing README.md)
  • CHANGELOG.txt  → Add to GitHub repo (or reference in README)

================================================================================
GITHUB REPOSITORY STRUCTURE:
────────────────────────────

Your repo should look like this after upload:
  /
  ├── index.html                  ← UPLOAD THIS (v4.6)
  ├── icon-192.png
  ├── apple-touch-icon.png
  ├── manifest.webmanifest
  ├── README.md                   ← (optional: add v4.6 changelog)
  ├── CHANGELOG.txt               ← (optional: add this file)
  └── [other files...]

================================================================================
BACKEND (Google Apps Script):
─────────────────────────────

Location: Google Sheet → Extensions → Apps Script
File: Code.gs (paste the Code.gs from this folder into your editor)

The Code.gs file contains:
  • emailPdfOnce_() function - handles one-time email requests
  • logPdfDownload_() function - logs PDF downloads anonymously
  • Updated doPost() routing - processes new feature requests
  • All existing subscriber management code (unchanged)

NO CHANGES NEEDED TO:
  • Google Sheet structure (Subscribers sheet)
  • CONFIG settings
  • Daily email sending logic
  • Email subscription flow

================================================================================
ANALYTICS (OneTimeEmails Sheet):
────────────────────────────────

After deployment, a new sheet "OneTimeEmails" will be created with:

Columns: Date | Email | Type | Status

Records for one-time emails:
  Date:   2026-09-30T14:23:45Z
  Email:  user@example.com
  Type:   sank (Saṅkalpam) or tarp (Tarpaṇam)
  Status: Sent (only logged if NOT a daily subscriber)

Records for PDF downloads:
  Date:   2026-09-30T14:25:12Z
  Email:  [blank]
  Type:   sank (Saṅkalpam) or tarp (Tarpaṇam)
  Status: PrintPDF or CompactPDF

Filter & Analyze:
  • One-time emails: Email is NOT empty, Status = Sent
  • Print downloads: Email is empty, Status = PrintPDF
  • Compact downloads: Email is empty, Status = CompactPDF

================================================================================
TROUBLESHOOTING:
────────────────

"Email This PDF Once button doesn't work"
→ Check: Code.gs was updated and saved
→ Check: Deploy → Manage deployments → web app URL is active

"Tracking not working"
→ Check: Browser console (F12) for errors
→ Check: OneTimeEmails sheet exists in Google Sheet
→ Refresh app: Ctrl+Shift+R

"Old version still showing"
→ Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
→ Clear browser cache

================================================================================
VERSION HISTORY:
────────────────

v4.5 (2026-09-29):
  • Added "Update now" bar for version notifications
  • Daily email subscription feature stable

v4.6 (2026-09-30):
  • Added "Email This PDF Once" feature
  • Added PDF download tracking (anonymous)
  • Smart logging for subscriber vs non-subscriber tracking

================================================================================
NEED HELP?
──────────

Before uploading:
  ✓ Verify Code.gs syntax in Google Apps Script editor
  ✓ Test index.html locally (open in browser)

During GitHub upload:
  ✓ Make sure you're editing the correct file
  ✓ Copy-paste entire file content
  ✓ Write clear commit message

After deployment:
  ✓ Clear browser cache (Ctrl+Shift+R)
  ✓ Test both features
  ✓ Check OneTimeEmails sheet for logs

================================================================================

READY? Download this v4.6 folder, follow the steps above, and upload to GitHub!

Questions? Check the CHANGELOG.txt for more technical details.

================================================================================
