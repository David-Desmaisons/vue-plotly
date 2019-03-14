<template>
  <div id="app">
    <ploty
      :responsive="true"
      :data="data"
      class="ploty"
    />
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
      data: [trace1, trace2]
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .ploty {
    width: 50%;
  }
}
</style>
