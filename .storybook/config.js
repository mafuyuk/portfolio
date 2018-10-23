import { configure } from '@storybook/vue';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import 'material-design-icons/iconfont/material-icons.css';

import Vue from "vue";
import VueMaterial from "vue-material";

Vue.use(VueMaterial);

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
