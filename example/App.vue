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
  </div>
</template>

<script>
import Plotly from "@/components/Plotly.vue";

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

    return {
      order: ["simple", "contour"],
      graphs: {
        simple: {
          data: [trace1, trace2],
          attr: { responsive: true, displayModeBar: false },
          layout: {
            plot_bgcolor: "#d3d3d3",
            paper_bgcolor: "#d3d3d3"
          },
          code: `<plotly :responsive="true" :data="data" :display-mode-bar="true" class="item">
<plotly/>`
        },
        contour: {
          data: dataCountour,
          attr: { responsive: true },
          layout: {
            title: "Setting the X and Y Coordinates in a Contour Plot"
          },
          code: `<plotly :responsive="true" :data="data" class="item">
<plotly/>`
        }
      }
    };
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
