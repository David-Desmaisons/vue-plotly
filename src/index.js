import Plotly from "./components/Plotly.vue";

export { Plotly };

export default {
  install(Vue) {
    Vue.component('v-plotly', Plotly);
  },
};
