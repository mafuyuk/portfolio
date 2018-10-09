import Top from '../containers/top/Top.vue';
import Portfolio from '../containers/portfolio/Portfolio.vue';
import History from '../containers/history/History.vue';
import Contact from '../containers/contact/Contact.vue';

export default [
    { path: "/", component: Top },
    { path: "/portfolio", component: Portfolio },
    { path: "/history", component: History },
    { path: "/contact", component: Contact },
]