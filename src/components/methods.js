import Plotly from "plotly.js";

const plotyFunctions = [
  "restyle",
  "relayout",
  "update",
  "addTraces",
  "deleteTraces",
  "moveTraces",
  "extendTraces",
  "prependTraces",
  "purge"
];

const methods = plotyFunctions.reduce((all, functionName) => {
  all[functionName] = function(...args) {
    return Plotly[functionName].apply(Plotly, [this.$el, ...args]);
  };
  return all;
}, {});

export default methods;
