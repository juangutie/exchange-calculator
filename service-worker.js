self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("exchange-calculator_v1").then((cache) =>
            cache.addAll([
                "/exchange-calculator/",
                "/exchange-calculator/favicon.ico",
                "/exchange-calculator/index.html",
                "/exchange-calculator/main.js",
                "/exchange-calculator/style.css",
            ])
        )
    );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response ?? fetch(event.request)
    )
  );
});