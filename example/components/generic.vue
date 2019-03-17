<template>
  <div>

    Markup:
    <highlight-code
      lang="javascript"
      :code="code"
    />

    Data:
    <highlight-code auto
      lang="javascript"
      :code="JSON.stringify(data)"
    />

    Layout:
    <highlight-code 
      lang="javascript"
      :code="JSON.stringify(layout)"
    />

    <plotly
      v-bind="attr"
      :data="data"
      :layout="layout"
    />
  </div>
</template>
<script>
const props = {
  data: {
    type: Array,
    required: true
  },
  layout: {
    type: Object,
    required: true
  },
  attr: {
    type: Object,
    required: true
  }
};

export default {
  name: "Generic",
  props,
  data() {
    return {
      code: `<plotly :data="data" :layout="layout" responsive display-mode-bar/>`
    };
  }
};
</script>
