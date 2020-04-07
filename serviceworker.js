const staticDayCounter = "day-counter-v1";
const assets = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./lib/bootstrap-4.4.1-dist/css/bootstrap.min.css",
  "./lib/bootstrap-4.4.1-dist/css/bootstrap-grid.min.css",
  "./lib/bootstrap-4.4.1-dist/css/bootstrap-reboot.min.css",
  "./lib/jquery-3.4.1/js/jquery-3.4.1.slim.min.js",
  "./lib/popper-1.16.0-dist/js/popper.min.js",
  "./lib/bootstrap-4.4.1-dist/js/bootstrap.min.js",
  "./lib/bootstrap-4.4.1-dist/js/bootstrap.bundle.min.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDayCounter).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
