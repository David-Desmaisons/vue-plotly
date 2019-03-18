import { shallowMount } from "@vue/test-utils";
import Plotly from "@/components/Plotly.vue";
import plotlyjs from "plotly.js";

let wrapper;
let vm;
let layout;
let data;
let attrs;
const id = "id";

const events = [
  "AfterExport",
  "AfterPlot",
  "Animated",
  "AnimatingFrame",
  "AnimationInterrupted",
  "AutoSize",
  "BeforeExport",
  "ButtonClicked",
  "Click",
  "ClickAnnotation",
  "Deselect",
  "DoubleClick",
  "Framework",
  "Hover",
  "LegendClick",
  "LegendDoubleClick",
  "Relayout",
  "Restyle",
  "Redraw",
  "Selected",
  "Selecting",
  "SliderChange",
  "SliderEnd",
  "SliderStart",
  "Transitioning",
  "TransitionInterrupted",
  "Unhover"
];

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
    };
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

  test.each(events)(
    "listens to plotly event %s and transform it in a vue event",
    (evt) => {
      const evtName = evt.toLowerCase();
      const { on: { mock: { calls } } } = vm.$el;
      const call = calls.find(c => c[0] === `plotly_${evtName}`);

      expect(call).not.toBeUndefined();
      expect(call.length).toBe(2);

      const callBack = call[1];
      const parameter = { value: 25 };
      callBack(parameter);

      expect(wrapper.emitted()).toEqual({
        "hook:mounted": [[]],
        [evtName]: [[parameter]]
      });
    }
  )

  it(`register all the ${events.length} plotly events`, () => {
    const { on: { mock: { calls } } } = vm.$el;
    expect(calls.length).toBe(events.length);
  })

  describe("when destroyed", () => {
    beforeEach(() => {
      wrapper.destroy();
    });

    it("calls plotly purge", () => {
      expect(plotlyjs.purge).toHaveBeenCalledWith(vm.$el);
    });

    test.each(events)("unlisten to plotly event %s", (evtName) => {
      const { removeAllListeners } = vm.$el;
      expect(removeAllListeners).toHaveBeenCalledWith(`plotly_${evtName.toLowerCase()}`);
    });

    it(`unlisten to all the ${events.length} plotly events`, () => {
      const { removeAllListeners: { mock: { calls } } } = vm.$el;
      expect(calls.length).toBe(events.length);
    })
  });
});
