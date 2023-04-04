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

          <label class="col descriptor json-editor layout">
            <span>Layout:</span>
            <textarea
              ref="jsonLayout"
              :class="'json-'+jsonStatus.layout"
              @keyup="updateLayoutJson"
            />
          </label>

          <label class="col descriptor json-editor data">
            <span>Data:</span>
            <textarea
              ref="jsonData"
              :class="'json-'+jsonStatus.data"
              @keyup="updateDataJson"
            />
          </label>
        </div>

        <div class="col-9">
          <div class="row">
            <div class="col">
              <highlightjs language="xml" :code="code" />
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
import simple from "./simple.js";
import contour from "./contour.js";
import histogram from "./histogram.js";
import histogram2D from "./2D-histogram.js";
import pie from "./pie.js";
import xmlHighlight from "highlight.js/lib/languages/xml";
import hljs from "highlight.js/lib/core";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/stackoverflow-light.css";

hljs.registerLanguage("xml", xmlHighlight);

export default {
  name: "picker",
  components: {
    highlightjs: hljsVuePlugin.component
  },
  data() {
    return {
      generics: [simple, contour, histogram, pie, histogram2D],
      selected: simple,
      jsonStatus: { layout: 'ok', data: 'ok' }
    };
  },
  mounted() {
    this.updateJsonEditors()
  },
  watch: {
    selected() {
      this.updateJsonEditors()
    }
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
  },
  methods: {
    updateJsonEditors() {
      this.$refs.jsonLayout.value = JSON.stringify(this.selected.data.layout, 0, '  ')
      this.$refs.jsonData.value = JSON.stringify(this.selected.data.data, 0, '  ')
    },
    updateJson(key, input) {
      try {
        this.selected.data[key] = JSON.parse(input.value)
        this.jsonStatus[key] = 'ok'
      } catch(err) {
        this.jsonStatus[key] = 'fail'
      }
    },
    updateLayoutJson(ev) {
      setTimeout(()=> this.updateJson('layout', ev.target), 1)
    },
    updateDataJson(ev) {
      setTimeout(()=> this.updateJson('data', ev.target), 1)
    }
  }
};
</script>
<style>
.json-editor {
  display: block;
}
.json-editor textarea {
  width: 100%;
  white-space: pre;
  font-family: monospace;
  border: none;
  border-radius: .5em;
  padding: .2em .5em;
}

.json-editor.layout textarea {
  height: 110px;
}
.json-editor.data textarea {
  height: 320px;
}

.json-editor textarea.json-ok {
  background: #A0D0A0;
}
.json-editor textarea.json-fail {
  background: #E0B0B0;
}

.mark-up {
  margin-top: 8px;
}

.graph {
  height: 500px;
}

.descriptor > span {
  margin-left: 5px;
  margin-top: 5px;
}
</style>
