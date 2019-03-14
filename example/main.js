import Vue from "vue";
import App from "./App.vue";
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/mono-blue.css';

import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import css from 'highlight.js/lib/languages/css';


Vue.use(VueHighlightJS, {
  languages: {
    css,
    javascript,
    vue
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");