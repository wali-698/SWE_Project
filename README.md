# Personal Expense Tracker

A simple single-page Personal Expense Tracker built with HTML, CSS, and vanilla JavaScript.

## Features

- Add income and expense transactions
- Transaction history with delete support
- Summary: Balance, Income, Expense
- Data persistence using `localStorage`
- Dynamic category list based on transaction `Type` (Income vs Expense)

## Run locally

You can open `index.html` directly in your browser, but using a local HTTP server is recommended for consistent behavior:

```bash
cd "/media/wali/New Volume/BOOKS.1/SWE/Project"
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Android App

A built Android package (APK) is included in the repository. Click the button below to download the APK file:

<p>
  <a href="Expence%20Tracker%20(APP)/android/app-release.apk" download style="display:inline-block;padding:10px 16px;background:#2d9cdb;color:white;border-radius:6px;text-decoration:none;">Download Android App (APK)</a>
</p>

File path: `Expence Tracker (APP)/android/app-release.apk`

Note: When installing the APK on an Android device, you may need to allow installations from unknown sources and verify the app before installing.

## Notes & Next steps

- If transactions disappear after refresh, run the app via HTTP server (see above) and check browser console for errors.
- Consider adding input validation, XSS-safe rendering, and export/import features for backups.

---

Made changes to `script.js` to add `localStorage` persistence and dynamic categories. See `script.js` for implementation details.
