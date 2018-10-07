import Top from './containers/top/top.vue';
import Portfolio from './containers/portfolio/portfolio.vue';
import History from './containers/history/history.vue';
import Contact from './containers/contact/contact.vue';

export default [
    { path: "/", component: Top },
    { path: "/portfolio", component: Portfolio },
    { path: "/history", component: History },
    { path: "/contact", component: Contact },
]