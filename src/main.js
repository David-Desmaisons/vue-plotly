import Vue from "vue";
import App from "./App.vue";
import VueHighlightJS from "vue-highlight.js";

import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";
import css from "highlight.js/lib/languages/css";
import VueDraggableResizable from "vue-draggable-resizable";
import { Plotly } from "vue-plotly";

import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import "highlight.js/styles/default.css";
import "highlight.js/styles/mono-blue.css";
import vuetify from "./plugins/vuetify";

Vue.component("vue-draggable-resizable", VueDraggableResizable);
Vue.component("plotly", Plotly);

Vue.use(VueHighlightJS, {
  languages: {
    css,
    javascript,
    vue
  }
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
