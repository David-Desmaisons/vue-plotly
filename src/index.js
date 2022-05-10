import Plotly from "./components/Plotly.vue";

function install(Vue) {
    Vue.component('v-plotly', Plotly);
}

export { Plotly, install };
