import PlotlyComponent from "./components/Plotly.vue";
export default PlotlyComponent;

const $PKG = {} as Record<string, string>; // vitest ignores TS's declare.
export const PACKAGE = $PKG;

export { eventNames } from "@/components/events";
