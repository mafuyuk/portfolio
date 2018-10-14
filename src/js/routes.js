import Top from '../containers/top/Top.vue';
import Product from '../containers/product/Product.vue';
import Work from '../containers/work/Work.vue';
import Contact from '../containers/contact/Contact.vue';

export default [
    { path: "/", component: Top },
    { path: "/product", component: Product },
    { path: "/work", component: Work },
    { path: "/contact", component: Contact },
]