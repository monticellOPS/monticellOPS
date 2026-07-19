/* MonticellOPS legacy service-worker removal */
self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(name => caches.delete(name)));

    await self.registration.unregister();

    const clients = await self.clients.matchAll({
      type: "window",
      includeUncontrolled: true
    });

    for (const client of clients) {
      const url = new URL(client.url);
      url.searchParams.set("sw_cleanup", Date.now().toString());
      await client.navigate(url.toString());
    }
  })());
});

/* Intentionally no fetch handler: all requests go to the network. */
