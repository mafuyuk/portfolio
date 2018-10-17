import Vue from 'vue';
import VueAnalytics from 'vue-analytics'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import 'material-design-icons/iconfont/material-icons.css';
import VueRouter from 'vue-router';

import Header from '../components/header/Header.vue';
import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueAnalytics, {
    id: 'UA-91802628-3',
    router
});

const app = new Vue({
    el: '#app',
    components: {
        'headers': Header,
    },
    router,
});