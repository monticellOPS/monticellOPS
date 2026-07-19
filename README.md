# MonticellOPS — Mission 001 PWA

A mobile-first Progressive Web App for the Existing Conditions Reconnaissance mission.

## Files

- `index.html` — app shell
- `styles.css` — interface styling
- `app.js` — mission logic and local storage
- `manifest.webmanifest` — installable app metadata
- `service-worker.js` — offline cache
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — app icons

## Publish with GitHub Pages

1. Create a GitHub account.
2. Create a new public repository named `monticellops`.
3. Upload every file from this folder to the root of that repository.
4. Commit the files.
5. Open repository **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main**, folder **/(root)**, then Save.
8. Wait for GitHub to publish the site.

Your address will normally be:

`https://YOUR-USERNAME.github.io/monticellops/`

## Install on iPhone

1. Open the published address in Safari.
2. Tap Share.
3. Tap **Add to Home Screen**.
4. Open MonticellOPS from the new icon once while online.
5. It should then continue working offline.

Mission progress is stored locally in that browser/device.
