const x = [];
for (var i = 0; i < 500; i++) {
  x[i] = Math.random();
}
const trace = {
  x: x,
  type: "histogram"
};

export default {
  display: "Histogram",
  data: {
    data: [trace],
    attr: { responsive: true },
    layout:{}
  }
};