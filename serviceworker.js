const staticDayCounter = "day-counter-v1";
const assets = [
  "./DayCount/",
  "./DayCount/index.html",
  "./DayCount/css/style.css",
  "./DayCount/js/script.js",
  "./DayCount/lib/bootstrap-4.4.1-dist/css/bootstrap.min.css",
  "./DayCount/lib/bootstrap-4.4.1-dist/css/bootstrap-grid.min.css",
  "./DayCount/lib/bootstrap-4.4.1-dist/css/bootstrap-reboot.min.css",
  "./DayCount/lib/jquery-3.4.1/js/jquery-3.4.1.slim.min.js",
  "./DayCount/lib/popper-1.16.0-dist/js/popper.min.js",
  "./DayCount/lib/bootstrap-4.4.1-dist/js/bootstrap.min.js",
  "./DayCount/lib/bootstrap-4.4.1-dist/js/bootstrap.bundle.min.js",
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
