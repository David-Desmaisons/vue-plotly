import { Plotly } from "@/src/index.js";
import PlotlyDirect from "@/src/components/Plotly.vue";

describe("index.js", () => {
  it("expose Plotly as a property", () => {
    expect(Plotly).toBe(PlotlyDirect);
  });
});
