const trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: "scatter"
};

const trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: "scatter"
};

export default {
  display: "Scatter",
  data: {
    data: [trace1, trace2],
    attr: { displayModeBar: true },
    layout: {
      plot_bgcolor: "#d3d3d3",
      paper_bgcolor: "#d3d3d3"
    }
  }
};
