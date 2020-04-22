<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center headline font-weight-bold">Vue-Plotly</div>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">See on GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <graphpicker />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import graphpicker from "./components/graphpicker.vue";

export default {
  name: "app",
  components: {
    graphpicker
  },
  data() {
    return {
      features: [
        { text: "plotly.js methods and events", icon: "fa-bar-chart" },
        { text: "Data reactivity", icon: "fa-bolt" },
        { text: "Redraw on resizing", icon: "fa-arrows-alt" }
      ]
    };
  },
  computed: {
    code() {
      const fromAttr = Object.keys(this.data.attr)
        .map(key => `:${key}="${this.data.attr[key]}"`)
        .join(" ");
      return `<plotly :data="data" :layout="layout" ${fromAttr}/>`;
    }
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
