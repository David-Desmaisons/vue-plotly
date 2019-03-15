<template>
  <div :id="id" />
</template>
<script>
import Plotly from "plotly.js";
import events from "./events.js";
import methods from "./methods.js";
import { camelize } from "@/utils/helper";

export default {
  name: "plotly",
  inheritAttrs: false,
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
    return {
      scheduled: null
    };
  },
  mounted() {
    Plotly.newPlot(this.$el, this.data, this.layout, this.getGraphOptions());
    events.forEach(evt => {
      this.$el.on(evt.completeName, evt.handler(this));
    });
  },
  watch: {
    data: {
      handler() {
        this.schedule({ reploat: true });
      },
      deep: true
    },
    $attrs: {
      handler() {
        this.schedule({ reploat: true });
      },
      deep: true
    },
    layout: {
      handler() {
        this.schedule({ relayout: true });
      },
      deep: true
    }
  },
  beforeDestroy() {
    events.forEach(event => this.$el.removeAllListeners(event.completeName));
    Plotly.purge(this.$el);
  },
  methods: {
    ...methods,
    schedule(context) {
      const { scheduled } = this;
      if (scheduled) {
        Object.assign(scheduled, context);
        return;
      }
      this.scheduled = context;
      this.$nextTick(() => {
        const {
          scheduled: { reploat, relayout }
        } = this;
        reploat && this.newPlot();
        relayout && this.relayout();
        this.scheduled = null;
      });
    },
    toImage(options) {
      const allOptions = Object.assign(this.getPrintOptions(), options);
      return Plotly.toImage(this.$el, allOptions);
    },
    downloadImage(options) {
      const filename = `plot--${new Date().toISOString()}`;
      const allOptions = Object.assign(
        this.getPrintOptions(),
        { filename },
        options
      );
      return Plotly.downloadImage(this.$el, allOptions);
    },
    getPrintOptions() {
      const { $el } = this;
      return {
        format: "png",
        width: $el.clientWidth,
        height: $el.clientHeight
      };
    },
    getGraphOptions() {
      return Object.keys(this.$attrs).reduce((acc, key) => {
        acc[camelize(key)] = this.$attrs[key];
        return acc;
      }, {});
    },
    plot() {
      return Plotly.plot(
        this.$el,
        this.data,
        this.layout,
        this.getGraphOptions()
      );
    },
    newPlot() {
      Plotly.react(this.$el, this.data, this.layout, this.getGraphOptions());
    }
  }
};
</script>
