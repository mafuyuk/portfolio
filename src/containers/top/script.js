const topData = require('./top.json');
export default {
    name: "top",
    data () {
        return {
            frontendTags: topData.tags.frontend,
            backendTags: topData.tags.backend,
            infraTags: topData.tags.infra,
            otherTags: topData.tags.other,
        }
    },
}