import { precacheAndRoute } from 'workbox-precaching';

const CACHE_NAME = 'ascs-capstone-v1';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('fetch', event => {
event.respondWith(
  caches.match(event.request)
    .then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
);
});

self.addEventListener('activate', event => {
const cacheWhitelist = [CACHE_NAME];
event.waitUntil(
  caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    );
  })
);
});
