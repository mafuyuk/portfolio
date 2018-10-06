import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import VueRouter from 'vue-router';

import header from './components/header/header.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(ElementUI, { locale });

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    el: '#app',
    components: {
        'headers': header,
    },
    router,
});