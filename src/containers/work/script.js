import History from '../../components/history/History.vue';

const workData = require('./work.json');

export default {
    name: "work",
    data () {
        return {
            history: workData.history,
        }
    },
    components: {
        History
    }
}