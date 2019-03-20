<template>
  <div>
    Markup:
    <highlight-code
      lang="javascript"
      :code="code"
    />

    <div class="row">

      <div class="col-2">
        Data:
        <json-editor v-model="data.data" />
      </div>

      <div class="col-2">
        Layout:
        <highlight-code
          lang="javascript"
          :code="JSON.stringify(data.layout)"
        />
      </div>

      <div class="col-8">
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
import jsonEditor from "vue-jsoneditor";

const props = {
  data: {
    type: Object,
    required: true
  }
};

export default {
  name: "Generic",
  components: {
    jsonEditor
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
<style src="jsoneditor/dist/jsoneditor.css">
</style>

