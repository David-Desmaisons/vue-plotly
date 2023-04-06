import { Ref } from 'vue';
import * as Plotly from "plotly.js-dist-min";

type TPlotly = typeof Plotly;

type ParamsExceptFirst<F> =
   F extends (arg0: any, ...rest: infer R) => any ? R : never;

// Problematic or not usefull for vue-plotly context:
const UnexportedMethods = ['register'];

// To update the plotly exported modules, uncoment this console.log, run yarn dev,
// copy the result in your console and past/replace the code below the DANGER line.
/*
console.log(
  Object.entries(Plotly)
  .filter(([, val]) => typeof val === "function")
  .map(([fnName, fn]) => {
    if (UnexportedMethods.includes(fnName)) return ''
    const newFnName = "plotly" + fnName[0].toUpperCase() + fnName.slice(1);
    // Why this conditional type to define args?
    // Well, Plotly.js module exports more methods than is know by the type definition.
    // So, when TPlotly do not describe some method, we provide a generic function definition,
    // then the bleeding edge user can use that exported methods anyway.
    return `
    ${newFnName}(...args: ParamsExceptFirst<
        TPlotly extends { ${fnName}: any }
        ? TPlotly["${fnName}"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).${fnName}(plotlyRoot.value, ...args);
    }`;
  })
  .join(',\n')
);
*/

export default (plotlyRoot: Ref<Plotly.PlotlyHTMLElement | undefined>)=> {
  if (!plotlyRoot.value || plotlyRoot.value.tagName) {
    throw Error('plotlyRoot is undefined.');
  }

  return {
    /* * * DANGER * * * Do not hand edit the code below! * * * DANGER * * */

    plotlyNewPlot(...args: ParamsExceptFirst<
        TPlotly extends { newPlot: any }
        ? TPlotly["newPlot"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).newPlot(plotlyRoot.value, ...args);
    },

    plotlyRestyle(...args: ParamsExceptFirst<
        TPlotly extends { restyle: any }
        ? TPlotly["restyle"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).restyle(plotlyRoot.value, ...args);
    },

    plotlyRelayout(...args: ParamsExceptFirst<
        TPlotly extends { relayout: any }
        ? TPlotly["relayout"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).relayout(plotlyRoot.value, ...args);
    },

    plotlyRedraw(...args: ParamsExceptFirst<
        TPlotly extends { redraw: any }
        ? TPlotly["redraw"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).redraw(plotlyRoot.value, ...args);
    },

    plotlyUpdate(...args: ParamsExceptFirst<
        TPlotly extends { update: any }
        ? TPlotly["update"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).update(plotlyRoot.value, ...args);
    },

    plotlyReact(...args: ParamsExceptFirst<
        TPlotly extends { react: any }
        ? TPlotly["react"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).react(plotlyRoot.value, ...args);
    },

    plotlyExtendTraces(...args: ParamsExceptFirst<
        TPlotly extends { extendTraces: any }
        ? TPlotly["extendTraces"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).extendTraces(plotlyRoot.value, ...args);
    },

    plotlyPrependTraces(...args: ParamsExceptFirst<
        TPlotly extends { prependTraces: any }
        ? TPlotly["prependTraces"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).prependTraces(plotlyRoot.value, ...args);
    },

    plotlyAddTraces(...args: ParamsExceptFirst<
        TPlotly extends { addTraces: any }
        ? TPlotly["addTraces"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).addTraces(plotlyRoot.value, ...args);
    },

    plotlyDeleteTraces(...args: ParamsExceptFirst<
        TPlotly extends { deleteTraces: any }
        ? TPlotly["deleteTraces"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).deleteTraces(plotlyRoot.value, ...args);
    },

    plotlyMoveTraces(...args: ParamsExceptFirst<
        TPlotly extends { moveTraces: any }
        ? TPlotly["moveTraces"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).moveTraces(plotlyRoot.value, ...args);
    },

    plotlyPurge(...args: ParamsExceptFirst<
        TPlotly extends { purge: any }
        ? TPlotly["purge"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).purge(plotlyRoot.value, ...args);
    },

    plotlyAddFrames(...args: ParamsExceptFirst<
        TPlotly extends { addFrames: any }
        ? TPlotly["addFrames"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).addFrames(plotlyRoot.value, ...args);
    },

    plotlyDeleteFrames(...args: ParamsExceptFirst<
        TPlotly extends { deleteFrames: any }
        ? TPlotly["deleteFrames"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).deleteFrames(plotlyRoot.value, ...args);
    },

    plotlyAnimate(...args: ParamsExceptFirst<
        TPlotly extends { animate: any }
        ? TPlotly["animate"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).animate(plotlyRoot.value, ...args);
    },

    plotlySetPlotConfig(...args: ParamsExceptFirst<
        TPlotly extends { setPlotConfig: any }
        ? TPlotly["setPlotConfig"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).setPlotConfig(plotlyRoot.value, ...args);
    },

    plotlyToImage(...args: ParamsExceptFirst<
        TPlotly extends { toImage: any }
        ? TPlotly["toImage"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).toImage(plotlyRoot.value, ...args);
    },

    plotlyValidate(...args: ParamsExceptFirst<
        TPlotly extends { validate: any }
        ? TPlotly["validate"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).validate(plotlyRoot.value, ...args);
    },

    plotlyDownloadImage(...args: ParamsExceptFirst<
        TPlotly extends { downloadImage: any }
        ? TPlotly["downloadImage"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).downloadImage(plotlyRoot.value, ...args);
    },

    plotlyMakeTemplate(...args: ParamsExceptFirst<
        TPlotly extends { makeTemplate: any }
        ? TPlotly["makeTemplate"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).makeTemplate(plotlyRoot.value, ...args);
    },

    plotlyValidateTemplate(...args: ParamsExceptFirst<
        TPlotly extends { validateTemplate: any }
        ? TPlotly["validateTemplate"]
        : (...args:any)=>any
      >) {
      return (Plotly as any).validateTemplate(plotlyRoot.value, ...args);
    }

    /* * * DANGER * * * Do not hand edit the code above! * * * DANGER * * */
  };
}
