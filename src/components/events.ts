import Vue from "vue";
import * as Plotly from "plotly.js-dist-min";

type TEventName = Parameters<Plotly.PlotlyHTMLElement["on"]>[0];

/*
 List of events extracted with
 $ grep "'plotly_" node_modules/@types/plotly.js/index.d.ts |
   sed -r 's/(plotly_[a-z]+)/\n\1\n/g' |
   grep plotly_
*/

const eventNames: TEventName[] = [
  // "plotly_click",
  // "plotly_unhover",
  // "plotly_hover",
  // "plotly_selecting",
  // "plotly_selected",
  // "plotly_restyle",
  // "plotly_relayout",
  // "plotly_relayouting",
  // "plotly_clickannotation",
  // "plotly_animatingframe",
  // "plotly_legendclick",
  // "plotly_legenddoubleclick",
  // "plotly_sliderchange",
  // "plotly_sliderend",
  // "plotly_sliderstart",
  // "plotly_sunburstclick",
  // "plotly_event",
  // "plotly_beforeplot",
  "plotly_afterexport",
  "plotly_afterplot",
  "plotly_animated",
  "plotly_animationinterrupted",
  "plotly_autosize",
  "plotly_beforeexport",
  "plotly_deselect",
  "plotly_doubleclick",
  "plotly_framework",
  "plotly_redraw",
  "plotly_transitioning",
  "plotly_transitioninterrupted"
];

const events = eventNames.map(eventName => ({
  eventName,
  handler(context: Vue) {
    return (...args: any[]) => {
      context.$emit.apply(context, [eventName, ...args]);
    };
  }
}));

export default events;
