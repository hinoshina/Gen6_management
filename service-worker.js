// service-worker.js
// アプリ本体（HTML/CSS/JS/manifest/アイコン）をCache APIに保存し、圏外でも読み込めるようにする。
// 外部サイト・外部CDNへは一切アクセスしない。ポケモンデータ自体はIndexedDB側で管理しており、
// このService Workerはあくまで「アプリの入れ物」をオフラインで動かすためのものである。
//
// キャッシュを更新したい場合は CACHE_VERSION の数字を上げること
// （古いバージョンのキャッシュは activate 時に自動的に破棄される）。
const CACHE_VERSION = 'v1';
const CACHE_NAME = `gen6-app-cache-${CACHE_VERSION}`;

// アプリの動作に必要なファイル一式（すべて同一オリジンのローカルファイルのみ）
const APP_SHELL_FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './gen6-db.js',
  './gen6-constants.js',
  './gen6-initial-instances.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// キャッシュ優先（Cache First）: まずキャッシュを探し、なければネットワークから取得してキャッシュに追加する。
// オンライン/オフラインで処理を分けているわけではなく、単に「キャッシュにあればそれを使う」だけで、
// アプリ本体のロジック（IndexedDBへのアクセス方法など）は一切変えていない。
self.addEventListener('fetch', (event) => {
  const req = event.request;
  // GET以外（POST等）はキャッシュ対象外。このアプリはGETのみを使うため通常は関係ない。
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((networkRes) => {
          // 同一オリジンの正常なレスポンスのみキャッシュに追加する
          if (networkRes && networkRes.ok && new URL(req.url).origin === self.location.origin) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(() => {
          // 圏外かつキャッシュにも無いページ遷移の場合は、せめてアプリ本体(index.html)を返す
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return undefined;
        });
    })
  );
});
