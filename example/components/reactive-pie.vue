<template>
  <div>
    <input
      v-model="title"
      type="text"
    />

    Markup:
    <highlight-code
      lang="javascript"
      :code="code"
    />

    Data:
    <highlight-code
      auto
      lang="javascript"
      :code="JSON.stringify(data)"
    />

    Layout:
    <highlight-code
      lang="javascript"
      :code="JSON.stringify(layout)"
    />

    <plotly
      :responsive=true
      :display-mode-bar=false
      :data="data"
      :layout="layout"
    />
  </div>
</template>
<script>
const pie = {
  values: [40, 10, 30],
  rotation: 90,
  textinfo: "none",
  marker: {
    colors: ["orange", "yellow", "BLUE"]
  },
  labels: ["remaing", "done", "doing"],
  hoverinfo: "label+value+percent",
  hole: 0.5,
  type: "pie",
  showlegend: false
};
export default {
  name: "Generic",
  data() {
    return {
      code: `<plotly :responsive="true" :data="data" :display-mode-bar="true" class="item"/>`,
      data: [pie],
      title: "pie"
    };
  },
  computed: {
    layout() {
      return {
        font: {
          color: "white"
        },
        title: {
          text: this.title
        },
        plot_bgcolor: "black",
        paper_bgcolor: "black"
      };
    }
  }
};
</script>
