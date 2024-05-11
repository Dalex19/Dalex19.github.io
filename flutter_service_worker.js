'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8030d8ed324038df59248b321fd489d8",
".git/config": "c4345689b48ae51a403db529aac76757",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "440745211cd836d6a560a380be4e0d85",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b55e9dd7c4cfb722e1cd747e57daac1f",
".git/logs/refs/heads/main": "0ac234a518dc1dd347fed97fa50bc355",
".git/logs/refs/remotes/origin/main": "c821c09e28fbf55eecc462a94fd2fb01",
".git/objects/05/2eaaebe791b1034ea5f8e460d2e5a9534c867e": "50c8b48f0dfa2e382e70b39efacfaf3d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/10/8be0b6d2d928cd6a30296c6a861a5d37b2c401": "8b376567bc49577d19a004802f5e54ef",
".git/objects/13/e671aa4e4c10e024dcfc39aba527d62a20aa7f": "c56332af533f87d8f8ed032a81c1d57a",
".git/objects/14/7c20e3c807736fcbe7e5dcd9cd3c8cd77d7802": "318743727db3e92642809a69111fdef9",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1b/51b3b84bc81281ad8616f10e122074edf0d60d": "a9f1289b7d9f958326ce5d9fa149ad72",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/357e29f464048df7c6a1bd13ef16195de5e42f": "ebd7d31cd438eb53849dd0c497f1b3cb",
".git/objects/22/c364d26259ebaf34c3a64ca62c056d591bc3bf": "7a760cf6a341bed11d9840902008cd5d",
".git/objects/23/5412f163ee28a9121ec4b92d3270648d10c988": "153a840ab59d013a0f8d07c056aa61d2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/0ea41f30c6dfb2cb75d7e0866dcdeaf26223f5": "0e091223d78ff081044f2b2721ce9c6e",
".git/objects/2a/88ea50a7729ea2ef6559e2312270e1ebf3f135": "07700ebe596728640f3529b9fb0f238f",
".git/objects/37/44afc1a2883620126c2ccae6f8d05c3e21ab94": "e382ec57950734b580d9da45b5560d1d",
".git/objects/44/d36bf1ed7a7cc810eb6cfba91eea6950a93243": "ffaae79512119b2aad4aa7ba3f35a7fb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/9177bc309a227227e4e678cf054e84d5b7a6f9": "96d701c3932b873f5ed99b41ba1b9133",
".git/objects/4a/119f87470fecc106f37b8c007abe14ebd181bb": "0dfdbf46a854eb647eb70760687a3e53",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/850ceefe0eacb3ca6b7b0c5c84151ddb81249f": "572c9f7262a5abf94e7c661c91bc0284",
".git/objects/53/684f1056e7c0109b9c2159ed4930b4ef33a12d": "df479bab53123eb312d3f5c54212a6e1",
".git/objects/54/7bf58b157e17d91b76e3f7a6390d811bd91fb7": "6e44e1a9adf2220b29ff5cb8a36eb43c",
".git/objects/55/f8563f26fd3b7bc33b6e3bfde28bdaf5817b5d": "583dfdb04b09806dc09fbfb4140099b4",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/f10808c9f96fa5c3ceecb2c8c7e48b3cbc829f": "d1c4376e0ff81875da24db14105e1f6b",
".git/objects/62/892fa83ed7a0d0b4aa6f2daa2556569399630e": "4df77f81825ffba48f1fd8a2bc489d79",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/7c9d5272585d081b81b28725f348b79fb0b777": "865e932650a00cf44c13ba7020f6a366",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7e/df05d567e1f20e53d881ba793f6ab63c79bba7": "b81f670be893d52b99a6f81559774594",
".git/objects/7f/7cd039e2f45981f8745402bc0939e6156adbb9": "3f28195bb3cd0e26e5b2c3c1501cbb8a",
".git/objects/84/e4d2f94a84252f835eba73a55f28cd38c318e3": "296f6468ece1d09fe24c688f5ce24c41",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/265ed4c1a454d9fe030affd20df6eba4c47794": "c38306e6c47301b597c27ad7e5961bee",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/96/5f26927dbbca2b7ac19d5f37dbc96709677b44": "16ebf6e2daee6a4857796cef12f06d00",
".git/objects/96/d6ab914596aa7c39562adfa92ac2f419eaf6a6": "f482c431a399a8cfd8436bf68514d861",
".git/objects/97/28c3953c41aa7fe0bebda4fbbc1bef0d83a000": "ffd8469919d65cd1a275bb86f88dd30c",
".git/objects/97/897a4a947b265c78e45cadc8672789d1ab3413": "efe2dbf4bf3b5f9d3b55ad4dd244aedf",
".git/objects/9f/5da7c4f4765c2c3b26d9ecb88dc6c03809fa78": "c28d2e70af9bcb21311d40bd867c342b",
".git/objects/9f/d9481a1450c8e8a3bd844bacbb1d9f6337a86b": "72aaeee39f594ddd011400dd26f05aa2",
".git/objects/a7/2a42064b8e2d0a014c3ce0566859de6aa9a3d8": "aaa7cd3017174198880f4c1e7a1d2656",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/08520c00885dc6361e6c2cd9130e8fb7593ed9": "a91a5a1d8c60e3443c8cac84101706c3",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/e352ce6f8b2a70d91ca02d453d8b01b9e501d0": "2aa95ee80373c7aa9c3ef94937e3df51",
".git/objects/c4/58f9b801fd7a736ce89863f6ae445e2e60f769": "b3004e78ab27952a0b8a6186387b5d34",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/4653922662baa254bc7857b830f4760f337a8d": "f36d635c7547c59dfa8f4b38f6c2f877",
".git/objects/cd/aa0037338efe41e38de05d58c1e18293d0ba3c": "aced8df114d810766ae028b0adcfcea3",
".git/objects/ce/7e6a9dad737eebf207a8159f22308dcfbf6138": "dd0e3fb98593e96a231920969adfc58a",
".git/objects/ce/bad51488bf31e494d95ef1be4d731b7e706b06": "a074b67bb22e2c6145bf4c013eee28bc",
".git/objects/d2/dc5bacca8ea2cd4767424b53e1bc97ca5b99ae": "3d5f85e882e2e4add4e3c98c61eae980",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d0008f5318c92dd5a23f73f0687a054b98f50d": "46167344cebfd3cfde813cece74805ee",
".git/objects/db/10bc0382eef13cc45d03219f4bac42c7efc6d5": "c9f9b9a02e227c95c3d5d6d8b1a9eeba",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/c803d20ea0a2005a6972e29b06b6a65d9c7fff": "3db14ec3b21ff043bd083d85831327bb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/3166aed8fc2d4d79debe4b821985ca2e5ddc24": "9e21e36754790a47ea18e691915eb1e3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/5a34bf1cd06a7e5e3172a8f57f54495c628e8f": "7a0790db3351e3015dd777c3f7fa53fc",
".git/objects/fb/e471c856556df7c6f93cdf37779b08a9963075": "194ebedda5a2ea3b1e6255d7b9dac7bb",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "6c5bcb8086d7af8d5e776a5bf27002b0",
".git/refs/remotes/origin/main": "6c5bcb8086d7af8d5e776a5bf27002b0",
"assets/AssetManifest.bin": "80bb053b0e187a74f5c9b4c90faf69fe",
"assets/AssetManifest.bin.json": "d28e9558114517609500732562d284f8",
"assets/AssetManifest.json": "ff23f0195c381b52c3c7aee3cadaa1e6",
"assets/assets/AlexResume.pdf": "b25e0a304fd83606d7ca4c447c872e54",
"assets/assets/bgphone.jpg": "9abd02d4851efaad59fc92b8da57c38b",
"assets/assets/icons/barter.jpg": "249f293f5c6d9f467d3b91a631e0750c",
"assets/assets/icons/education.svg": "9f3de77d3a9da371fae6969050285926",
"assets/assets/icons/email.svg": "6313dc4723868ae348b26e26299009d6",
"assets/assets/icons/experience.svg": "2fe7fda88fd43a2e16154a0fe638f91a",
"assets/assets/icons/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/icons/linkedin.svg": "3410a50ec15c0201979bcdd417aa66d7",
"assets/assets/icons/me.jpg": "70dc3dd1ae3a8414744991e962e8b19c",
"assets/assets/icons/pdf.svg": "bfe81ac18c1f8e73720d77b522057c5b",
"assets/assets/icons/polpo.png": "6a7bc334f41ee4d19010cd9bd93a73c0",
"assets/assets/icons/skill.svg": "0132a4745ace89e4ac6f801b2706935f",
"assets/assets/me2024.jpg": "f0ffceafde72d30e8561c7f29a75fcbc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "caced7bc0be548d3c17d39e3fa77dccf",
"assets/NOTICES": "3fe0fb7b2d391e962d4c2f15f60c99c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8ff7827bf5b6673458d41f2ac3232c2a",
"/": "8ff7827bf5b6673458d41f2ac3232c2a",
"main.dart.js": "58f86c237eb24ea3a632789ef9371ffd",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
