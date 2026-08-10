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

## Website

The app is also hosted online at:

[https://wali-698.github.io/SWE_Project/](https://wali-698.github.io/SWE_Project/)

## Android App

A built Android package (APK) is available for download. Click the button below to download the APK directly from GitHub:

<p>
  <a href="https://github.com/wali-698/SWE_Project/raw/refs/heads/main/app-release%20(1).apk" style="display:inline-block;padding:14px 18px;background:#28a745;color:#fff;border-radius:10px;text-decoration:none;font-weight:700;box-shadow:0 5px 15px rgba(0,0,0,0.15);">Download Android App (APK)</a>
</p>

> If the button does not download automatically, right-click and choose "Save link as...".

Note: When installing the APK on an Android device, you may need to allow installations from unknown sources and verify the app before installing.

## APK install troubleshooting

If Android reports "App not installed":

- Uninstall any existing version of the app before installing again.
- Enable installation from unknown sources in your device settings.
- Copy the APK to your device storage and use a file manager to install it.
- If possible, install via `adb` for more detailed error output:

```bash
adb install -r "Expence Tracker (APP)/android/app-release.apk"
```

`adb` will show errors such as `INSTALL_FAILED_INCONSISTENT_CERTIFICATES`, `INSTALL_FAILED_VERSION_DOWNGRADE`, or `INSTALL_PARSE_FAILED_NO_CERTIFICATES` if there is a problem.

## Notes & Next steps

- If transactions disappear after refresh, run the app via HTTP server (see above) and check browser console for errors.
- Consider adding input validation, XSS-safe rendering, and export/import features for backups.

---

Made changes to `script.js` to add `localStorage` persistence and dynamic categories. See `script.js` for implementation details.
