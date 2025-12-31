import { createApp } from 'vue';
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import LinkPage from './components/LinkPage.vue';
import ToygunPage from './components/ToygunPage.vue';
import './style.css';

/**
 * ルート定義
 * Hash modeを使用しているため、URLは以下のようになります：
 * - ホーム: https://example.com/#/
 * - リンク集: https://example.com/#/linkpage
 * - トイガンインプレ: https://example.com/#/toygun
 *
 * Hash mode（createWebHashHistory）を使用する理由：
 * - レンタルサーバーで.htaccessが使用できない場合でも動作する
 * - サーバー側の設定が不要で、SPAのルーティングが正常に機能する
 * - 直接URLにアクセスしても404エラーにならない
 */
const routes: RouteRecordRaw[] = [
    { path: '/', component: HomePage },
    { path: '/linkpage', component: LinkPage },
    { path: '/toygun', component: ToygunPage },
];

const router = createRouter({
    // Hash modeを使用（URLに#が含まれる）
    // サーバー側の設定（.htaccess等）が不要で、レンタルサーバーでも動作する
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
