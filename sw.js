const CACHE_NAME = 'fillmaster-v9-pwa'; // Verzió emelése a frissítés kényszerítéséhez
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './config.js',           // FONTOS: Ez hiányozhatott!
  './manifest.json',
  // Külső könyvtárak (CDN) - Ezek kellenek az offline működéshez
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/bwip-js@3.0.4/dist/bwip-js-min.js'
];

// Telepítés (Install): Fájlok letöltése
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Azonnal aktiválódjon, ne várjon
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Caching static assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Aktiválás (Activate): Régi cache törlése
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('SW: Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Hálózati kérések kezelése (Fetch)
self.addEventListener('fetch', (event) => {
  // Csak a GET kéréseket cache-eljük
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. Ha megvan offline-ban, adjuk vissza azt (gyors)
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // 2. Ha nincs, töltsük le a netről
      return fetch(event.request).then((response) => {
        // Ha nem sikerült letölteni (pl. 404), vagy nincs net
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Ha sikerült, és ez egy statikus fájl, elmenthetjük későbbre
        // (Opcionális: itt most csak visszaadjuk, mert az install-nál mindent leszedtünk)
        return response;
      });
    })
  );
});
