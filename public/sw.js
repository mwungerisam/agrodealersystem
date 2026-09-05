const CACHE_NAME = "ufbc-agrodealer-shell-v2";
const APP_SHELL = ["/manifest.webmanifest", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key))),
    ).then(() => self.clients.claim())
  );
});

// Network-first for scripts and documents, fallback to cache for offline static icons
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // Let browser fetch live code directly
  if (request.destination === "script" || request.destination === "style" || request.mode === "navigate") {
    return;
  }

  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

