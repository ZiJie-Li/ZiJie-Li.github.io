importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js", "/buy-mask/precache-manifest.856c4bd90a264ad1c0b1acc6db02081c.js");

/*if (workbox) {
  console.log(`Yay! Workbox is loaded!`);
} else {
  console.log(`Boo! Workbox didn't load!`);
}*/

workbox.setConfig({ debug: false });

// 设置缓存前缀和后缀，请根据实际项目名修改
workbox.core.setCacheNameDetails({
  prefix: 'buy-mask',
  suffix: 'v1.0.0'
});

// have our sw update and control a web page as soon as possible.
workbox.core.skipWaiting(); // 强制等待中的 Service Worker 被激活
workbox.core.clientsClaim(); // Service Worker 被激活后使其立即获得页面控制权

// vue-cli3.0 supports pwa with the help of workbox-webpack-plugin, we need to get the precacheing list through this sentence.
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  // Cache JS files
  /service-worker.js/,
  // 使用快取，但在背景更新
  new workbox.strategies.StaleWhileRevalidate({
    // 使用自定義快取名稱
    cacheName: 'service-worker-cache'
  })
);

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // 使用快取，但在背景更新
  new workbox.strategies.StaleWhileRevalidate({
    // 使用自定義快取名稱
    cacheName: 'css-cache'
  })
);

workbox.routing.registerRoute(
  // Cache JS files
  /.*\.js/,
  // 使用快取，但在背景更新
  new workbox.strategies.StaleWhileRevalidate({
    // 使用自定義快取名稱
    cacheName: 'js-cache'
  })
);

workbox.routing.registerRoute(
  // Cache font-awesome Font files
  /https:\/\/stackpath.bootstrapcdn.com\/font-awesome\/4.7.0\/fonts/,
  new workbox.strategies.StaleWhileRevalidate({
    // 使用自定義快取名稱
    cacheName: 'font-awesome-font-cache'
  })
);

workbox.routing.registerRoute(
  /https:\/\/fonts.googleapis.com\/css/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache CDN files
//workbox.routing.registerRoute(
//  new RegExp('https://stackpath\\.bootstrapcdn\\.com.*/css/.*\\.css'),
//  new workbox.strategies.StaleWhileRevalidate({
//    cacheName: 'cdn-bootstrap-css-cache'
//  })
//);

// 缓存主站路由，按自己域名规则进行配置
/*workbox.routing.registerRoute(
  // Vue
  new RegExp('http://zijie-li.github.io/buy-mask/'),
  // 使用缓存，但尽快在后台更新
  new workbox.strategies.StaleWhileRevalidate()
);*/

// api缓存，优选从网络获取，网络异常时再使用缓存，请根据实际api url配置RegExp，只支持get请求
workbox.routing.registerRoute(
  new RegExp('https://api.order.nctu.me/api/v1/maskStore'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'apis',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
);

// api缓存，优选从网络获取，网络异常时再使用缓存，请根据实际api url配置RegExp，支持post请求
// const bgSyncPlugin = new workbox.backgroundSync.Plugin('apiQueue', {
//   maxRetentionTime: 1 * 60
// });

// workbox.routing.registerRoute(
//   /.*\/api\/.*/
//   new workbox.strategies.NetworkOnly({
//     plugins: [bgSyncPlugin]
//   }),
//   'POST'
// );
