import { ComponentInternalInstance } from "vue";
import * as Plotly from "plotly.js-dist-min";

type TEventName = Parameters<Plotly.PlotlyHTMLElement["on"]>[0];

/*
 List of events extracted with
 $ sed -r 's/([;{}])/\1\n/g' node_modules/plotly.js-dist-min/plotly.min.js |
   egrep '"plotly_[^"]+"' |
   sed -r 's/.*"(plotly_[^"]+)".*$/  "\1",/' |
   sort | uniq
*/

export const eventNames = [
  "plotly_afterexport",
  "plotly_afterplot",
  "plotly_animated",
  "plotly_animating",
  "plotly_animatingframe",
  "plotly_animationinterrupted",
  "plotly_autosize",
  "plotly_beforeexport",
  "plotly_beforehover",
  "plotly_beforeplot",
  "plotly_buttonclicked",
  "plotly_click",
  "plotly_clickannotation",
  "plotly_deselect",
  "plotly_doubleclick",
  "plotly_framework",
  "plotly_hover",
  "plotly_legendclick",
  "plotly_legenddoubleclick",
  "plotly_react",
  "plotly_redraw",
  "plotly_relayout",
  "plotly_relayouting",
  "plotly_restyle",
  "plotly_selected",
  "plotly_selecting",
  "plotly_sliderchange",
  "plotly_sliderend",
  "plotly_sliderstart",
  "plotly_transitioned",
  "plotly_transitioning",
  "plotly_transitioninterrupted",
  "plotly_unhover",
  "plotly_update",
  "plotly_webglcontextlost"
] as TEventName[]; // We have more events then the @types know.

const events = eventNames.map(eventName => ({
  eventName,
  handler(context: ComponentInternalInstance) {
    return (...args: any[]) => {
      context.emit.apply(context, [eventName, ...args]);
    };
  }
}));

export default events;
