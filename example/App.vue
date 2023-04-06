<template>
  <div id="app">
    <a href="https://github.com/David-Desmaisons/vue-plotly" target="_blank">
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
      <div class="card">
        <div class="card-header">
          <div class="logo">
            <img alt="Vue.draggable logo" src="./assets/logo.png" />
            <p>
              <a
                class="title-link"
                href="https://github.com/David-Desmaisons/vue-plotly"
                target="_blank"
                ><span class="title">Vue.plotly</span></a
              >a thin vue wrapper for
              <a href="https://plot.ly/javascript/" target="_blank"
                >plotly.js</a
              >
            </p>
          </div>

          <div class="row justify-content-md-center">
            <div
              class="col-3 features"
              v-for="(data, idx) in features"
              :key="idx"
            >
              <div>
                <h4 class="big-icone"><i :class="`fa ${data.icon}`"></i></h4>
                <p class="card-text">{{ data.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card main-card">
        <graphpicker />
      </div>
    </div>

    <footer class="footer fixed-bottom bg-dark">
      <div class="container">
        <img
          src="https://plot.ly/gh-pages/documentation/static/images/browser_support.png"
        />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, computed } from 'vue'
import graphpicker from "./components/graphpicker.vue";

const features = [
  { text: "plotly.js methods and events", icon: "fa-bar-chart" },
  { text: "Data reactivity", icon: "fa-bolt" },
  { text: "Redraw on resizing", icon: "fa-arrows-alt" }
];
</script>

<style lang="less">
#app {
  @media (min-width: 1200px) {
    .container {
      max-width: 1400px;
    }
  }

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .logo {
    text-align: center;
    img {
      width: 80px;
    }
  }

  .card {
    .card-header {
      a {
        margin-right: 5px;
      }
    }
  }

  .footer {
    text-align: center;
    img {
      height: 40px;
    }
  }
}

.features {
  font-size: 18px;
  text-align: center;
}

.graph-label {
  text-align: center;
  width: 100%;
  height: 100%;
}

.label {
  background: rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.selector {
  background-color: lightblue;
}

#badges {
  text-align: center;
}

.main-card {
  padding: 0;
}

footer.footer {
  background: darkgray;
}

.big-icon {
  margin-bottom: 0;
}

.title {
  font-size: 30px;
  color: black;
}

a.title-link:hover {
  text-decoration: none;
}
</style>
