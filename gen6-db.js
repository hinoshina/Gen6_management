// gen6-db.js
// IndexedDB アクセス層。ユーザーがGUIで追加・編集・削除する対象データ（instances）の永続化を担当する。
//
// 対象外（このファイルでは扱わない）:
//   species / natures / abilityTypeResistances / typeChart は開発者が gen6-constants.js を
//   直接編集して更新する固定データのため、IndexedDBには保存しない。
//
// DB名        : pokemonGen6_db
// DBバージョン: 1
// オブジェクトストア: instances
//   - keyPath      : "id"
//   - autoIncrement: true
//     → 個体を追加するたびに 1, 2, 3, ... と自動的に番号が振られる。
//       GUIで編集する前提のため、ユーザーがIDを直接読んだり指定したりする必要はない。
//
// 依存: gen6-initial-instances.js の INITIAL_INSTANCES
//       （ストアが空の場合のみ、初回起動時の投入データとして使用する）
//
// 提供API（すべて Promise を返す。呼び出し前に init() を呼ぶ必要はない＝各関数が内部で自動的に初期化する）:
//   Gen6DB.init()                 … DBを開く（未作成なら作成し、空なら初期データを投入）。DB接続の準備ができたら解決される
//   Gen6DB.addInstance(data)      … 新規追加。data.id は無視され、自動採番されたIDで登録される。解決値は新しいid
//   Gen6DB.getInstance(id)        … idを指定して1件取得。存在しなければ undefined で解決
//   Gen6DB.getAllInstances()      … 全件取得（配列）。表示・検索・並び替えは呼び出し側でこの配列に対して行う
//   Gen6DB.updateInstance(data)   … data.id で対象を特定し、レコード全体を上書き保存する
//   Gen6DB.deleteInstance(id)     … idを指定して1件削除
//   Gen6DB.clearAllInstances()    … 全件削除（バックアップのインポート時などに使用予定）
//   Gen6DB.requestPersistentStorage() … navigator.storage.persist() を要求し、許可されたか(true/false)を返す
//   Gen6DB.isStoragePersisted()       … navigator.storage.persisted() で現在の許可状態(true/false)を確認する

const GEN6_DB_NAME = 'pokemonGen6_db';
const GEN6_DB_VERSION = 1;
const GEN6_STORE_INSTANCES = 'instances';

const Gen6DB = (function () {
  let dbPromise = null;

  // IndexedDBを開く。初回（DB未作成）や、将来バージョンを上げた際はここでストア構成を更新する。
  function openDB() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        reject(new Error('このブラウザは IndexedDB に対応していません'));
        return;
      }
      const req = indexedDB.open(GEN6_DB_NAME, GEN6_DB_VERSION);

      req.onupgradeneeded = (ev) => {
        const db = ev.target.result;
        if (!db.objectStoreNames.contains(GEN6_STORE_INSTANCES)) {
          db.createObjectStore(GEN6_STORE_INSTANCES, { keyPath: 'id', autoIncrement: true });
        }
      };

      req.onsuccess = (ev) => resolve(ev.target.result);
      req.onerror = (ev) => reject(ev.target.error || new Error('IndexedDBのオープンに失敗しました'));
      req.onblocked = () => reject(new Error('IndexedDBのオープンがブロックされました（他のタブでこのアプリを開いていないか確認してください）'));
    });
  }

  // instances ストアが空の場合のみ、INITIAL_INSTANCES を初期データとして投入する。
  // 元データが持っていた文字列ID（例:"ウォッシュロトム1"）は使わず、自動採番に任せる。
  function seedIfEmpty(db) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(GEN6_STORE_INSTANCES, 'readwrite');
      const store = tx.objectStore(GEN6_STORE_INSTANCES);

      const countReq = store.count();
      countReq.onsuccess = () => {
        if (countReq.result === 0) {
          const seedList = (typeof INITIAL_INSTANCES !== 'undefined') ? INITIAL_INSTANCES : [];
          seedList.forEach((item) => {
            const clone = JSON.parse(JSON.stringify(item));
            delete clone.id; // 自動採番させるため、シード側のIDは破棄する
            store.add(clone);
          });
        }
      };
      countReq.onerror = () => reject(countReq.error);

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error || new Error('初期データの投入が中断されました'));
    });
  }

  // DBを開き（未作成なら作成）、必要なら初期データを投入したうえで接続を返す。
  // 何度呼んでも同じ接続（Promise）を再利用する。
  function init() {
    if (!dbPromise) {
      dbPromise = openDB()
        .then((db) => seedIfEmpty(db).then(() => db))
        .catch((err) => {
          // 初期化に失敗した場合、次回呼び出しで再試行できるようにキャッシュをクリアする
          dbPromise = null;
          throw err;
        });
    }
    return dbPromise;
  }

  // instances ストアに対して1つのトランザクションを実行するための共通処理。
  // fn は IDBObjectStore を受け取り、IDBRequest を返すこと。
  // トランザクションが正常に完了（oncomplete）した時点で、そのリクエストの結果を解決する。
  function withStore(mode, fn) {
    return init().then(
      (db) =>
        new Promise((resolve, reject) => {
          let tx;
          try {
            tx = db.transaction(GEN6_STORE_INSTANCES, mode);
          } catch (e) {
            reject(e);
            return;
          }
          const store = tx.objectStore(GEN6_STORE_INSTANCES);

          let requestResult;
          let requestError = null;
          let request;
          try {
            request = fn(store);
          } catch (e) {
            reject(e);
            return;
          }
          if (request) {
            request.onsuccess = () => {
              requestResult = request.result;
            };
            request.onerror = () => {
              requestError = request.error;
            };
          }

          tx.oncomplete = () => {
            if (requestError) reject(requestError);
            else resolve(requestResult);
          };
          tx.onerror = () => reject(tx.error || requestError);
          tx.onabort = () => reject(tx.error || requestError || new Error('処理が中断されました'));
        })
    );
  }

  function addInstance(data) {
    const clone = Object.assign({}, data);
    delete clone.id; // 追加時は常に自動採番させる
    return withStore('readwrite', (store) => store.add(clone));
  }

  function getInstance(id) {
    return withStore('readonly', (store) => store.get(id));
  }

  function getAllInstances() {
    return withStore('readonly', (store) => store.getAll());
  }

  function updateInstance(data) {
    if (data == null || typeof data.id === 'undefined' || data.id === null) {
      return Promise.reject(new Error('updateInstance には id を含むデータが必要です'));
    }
    return withStore('readwrite', (store) => store.put(data));
  }

  function deleteInstance(id) {
    return withStore('readwrite', (store) => store.delete(id));
  }

  function clearAllInstances() {
    return withStore('readwrite', (store) => store.clear());
  }

  // ============================================================
  // Persistent Storage（ブラウザにデータの永続化を要求する）
  // ============================================================
  // navigator.storage.persist() でストレージの永続化を要求する。
  // 許可されるかどうかはブラウザ/OS次第（iOSではホーム画面に追加したPWAだと許可されやすい）で、
  // 拒否されたりAPI自体が存在しない場合でも false を返すだけで、
  // IndexedDBを使ったアプリの動作そのものには一切影響しない。
  function requestPersistentStorage() {
    if (!navigator.storage || typeof navigator.storage.persist !== 'function') {
      return Promise.resolve(false);
    }
    return navigator.storage.persist().catch(() => false);
  }

  // 現在、永続化ストレージが許可されているかどうかを確認する
  function isStoragePersisted() {
    if (!navigator.storage || typeof navigator.storage.persisted !== 'function') {
      return Promise.resolve(false);
    }
    return navigator.storage.persisted().catch(() => false);
  }

  return {
    init,
    addInstance,
    getInstance,
    getAllInstances,
    updateInstance,
    deleteInstance,
    clearAllInstances,
    requestPersistentStorage,
    isStoragePersisted,
  };
})();
