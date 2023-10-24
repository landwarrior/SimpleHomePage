import FooterComp from './FooterComp.js';
import HeaderComp from './HeaderComp.js';

window.addEventListener('DOMContentLoaded', () => {
    Vue.createApp({
        data() {
            return {
                active_title: '',
            };
        },
        components: { HeaderComp },
    }).mount('#header');

    Vue.createApp({
        components: { FooterComp },
    }).mount('#footer');

    Vue.createApp({
        data() {
            return {};
        },
    }).mount('#main-contents');

    M.AutoInit();
});
