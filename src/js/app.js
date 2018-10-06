import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css';
import VueRouter from 'vue-router';

import header from './components/header/header.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(VueMaterial);

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