<template>
  <div :id="id" v-resize:debounce.100="onResize" />
</template>
<script lang="ts">
import Vue from 'vue'
import * as Plotly from "plotly.js";
import events from "./events";
import methods from "./methods";
import { camelize } from "@/utils/helper";

const directives = {} as { resize?: ()=>void };
if (typeof window !== "undefined") {
  directives.resize = require("vue-resize-directive");
}

type TScheduled = { replot: boolean };

type TVuePlotly = Vue & (typeof methods) & {
  data: Plotly.Data;
  layout: Partial<Plotly.Layout>;
  id?: string;
  scheduled: null | TScheduled;
  schedule(context: TScheduled): void;
  innerLayout: Partial<Plotly.Layout>;
  options: Record<string, any>;
  $el: Plotly.PlotlyHTMLElement;
};

export default {
  name: "plotly",
  inheritAttrs: false,
  directives,
  props: {
    data: {
      type: Array
    },
    layout: {
      type: Object
    },
    id: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    const that = this as unknown as TVuePlotly;
    return {
      scheduled: null,
      innerLayout: { ...that.layout }
    };
  },
  mounted() {
    const that = this as unknown as TVuePlotly;
    that.plotlyNewPlot(that.data, that.innerLayout, that.options);
    events.forEach(evt => {
      that.$el.on(evt.eventName, evt.handler(that));
    });
  },
  beforeDestroy() {
    const that = this as unknown as TVuePlotly;
    events.forEach(event =>
      that.$el.removeAllListeners(event.eventName)
    );
    that.plotlyPurge();
  },
  watch: {
    data: {
      handler() {
        const that = this as unknown as TVuePlotly;
        that.schedule({ replot: true });
      },
      deep: true
    },
    options: {
      handler(value: TScheduled, old: TScheduled) {
        const that = this as unknown as TVuePlotly;
        if (JSON.stringify(value) === JSON.stringify(old)) {
          return;
        }
        that.schedule({ replot: true });
      },
      deep: true
    },
    layout(layout: Partial<Plotly.Layout>) {
      const that = this as unknown as TVuePlotly;
      that.innerLayout = { ...layout };
      that.schedule({ replot: false });
    }
  },
  computed: {
    ...{} as TVuePlotly,
    options() {
      const optionsFromAttrs = Object.keys(this.$attrs).reduce((acc, key) => {
        acc[camelize(key)] = this.$attrs[key];
        return acc;
      }, {} as Record<string, any>) as Record<string, any>;
      return {
        responsive: false,
        ...optionsFromAttrs
      };
    }
  },
  methods: {
    ...{} as TVuePlotly,
    ...methods,
    onResize() {
      Plotly.Plots.resize(this.$el);
    },
    schedule(context: TScheduled) {
      const { scheduled } = this;
      if (scheduled) {
        scheduled.replot = scheduled.replot || context.replot;
        return;
      }
      this.scheduled = context;
      this.$nextTick(() => {
        // const {
        //   scheduled: { replot }
        // } = this;
        const replot = this.scheduled?.replot;
        this.scheduled = null;
        if (replot) {
          this.react();
          return;
        }
        this.plotlyRelayout(this.innerLayout);
      });
    },
    toImage(options: Plotly.ToImgopts) {
      const allOptions = Object.assign(this.getPrintOptions(), options);
      return this.plotlyToImage(allOptions);
    },
    downloadImage(options: Plotly.DownloadImgopts) {
      const filename = `plot--${new Date().toISOString()}`;
      const allOptions = Object.assign(this.getPrintOptions(), { filename }, options);
      return this.plotlyDownloadImage(allOptions);
    },
    getPrintOptions() {
      const { $el } = this;
      return {
        format: "png",
        width: $el.clientWidth,
        height: $el.clientHeight
      };
    },
    react() {
      this.plotlyReact(this.data, this.innerLayout, this.options);
    }
  }
};
</script>
