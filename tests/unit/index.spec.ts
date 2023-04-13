import "./jsdom-polyfill";
import { describe, expect, test } from "vitest";
import Plotly, { eventNames } from "@/index";
import PlotlyDirect from "@/components/Plotly.vue";

describe("index.js", () => {
  test("expose Plotly as default", () => {
    expect(Plotly).toBe(PlotlyDirect);
  });

  test("expose eventNames as a property", () => {
    expect(eventNames).to.include("plotly_click");
    expect(eventNames).toHaveLength(35);
  });
});
