import { shallowMount } from "@vue/test-utils";
import Plotly from "@/components/Plotly.vue";
import plotlyjs from "plotly.js";

let wrapper;
let vm;
let layout;
let data;
let attrs;
const id = "id";

function shallowMountPlotty() {
  jest.clearAllMocks();
  return shallowMount(Plotly, {
    propsData: {
      layout,
      data,
      id
    },
    attrs,
    attachToDocument: true
  });
}

describe("Plotly.vue", () => {
  beforeEach(() => {
    layout = {};
    data = [];
    attrs = {
      "display-mode-bar": true
    }
    wrapper = shallowMountPlotty();
    vm = wrapper.vm;
  });

  it("renders a div", () => {
    expect(wrapper.is("div")).toBe(true);
  });

  it("sets id on div", () => {
    expect(wrapper.is(`#${id}`)).toBe(true);
  });

  it("sets id on div", () => {
    expect(wrapper.is(`#${id}`)).toBe(true);
  });

  it("calls plotly newPlot", () => {
    expect(plotlyjs.newPlot).toHaveBeenCalledWith(vm.$el, data, layout, {
      displayModeBar: true,
      responsive: false
    });
    expect(plotlyjs.newPlot.mock.calls.length).toBe(1);
  });

  it("overrides responsive attribute", () => {
    attrs = {
      responsive: true
    };
    wrapper = shallowMountPlotty();

    expect(plotlyjs.newPlot).toHaveBeenCalledWith(vm.$el, data, layout, {
      responsive: false
    });
    expect(plotlyjs.newPlot.mock.calls.length).toBe(1);
  });
});
