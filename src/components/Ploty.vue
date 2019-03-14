<template>
  <div :id="id"/>
</template>
<script>
import Plotly from "plotly.js";
import events from "./events.js";
import methods from "./methods.js";

export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Object
    },
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
      internalLayout: this.layout
    };
  },
  mounted() {
    Plotly.newPlot(this.$el, this.data, this.internalLayout, this.options);
    events.forEach(evt => {
      this.$el.on(evt.completeName, evt.handler(this));
    });
  },
  watch: {
    data: {
      handler() {
        this.newPlot();
      },
      deep: true
    },
    options: {
      handler() {
        this.newPlot();
      },
      deep: true
    },
    layout() {
      this.relayout();
    }
  },
  beforeDestroy() {
    events.forEach(event => this.$el.removeAllListeners(event.completeName));
    Plotly.purge(this.$el);
  },
  methods: {
    ...methods,
    toImage(options) {
      const allOptions = Object.assign(this.getOptions(), options);
      return Plotly.toImage(this.$el, allOptions);
    },
    downloadImage(options) {
      const filename = `plot--${new Date().toISOString()}`;
      const allOptions = Object.assign(
        this.getOptions(),
        { filename },
        options
      );
      return Plotly.downloadImage(this.$el, allOptions);
    },
    getOptions() {
      const { $el } = this;
      return {
        format: "png",
        width: $el.clientWidth,
        height: $el.clientHeight
      };
    },
    plot() {
      return Plotly.plot(
        this.$el,
        this.data,
        this.internalLayout,
        this.options
      );
    },
    newPlot() {
      Plotly.react(this.$el, this.data, this.internalLayout, this.options);
    }
  }
};
</script>
