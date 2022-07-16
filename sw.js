// * Service Worker for cache - Start
/*
    * Resources:
    https://css-tricks.com/serviceworker-for-offline/
    https://inviqa.com/blog/service-workers-guide-building-offline-web-experiences#:~:text=Service%20workers%20are%20recognised%20as,needs%20of%20modern%20development%20environments.
    https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading
    https://www.smashingmagazine.com/2016/02/making-a-service-worker/
    https://googlechrome.github.io/samples/service-worker/basic/

    https://googlechrome.github.io/samples/service-worker/custom-offline-page/

    https://gist.github.com/ngokevin/7eb03d90987c0ed03b873530c3b4c53c

    https://developers.google.com/web/ilt/pwa/introduction-to-service-worker

    https://web.dev/offline-cookbook/

    https://developers.google.com/web/ilt/pwa/lab-scripting-the-service-worker
    Todo: Use the sample from the link below.
    https://googlechrome.github.io/samples/service-worker/basic/
*/

if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js');
}

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('sw.js').then(function (registration) {
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }).catch(function (error) {
//         console.log('ServiceWorker registration failed: ', error);
//     });
// }


// self.addEventListener('install', function (event) {
//     console.log('Service Worker: Installed');
// });


// Core assets
let coreAssets = [
    "assets/css/main.css",
    "assets/css/print.css",
    "assets/js/script.js",
    "assets/icons/favicon.svg",
    "assets/icons/icons.svg",
    "assets/icons/logo.svg",
];

// On install, cache core assets
self.addEventListener('install', function (event) {

	// Cache core assets
	event.waitUntil(caches.open('app').then(function (cache) {
		for (let asset of coreAssets) {
			cache.add(new Request(asset));
		}
		return cache;
	}));

});

// Listen for request events
self.addEventListener('fetch', function (event) {

	// Get the request
	let request = event.request;

	// Bug fix
	// https://stackoverflow.com/a/49719964
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

	// HTML files
	// Network-first
	if (request.headers.get('Accept').includes('text/html')) {
		event.respondWith(
			fetch(request).then(function (response) {

				// Create a copy of the response and save it to the cache
				let copy = response.clone();
				event.waitUntil(caches.open('app').then(function (cache) {
					return cache.put(request, copy);
				}));

				// Return the response
				return response;

			}).catch(function (error) {

				// If there's no item in cache, respond with a fallback
				return caches.match(request).then(function (response) {
					return response || caches.match('/offline.html');
				});

			})
		);
	}

	// CSS & JavaScript
	// Offline-first
	if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
		event.respondWith(
			caches.match(request).then(function (response) {
				return response || fetch(request).then(function (response) {

					// Return the response
					return response;

				});
			})
		);
		return;
	}

	// Images
	// Offline-first
	if (request.headers.get('Accept').includes('image')) {
		event.respondWith(
			caches.match(request).then(function (response) {
				return response || fetch(request).then(function (response) {

					// Save a copy of it in cache
					let copy = response.clone();
					event.waitUntil(caches.open('app').then(function (cache) {
						return cache.put(request, copy);
					}));

					// Return the response
					return response;

				});
			})
		);
	}

});



// * Service Worker for cache - End