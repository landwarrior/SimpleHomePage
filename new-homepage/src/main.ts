import { createApp } from 'vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import LinkPage from './components/LinkPage.vue';
import './style.css';

const routes: RouteRecordRaw[] = [
    { path: '/', component: HomePage },
    { path: '/linkpage', component: LinkPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
