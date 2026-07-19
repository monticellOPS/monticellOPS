# MonticellOPS — Field Release 3

This release includes the missing piece needed to escape the old Revision 3 service worker.

The old cached V3 page can intercept the request before the new `index.html` runs. Therefore,
cleanup code inside the new page alone cannot solve the problem.

This package publishes replacement files at both possible legacy worker paths:

- `service-worker.js`
- `sw.js`

When the browser performs its normal service-worker update check, the replacement worker:

1. activates immediately,
2. deletes every cache for this site,
3. unregisters itself,
4. reloads every open MonticellOPS page from the network.

Upload every file in this package to the repository root, including both worker files.
Do not delete the worker files until the old V3 page has disappeared from all devices.

The first visit may reload itself once or twice. After the page displays
`MISSION 001 · FIELD RELEASE 3`, the legacy worker has been displaced.
