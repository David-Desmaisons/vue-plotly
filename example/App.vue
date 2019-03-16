<template>
  <div id="app">
    <div
      v-for="key in order"
      :key="key"
    >
      <div class="item">
        <highlight-code
          lang="javascript"
          :code="graphs[key].code"
        />
      </div>
      <plotly
        v-bind="graphs[key].attr"
        :data="graphs[key].data"
        :layout="graphs[key].layout"
        class="item"
      />
    </div>

    <input
      v-model="title"
      type="text"
    />

    <div class="item">
        <plotly
          v-bind="graphs.pie.attr"
          :data="graphs.pie.data"
          :layout="pieLayout"
        />
    </div>

  </div>
</template>

<script>
import { Plotly } from "@/index.js";

export default {
  name: "app",
  components: {
    Plotly
  },
  data() {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter"
    };

    var trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: "scatter"
    };

    var dataCountour = [
      {
        z: [
          [10, 10.625, 12.5, 15.625, 20],
          [5.625, 6.25, 8.125, 11.25, 15.625],
          [2.5, 3.125, 5, 8.125, 12.5],
          [0.625, 1.25, 3.125, 6.25, 10.625],
          [0, 0.625, 2.5, 5.625, 10]
        ],
        x: [-9, -6, -5, -3, -1],
        y: [0, 1, 4, 5, 7],
        type: "contour"
      }
    ];

    var x = [];
    for (var i = 0; i < 500; i++) {
      x[i] = Math.random();
    }
    var trace = {
      x: x,
      type: "histogram"
    };

    var pie = [
      {
        name: "40%",
        values: [40, 10, 30],
        rotation: 90,
        textinfo: "none",
        marker: {
          colors: ["orange", "yellow", "BLUE"]
        },
        labels: ["remaing", "done", "doing"],
        hoverinfo: "label+value+percent",
        hole: 0.5,
        type: "pie",
        showlegend: false
      }
    ];

    return {
      title: "Gauge",
      order: ["simple", "contour", "histogram"],
      graphs: {
        simple: {
          data: [trace1, trace2],
          attr: { responsive: true, displayModeBar: true },
          layout: {
            plot_bgcolor: "#d3d3d3",
            paper_bgcolor: "#d3d3d3"
          },
          code: `<plotly :responsive="true" :data="data" :display-mode-bar="true" class="item"/>`
        },
        contour: {
          data: dataCountour,
          attr: { responsive: true },
          layout: {
            title: "Setting the X and Y Coordinates in a Contour Plot"
          },
          code: `<plotly :responsive="true" :data="data" class="item"/>`
        },
        histogram: {
          data: [trace],
          attr: { responsive: true },
          code: ""
        },
        pie: {
          data: pie,
          attr: { responsive: true, displayModeBar: false },
          code: `<plotly :responsive="true" :data="data" :display-mode-bar="false" class="item">
<plotly/>`
        }
      }
    };
  },
  computed: {
    pieLayout() {
      return {
        font: {
          color: "white"
        },
        title: {
          text: this.title
        },
        plot_bgcolor: "black",
        paper_bgcolor: "black"
      };
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  .item {
    width: 50%;
  }
}
</style>
