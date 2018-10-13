import Card from '../../components/card/Card.vue';

export default {
    name: "product",
    data () {
        return {
            cardList: require('./product.json'),
        }
    },
    components: {
        Card
    }
}