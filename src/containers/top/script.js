import Logo from '../../components/logo/Logo.vue';

const topData = require('./top.json');

export default {
    name: "top",
    data () {
        return {
            frontendTags: topData.tags.frontend,
            backendTags: topData.tags.backend,
            infraTags: topData.tags.infra,
            otherTags: topData.tags.other,
            logos: topData.logos,
        }
    },
    components: {
        Logo,
    }
}