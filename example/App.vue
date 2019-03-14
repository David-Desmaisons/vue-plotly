<template>
  <div id="app">
    <div class="item">
      <highlight-code lang="javascript" :code="code.simple"/>
    </div>
    <ploty :responsive="true" :data="data" class="item"/>
  </div>
</template>

<script>
import Ploty from "@/components/Ploty.vue";

export default {
  name: "app",
  components: {
    Ploty
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

    return {
      data: [trace1, trace2],
      code: {
        simple: `<ploty :responsive="true" :data="data" class="item">
<ploty/>`
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
