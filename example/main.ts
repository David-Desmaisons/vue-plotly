import { createApp } from 'vue'
import App from "./App.vue";
//import VueDraggableResizable from "vue-draggable-resizable";
import { Plotly } from "@/index.js";

//import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

//Vue.component("vue-draggable-resizable", VueDraggableResizable);

document.querySelector('h1')?.remove()

const app = createApp(App);

app.component("plotly", Plotly);

app.config.productionTip = false;

app.mount("#app");
