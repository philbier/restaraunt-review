
var staticCacheName = 'cache-v1';

self.addEventListener('install', (event) => {

  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/css/styles.css',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        'https://fonts.googleapis.com/css?family=Open+Sans:300,400',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css',
        '/restaurant.html?id=1',
        '/restaurant.html?id=2',
        '/restaurant.html?id=3',
        '/restaurant.html?id=4',
        '/restaurant.html?id=5',
        '/restaurant.html?id=6',
        '/restaurant.html?id=7',
        '/restaurant.html?id=8',
        '/restaurant.html?id=9',
        '/restaurant.html?id=10'
      ]);
    })
  );
  // '//normalize-css.googlecode.com/svn/trunk/normalize.css',
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((response) => response || fetch(event.request)
    ).catch( () => console.log('No'))
  );
});

