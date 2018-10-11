import Card from '../../components/card/Card.vue';

export default {
    name: "portfolio",
    data () {
        return {
            tags: ["Go", "Vue.js"],
            cardList: [
                {
                    imgPath: "/assets/icon.jpg",
                    title: "タイトル1",
                    subTitle: "サブタイトル",
                    techTags: ["Go", "Vue.js"],
                    content: "せつめいせつめいせつめいせつめいせつめいせつめいせつめい",
                },
                {
                    imgPath: "/assets/icon.jpg",
                    title: "タイトル2",
                    subTitle: "サブタイトル",
                    techTags: ["AWS"],
                    content: "せつめいせつめいせつめいせつめいせつめいせつめいせつめい",
                },
                {
                    imgPath: "/assets/icon.jpg",
                    title: "タイトル3",
                    subTitle: "サブタイトル",
                    techTags: ["Go", "Cassandra", "Kafka"],
                    content: "せつめいせつめいせつめいせつめいせつめいせつめいせつめい",
                },
                {
                    imgPath: "/assets/icon.jpg",
                    title: "タイトル4",
                    subTitle: "サブタイトル",
                    techTags: ["Lambda", "Node.js"],
                    content: "せつめいせつめいせつめいせつめいせつめいせつめいせつめい",
                }
            ]
        }
    },
    components: {
        Card
    }
}