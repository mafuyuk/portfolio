/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';

import Header from '../components/header/Header.vue';
import Card from '../components/card/Card.vue';

storiesOf('Header', module).add('to Storybook', () => ({
    components: { Header },
    template: '<Header></Header>',
}));

storiesOf('Card', module).add('to Storybook', () => ({
    data: function() {
        return {
            tags: [
                "JavaScript",
                "React.js"
            ],
            links: [
                "https://mafuyuk.com/"
            ]
        }
    },
    components: { Card },
    template: '<Card img-path="/assets/mafuyuk-com.png" title="Noah" sub-title="災害情報アプリ" :tags="tags" content="〇〇なアプリです" :links="links"></Card>',
}));
/* eslint-enable react/react-in-jsx-scope */
