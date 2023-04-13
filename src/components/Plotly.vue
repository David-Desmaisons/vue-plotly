<template>
  <div :id="id" ref="plotlyRoot" />
</template>
<script setup lang="ts">
import {
  ref, onMounted, onBeforeUnmount, onUpdated,
  getCurrentInstance, computed, ComputedRef,
  watch, nextTick, PropType, useAttrs
} from 'vue'
import * as Plotly from "plotly.js-dist-min";
import events from "./events";
import buildPlotlyMethods from "./methods";
import { camelize, deepEqual } from "@/utils/helper";
import { useResizeObserver } from "@vueuse/core";

const instance = getCurrentInstance();
if (!instance) throw Error('Bad component initialization');

const plotlyRoot = ref<Plotly.PlotlyHTMLElement>({} as Plotly.PlotlyHTMLElement)

const plotlyMethods = buildPlotlyMethods(plotlyRoot)

// Local use and prevent tree-shaking.
// egrep ' plotly[A-Za-z]+\(' src/components/methods.ts | cut -d'(' -f1 | sort
const {
  plotlyAddFrames,
  plotlyAddTraces,
  plotlyAnimate,
  plotlyDeleteFrames,
  plotlyDeleteTraces,
  plotlyDownloadImage,
  plotlyExtendTraces,
  plotlyMakeTemplate,
  plotlyMoveTraces,
  plotlyNewPlot,
  plotlyPrependTraces,
  plotlyPurge,
  plotlyReact,
  plotlyRedraw,
  plotlyRelayout,
  plotlyRestyle,
  plotlySetPlotConfig,
  plotlyToImage,
  plotlyUpdate,
  plotlyValidate,
  plotlyValidateTemplate
} = plotlyMethods

defineExpose({ ...plotlyMethods, plotlyRoot, toImage, downloadImage })
defineEmits(events.map(e => e.eventName))

type TScheduled = { replot: boolean };
const scheduled = ref<null | TScheduled>(null);

const props = defineProps({
  data: Array as PropType<Plotly.Data[]>,
  layout: Object as PropType<Partial<Plotly.Layout>>,
  id: {
    type: String,
    required: false,
    default: null
  }
});

const innerLayout = ref<Partial<Plotly.Layout>>({ ...props.layout })

const throttleDelay = 100;
let lastResize = 0; // Timestamp

const onResize = ()=> {
  const next = lastResize + throttleDelay - Date.now();
  if (next <= 0) doResize();
  else setTimeout(doResize, next);
};

const doResize = ()=> {
  lastResize = Date.now();
  Plotly.Plots.resize(plotlyRoot.value);
}

// Hey, attrs are not reactve. Sorry.
const getOptions = ()=> {
  const attrs = useAttrs();
  const optionsFromAttrs = Object.keys(attrs).reduce((acc, key) => {
    acc[camelize(key)] = attrs[key];
    return acc;
  }, {} as Record<string, any>) as Record<string, any>;
  return {
    responsive: false,
    ...optionsFromAttrs
  } as Partial<Plotly.Config>;
};

const options = ref<Partial<Plotly.Config>>(getOptions());

onMounted(()=> {
  plotlyNewPlot(props.data || [], innerLayout.value, options.value);
  events.forEach(evt => {
    if (!plotlyRoot.value) return;
    plotlyRoot.value.on(evt.eventName, evt.handler(instance));
  });
  useResizeObserver(plotlyRoot, onResize);
});

onBeforeUnmount(()=> {
  events.forEach(event => {
    if (!plotlyRoot.value) return;
    plotlyRoot.value.removeAllListeners(event.eventName);
  });
  plotlyPurge();
});

// watch for attrs or a computed based on that wont work.
// "the attrs object here always reflects the latest fallthrough attributes,
// it isn't reactive [...] you can use onUpdated()."
// https://vuejs.org/guide/components/attrs.html#accessing-fallthrough-attributes-in-javascript
onUpdated(()=> {
  const updatedOpts = getOptions();
  if (!deepEqual(options.value, updatedOpts)) {
    options.value = updatedOpts;
    schedule({ replot: true });
  }
});

watch(()=> props.data,
  ()=> schedule({ replot: true }),
  { deep: true }
);

watch(()=> props.layout,
  ()=> {
    innerLayout.value = { ...props.layout };
    schedule({ replot: false });
  }
);

function schedule(context: TScheduled) {
  if (scheduled.value) {
    scheduled.value.replot = scheduled.value.replot || context.replot;
    return;
  }
  scheduled.value = context;
  nextTick(() => {
    const replot = scheduled.value?.replot;
    scheduled.value = null;
    if (replot) {
      react();
      return;
    }
    plotlyRelayout(innerLayout.value);
  });
}

function toImage(options: Plotly.ToImgopts) {
  const allOptions = Object.assign(getPrintOptions(), options);
  return plotlyToImage(allOptions);
}

function downloadImage(options: Plotly.DownloadImgopts) {
  const filename = `plot--${new Date().toISOString().replace(/\.[0-9]+/, '')}`;
  const allOptions = Object.assign(getPrintOptions(), { filename }, options);
  return plotlyDownloadImage(allOptions);
}

function getPrintOptions() {
  return {
    format: "png",
    width: plotlyRoot.value.clientWidth,
    height: plotlyRoot.value.clientHeight
  };
}

function react() {
  plotlyReact(props.data || [], innerLayout.value, options.value);
}
</script>
