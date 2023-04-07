<template>
  <div :id="id" ref="plotlyRoot" />
  <!-- <div :id="id" v-resize:debounce.100="onResize" /> -->
</template>
<script setup lang="ts">
import {
  ref, onMounted, onBeforeUnmount,
  getCurrentInstance, computed, ComputedRef,
  watch, nextTick, PropType
} from 'vue'
import * as Plotly from "plotly.js-dist-min";
import events from "./events";
import buildPlotlyMethods from "./methods";
import { camelize } from "@/utils/helper";

const instance = getCurrentInstance();
if (!instance) throw Error('Bad component initialization');

const plotlyRoot = ref<Plotly.PlotlyHTMLElement>({} as Plotly.PlotlyHTMLElement)

const plotlyMethods = buildPlotlyMethods(plotlyRoot)
const {
  plotlyNewPlot, plotlyPurge,
  plotlyReact, plotlyRelayout,
  plotlyToImage, plotlyDownloadImage
} = plotlyMethods

defineExpose({ ...plotlyMethods, plotlyRoot, toImage, downloadImage })
defineEmits(events.map(e => e.eventName))

// const directives = {} as { resize?: ()=>void };
// if (typeof window !== "undefined") {
//   directives.resize = require("vue-resize-directive");
// }

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

onMounted(function () {
  plotlyNewPlot(props.data || [], innerLayout.value, options.value);
  events.forEach(evt => {
    if (!plotlyRoot.value) return;
    plotlyRoot.value.on(evt.eventName, evt.handler(instance));
  });
});

onBeforeUnmount(()=> {
  events.forEach(event => {
    if (!plotlyRoot.value) return;
    plotlyRoot.value.removeAllListeners(event.eventName);
  });
  plotlyPurge();
});

const options = computed((): Partial<Plotly.Config> => {
  const optionsFromAttrs = Object.keys(instance.attrs).reduce((acc, key) => {
    acc[camelize(key)] = instance.attrs[key];
    return acc;
  }, {} as Record<string, any>) as Record<string, any>;
  return {
    responsive: false,
    ...optionsFromAttrs
  };
});

watch(()=> props.data,
  ()=> schedule({ replot: true }),
  { deep: true }
);

watch(()=> options,
  (value, old)=> {
    if (JSON.stringify(value.value) !== JSON.stringify(old.value)) {
      schedule({ replot: true });
    }
  },
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
  const filename = `plot--${new Date().toISOString()}`;
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
