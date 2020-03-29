'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/main.dart.js": "4c5bcf6fbf786d503b4eb6215b770a3e",
"/manifest.json": "86c8b5e47a433efa05408923fa45547f",
"/index.html": "96df07f2c7c3479f1e2e3e344ee1670e",
"/assets/images/calci.png": "7fe5c2d53059e25040084fc53731e214",
"/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"/assets/FontManifest.json": "3a3023ae7f60d28bd2e214dcc0a0183d",
"/assets/LICENSE": "e042ace285b468161e7420b41e82c0c6",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"/assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"/assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"/assets/AssetManifest.json": "28ffa95da4f620e13f3fc3d3de6cc9cd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
