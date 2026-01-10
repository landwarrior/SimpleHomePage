import { createApp } from 'vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import LinkPage from './components/LinkPage.vue';
import ToygunPage from './components/ToygunPage.vue';
import './style.css';

/**
 * ルート定義
 *
 * 【Hashモード vs Historyモードの違い】
 *
 * ■ Hashモード（createWebHashHistory）
 *   - URL例: https://example.com/#/linkpage
 *   - URLに#（ハッシュ）が含まれる
 *   - メリット:
 *     * サーバー側の設定（.htaccess等）が不要
 *     * レンタルサーバーで.htaccessが使えない場合でも動作する
 *     * 直接URLにアクセスしても404エラーにならない
 *   - デメリット:
 *     * URLが不自然（#が含まれる）
 *     * SEO的には不利
 *
 * ■ Historyモード（createWebHistory）← 現在使用中
 *   - URL例: https://example.com/linkpage
 *   - 通常のURL形式（#が含まれない）
 *   - メリット:
 *     * 自然で読みやすいURL
 *     * SEOに有利
 *     * より一般的なWebサイトのような見た目
 *   - デメリット:
 *     * サーバー側の設定が必要（.htaccess等）
 *     * 存在しないパスに直接アクセスすると404エラーになるため、
 *       全てのリクエストをindex.htmlにリダイレクトする設定が必要
 *
 * 現在はHistoryモードを使用しています。
 * .htaccessファイル（public/.htaccess）でSPAのルーティングを適切に処理しています。
 */
const routes: RouteRecordRaw[] = [
    { path: '/', component: HomePage },
    { path: '/linkpage', component: LinkPage },
    { path: '/toygun', component: ToygunPage },
];

const router = createRouter({
    // History modeを使用（通常のURL形式）
    // 例: /linkpage → https://example.com/linkpage
    //
    // サーバー側の設定が必要:
    // - .htaccessで全てのリクエストをindex.htmlにリダイレクトする設定が必要
    // - public/.htaccess ファイルがビルド時に dist/.htaccess にコピーされる
    //
    // Hash modeに変更する場合:
    // - createWebHistory() → createWebHashHistory() に変更
    // - URL例: /linkpage → https://example.com/#/linkpage
    // - .htaccessファイルは不要になる
    history: createWebHistory(),
    routes,
});

const app = createApp(App).use(router);
app.mount('#app');
