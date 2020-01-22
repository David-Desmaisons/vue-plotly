import { Plotly } from "@/index.js";
import PlotlyDirect from "@/components/Plotly.vue";

describe("index.js", () => {
  it("expose Plotly as a property", () => {
    expect(Plotly).toBe(PlotlyDirect);
  });
});
