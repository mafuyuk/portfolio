import Top from '../containers/top/Top.vue';
import Product from '../containers/product/Product.vue';
import History from '../containers/history/History.vue';
import Contact from '../containers/contact/Contact.vue';

export default [
    { path: "/", component: Top },
    { path: "/product", component: Product },
    { path: "/history", component: History },
    { path: "/contact", component: Contact },
]