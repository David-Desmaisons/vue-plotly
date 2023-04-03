import Vue from "vue";
import * as Plotly from "plotly.js";

type TPlotly = typeof Plotly;

type TPlotlyMethodNames = {
  [K in keyof TPlotly]: TPlotly[K] extends (...args: any) => any ? K : never;
}[keyof TPlotly];

type TExportedNames = `plotly${Capitalize<TPlotlyMethodNames>}`;

type TExportedMethods = Record<TExportedNames, (...args: any) => any>;

const plotlyFunctions = Object.entries(Plotly).filter(([, val]) => typeof val === "function") as [TPlotlyMethodNames, any];

const methods = plotlyFunctions.reduce((all, [fnName, fn]) => {
  const newFnName = "plotly" + fnName[0].toUpperCase() + fnName.slice(1);
  all[newFnName] = function (...args: any[]) {
    const that = this as unknown as Vue;
    fn = fn as (el: Element, ...args: any[]) => any;
    return fn(that.$el, ...args);
  };
  return all;
}, {} as TExportedMethods) as TExportedMethods;

export default methods;
