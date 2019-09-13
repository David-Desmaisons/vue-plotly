<template>
  <div>
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <div class="col">
            <form class="form-group">
              <select v-model="selected" class="form-control col" id="selector">
                <option
                  v-for="(example, idx) in generics"
                  :key="idx"
                  :value="example"
                  >{{ example.display }}</option
                >
              </select>
            </form>
          </div>

          <div class="col descriptor">
            <span>Layout:</span>
            <editor
              class="layout"
              v-model="selected.data.layout"
              :show-btns="false"
            />
          </div>

          <div class="col descriptor">
            <span>Data:</span>
            <editor
              class="data"
              v-model="selected.data.data"
              :show-btns="false"
            />
          </div>
        </div>

        <div class="col-9">
          <div class="row">
            <div class="col">
              <highlight-code lang="javascript" :code="code" />
            </div>
          </div>

          <plotly
            class="graph"
            v-bind="selected.data.attr"
            :data="selected.data.data"
            :layout="selected.data.layout"
          />
        </div>
      </div>
    </div>
  </div>
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
