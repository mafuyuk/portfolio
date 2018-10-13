import Card from '../../components/card/Card.vue';

export default {
    name: "portfolio",
    data () {
        return {
            cardList: require('./portfolio.json'),
        }
    },
    components: {
        Card
    }
}