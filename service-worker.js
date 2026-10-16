const CACHE_NAME = "memofull-shell-v10";
const APP_SHELL = [
  "./",
  "./index.html",
  "./favicon/site.webmanifest",
  "./favicon/favicon-16x16.png",
  "./favicon/favicon-32x32.png",
  "./favicon/apple-touch-icon.png",
  "./favicon/android-chrome-192x192.png",
  "./favicon/android-chrome-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith("memofull-shell-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  // As chamadas ao Apps Script continuam dependendo de conexão.
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (!response.ok) return response;
          return caches.open(CACHE_NAME)
            .then(cache => cache.put("./index.html", response.clone()))
            .then(() => response);
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
