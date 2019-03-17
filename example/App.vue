<template>
  <div id="app">
    <a
      href="https://github.com/David-Desmaisons/vue-plotly"
      target="_blank"
    >
      <img
        style="position: fixed; top: 0; right: 0; border: 0; z-index:99999"
        width="149"
        height="149"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149"
        class="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>

    <div class="container ">
      <div>
        <div class="logo">
          <img
            alt="Vue.draggable logo"
            src="./assets/logo.png"
          />
          <h1>vue.plotly</h1>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <a
            target="_blank"
            href="https://github.com/David-Desmaisons/vue-plotly/issues"
          ><img src="https://img.shields.io/github/issues/David-Desmaisons/vue-plotly.svg" /></a>
          <a
            target="_blank"
            href="https://circleci.com/gh/David-Desmaisons/vue-plotly"
          ><img src="https://circleci.com/gh/David-Desmaisons/vue-plotly.svg?style=shield" /></a>
          <a
            target="_blank"
            href="https://codecov.io/gh/David-Desmaisons/vue-plotly"
          ><img src="https://codecov.io/gh/David-Desmaisons/vue-plotly/branch/master/graph/badge.svg" /></a>
          <a
            target="_blank"
            href="https://www.npmjs.com/package/vue-plotly"
          ><img src="https://img.shields.io/npm/v/vue-plotly.svg" /></a>
          <a
            target="_blank"
            href="https://github.com/David-Desmaisons/vue-plotly/blob/master/LICENSE"
          ><img src="https://img.shields.io/github/license/David-Desmaisons/vue-plotly.svg" /></a>
        </div>
        <div
          class="card-body"
          id="features"
        >

          <p>Vue.plotly is a thin vue wrapper for <a
              href="https://plot.ly/javascript/"
              target="_blank"
            >plotly.js</a></p>
          <span>It provides all Plotly methods and events and</span>
          <ul>
            <li><i class="fa fa-bolt"></i>data reactivity</li>
            <li><i class="fa fa-arrows-alt"></i>redraw on resizing</li>
          </ul>
        </div>
      </div>

      <div class="card example">
        <div class="card-header">

          <div class="form-group row selector">
            <select
              v-model="selected"
              class="form-control col"
              id="select"
            >
              <option
                v-for="(example, idx) in generics"
                :key="idx"
                :value="example"
              >{{example.display}}</option>
            </select>
          </div>
        </div>

        <generic
          class="card-body"
          v-bind="selected.data"
        />
      </div>

      <div
        v-if="true"
        class="card example"
      >
        <div class="card-header">
          Pie with dynamic layout
        </div>
        <reactive-pie class="card-body" />
      </div>
    </div>
  </div>
</template>

<script>
import generic from "./components/generic.vue";
import reactivePie from "./components/reactive-pie.vue";
import simple from "./components/simple.js";
import contour from "./components/contour.js";
import histogram from "./components/histogram.js";

export default {
  name: "app",
  components: {
    reactivePie,
    generic
  },
  data() {
    return {
      generics: [simple, contour, histogram],
      selected: simple
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

  .logo {
    text-align: center;
    img {
      width: 100px;
    }
  }

  .example {
    margin-top: 50px;
  }

  .card {
    .card-header {
      a {
        margin-right: 5px;
      }
    }
  }
}

#features {
  font-size: 18px;
  ul {
    li {
      list-style-type: none;
      i {
        margin-right: 10px;
      }
    }
  }
}

#select {
  background-color:lightblue;
}
</style>
