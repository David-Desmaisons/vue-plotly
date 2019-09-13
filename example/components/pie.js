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
  display: "Pie graph",
  data: {
    data: [pie],
    attr: {
      displayModeBar: false
    },
    layout: {
      font: {
        color: "white"
      },
      title: {
        text: "pie"
      },
      plot_bgcolor: "black",
      paper_bgcolor: "black"
    }
  }
};
