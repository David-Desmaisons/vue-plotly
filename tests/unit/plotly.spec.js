import { shallowMount } from "@vue/test-utils";
import Plotly from "@/components/Plotly.vue";
import plotlyjs from "plotly.js";

let wrapper;
let vm;
let layout;
let data;
const id = "id";

describe("Plotly.vue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    layout = {};
    data = [];
    wrapper = shallowMount(Plotly, {
      propsData: {
        layout,
        data,
        id
      },
      attrs: {
        "display-mode-bar": true
      },
      attachToDocument: true
    });
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
      displayModeBar: true
    });
    expect(plotlyjs.newPlot.mock.calls.length).toBe(1);
  });
});
