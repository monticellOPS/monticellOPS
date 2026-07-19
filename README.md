# MonticellOPS — Complete Field Release 2

This is the complete clean release for an empty GitHub repository.

## Why this release exists

The earlier V3 service worker can remain installed in a browser even after its file is deleted from GitHub. That installed worker can continue serving the old V3 application.

This release includes an inline startup cleanup that:

1. unregisters all previously installed service workers for this site,
2. deletes all Cache Storage entries for this site,
3. reloads once with a fresh URL,
4. then runs the current field release.

## Upload

Upload every file in this ZIP directly to the repository root.

No `sw.js` or `service-worker.js` file should exist.

## GitHub Pages

- Source: Deploy from a branch
- Branch: main
- Folder: /(root)

After deployment, open the normal published URL. The first load may refresh itself once. That is expected.

The Reset mission button remains fixed at the bottom of every application screen.
