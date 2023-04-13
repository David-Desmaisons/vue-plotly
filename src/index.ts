import PlotlyComponent from "./components/Plotly.vue";
export default PlotlyComponent;

declare const $PKG_NAME: string;
export const PKG_NAME = typeof($PKG_NAME) === "string" ? $PKG_NAME : '';

declare const $PKG_VERSION: string;
export const PKG_VERSION = typeof($PKG_VERSION) === "string" ? $PKG_VERSION : '';

export { eventNames } from "@/components/events";
