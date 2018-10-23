/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import 'material-design-icons/iconfont/material-icons.css';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import Header from '../components/header/Header.vue';
import Card from '../components/card/Card.vue';
import Vue from "vue";
import VueMaterial from "vue-material";

Vue.use(VueMaterial);

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template:
      '<my-button @click="action"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></my-button>',
    methods: { action: action('clicked') },
  }));

storiesOf('Header', module).add('to Storybook', () => ({
    components: { Header },
    template: '<headers></headers>',
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
