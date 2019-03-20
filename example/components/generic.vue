<template>
  <div>

    <div class="row">
      <div class="col-3">
        <div class="col">
          Markup:
        </div>
      </div>

      <div class="col-9">
        <highlight-code
          lang="javascript"
          :code="code"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="col">
          Data:
          <editor
            class="data"
            v-model="data.data"
            :show-btns="false"
          />
        </div>

        <div class="col">
          Layout:
          <editor
            class="layout"
            v-model="data.layout"
            :show-btns="false"
          />
        </div>
      </div>

      <div class="col-9">
        <plotly
          v-bind="data.attr"
          :data="data.data"
          :layout="data.layout"
        />
      </div>
    </div>
  </div>

</template>
<script>
import editor from "vue-json-editor";

const props = {
  data: {
    type: Object,
    required: true
  }
};

export default {
  name: "Generic",
  components: {
    editor
  },
  props,
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
<style>
.layout .jsoneditor-vue {
  height: 200px;
}

.data .jsoneditor-vue {
  height: 200px;
}

.jsoneditor-vue div.jsoneditor-tree{
  min-height:  200px;
  margin-bottom: 10px;
}
</style>


