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
      <div class="card">
        <div class="card-header">

          <div class="logo">
            <img
              alt="Vue.draggable logo"
              src="./assets/logo.png"
            />
            <p><a
                class="title-link"
                href="https://github.com/David-Desmaisons/vue-plotly"
                target="_blank"
              ><span class="title">Vue.plotly</span></a>a thin vue wrapper for
              <a
                href="https://plot.ly/javascript/"
                target="_blank"
              >plotly.js</a>
            </p>
          </div>

          <div class="row justify-content-md-center">
            <div
              class="col-3 features"
              v-for="(data,idx) in features"
              :key="idx"
            >
              <div>
                <h4 class="big-icone"><i :class="`fa ${data.icon}`"></i></h4>
                <p class="card-text">{{data.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card main-card">
        <form>
          <div class="row">

            <div class="col-12">
              <select
                v-model="selected"
                class="form-control col"
                id="selector"
              >
                <option
                  v-for="(example, idx) in generics"
                  :key="idx"
                  :value="example"
                >{{example.display}}</option>
              </select>
            </div>
          </div>
        </form>

        <generic
          class="card-body"
          :data="selected.data"
        />
      </div>
    </div>

    <footer class="footer fixed-bottom bg-dark">
      <div class="container">
        <img src="https://plot.ly/gh-pages/documentation/static//images/browser_support.png"/>
      </div>
    </footer>

  </div>
</template>

<script>
import generic from "./components/generic.vue";
import simple from "./components/simple.js";
import contour from "./components/contour.js";
import histogram from "./components/histogram.js";
import pie from "./components/pie.js";

export default {
  name: "app",
  components: {
    generic
  },
  data() {
    return {
      features: [
        { text: "plotly.js methods and events", icon: "fa-bar-chart" },
        { text: "Data reactivity", icon: "fa-bolt" },
        { text: "Redraw on resizing", icon: "fa-arrows-alt" }
      ],
      generics: [simple, contour, histogram, pie],
      selected: simple
    };
  }
};
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
      height: 30px;
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
