<template>
  <v-card>
    <v-row>
      <v-col cols="3">
        <v-card elevation="0" class="mx-5">
          <v-select v-model="selected" item-text="display" label="Display" :items="generics">
          </v-select>
        </v-card>
        <v-card elevation="0" class="mx-5">
          <v-card-tile>Layout</v-card-tile>
          <editor class="layout" v-model="selected.data.layout" :show-btns="false" />
        </v-card>
        <v-card elevation="0" class="mx-5">
          <v-card-tile>Data</v-card-tile>
          <editor class="data" v-model="selected.data.data" :show-btns="false" />
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col>
            <highlight-code lang="javascript" :code="code" />
          </v-col>
        </v-row>
        <!-- wrapper -->
        <plotly
          class="graph"
          v-bind="selected.data.attr"
          :data="selected.data.data"
          :layout="selected.data.layout"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import editor from "vue-json-editor";
import simple from "./simple.js";
import contour from "./contour.js";
import histogram from "./histogram.js";
import histogram2D from "./2D-histogram.js";
import pie from "./pie.js";

export default {
  name: "picker",
  components: {
    editor
  },
  data() {
    return {
      generics: [simple, contour, histogram, pie, histogram2D],
      selected: simple
    };
  },
  computed: {
    code() {
      const {
        selected: {
          data: { attr }
        }
      } = this;
      const fromAttr = Object.keys(attr)
        .map(key => `:${key}="${attr[key]}"`)
        .join(" ");
      return `<plotly :data="data" :layout="layout" ${fromAttr}/>`;
    }
  }
};
</script>
<style>
.layout .jsoneditor-vue {
  height: 150px;
}

.data .jsoneditor-vue {
  height: 300px;
}

.jsoneditor-vue div.jsoneditor-tree {
  min-height: 100px;
}

.mark-up {
  margin-top: 8px;
}

.graph {
  height: 500px;
}

div.jsoneditor-menu {
  background-color: #007bff;
  border-bottom: 1px solid #007bff;
}

.descriptor > span {
  margin-left: 5px;
  margin-top: 5px;
}
</style>
