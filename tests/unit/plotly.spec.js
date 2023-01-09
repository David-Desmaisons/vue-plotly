import { shallowMount } from "@vue/test-utils";
import Plotly from "@/components/Plotly.vue";
import plotlyjs from "plotly.js-dist";
import resize from "vue-resize-directive";
jest.mock("vue-resize-directive");

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

const methods = ["restyle", "relayout", "update", "addTraces", "deleteTraces", "moveTraces", "extendTraces", "prependTraces", "purge"];

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

  it("defines props", () => {
    const props = {
      data: {
        type: Array
      },
      layout: {
        type: Object
      },
      id: {
        type: String,
        required: false,
        default: null
      }
    };
    expect(Plotly.props).toEqual(props);
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

  it("allows responsive to be overridden attribute", () => {
    attrs = {
      responsive: true
    };
    wrapper = shallowMountPlotty();

    expect(plotlyjs.newPlot).toHaveBeenCalledWith(vm.$el, data, layout, {
      responsive: true
    });
    expect(plotlyjs.newPlot.mock.calls.length).toBe(1);
  });

  it("calls resize directive", () => {
    const {
      mock: { calls }
    } = resize.inserted;
    expect(calls.length).toBe(1);
    const [call] = calls;
    expect(call[0]).toBe(vm.$el);
    expect(call[1]).toMatchObject({
      arg: "debounce",
      name: "resize",
      rawName: "v-resize:debounce.100",
      expression: "onResize"
    });
  });

  it("call plotly resize when resized", () => {
    const {
      mock: {
        calls: [call]
      }
    } = resize.inserted;
    const { value: callBackResize } = call[1];
    callBackResize();

    expect(plotlyjs.Plots.resize).toHaveBeenCalledWith(vm.$el);
  });

  test.each(events)("listens to plotly event %s and transform it in a vue event", evt => {
    const evtName = evt.toLowerCase();
    const {
      on: {
        mock: { calls }
      }
    } = vm.$el;
    const call = calls.find(c => c[0] === `plotly_${evtName}`);

    expect(call).not.toBeUndefined();
    expect(call.length).toBe(2);

    const callBack = call[1];
    const parameter = { value: 25 };
    callBack(parameter);

    expect(wrapper.emitted()).toEqual({
      [evtName]: [[parameter]]
    });
  });

  it(`register all the ${events.length} plotly events`, () => {
    const {
      on: {
        mock: { calls }
      }
    } = vm.$el;
    expect(calls.length).toBe(events.length);
  });

  test.each(methods)("defines plotly method %s", methodName => {
    expect(methodName in vm).toBe(true);
    const parameters = [1, 2, 3];
    vm[methodName](...parameters);

    expect(plotlyjs[methodName]).toHaveBeenCalledWith(vm.$el, 1, 2, 3);
  });

  describe.each([
    ["data", wrapper => wrapper.setProps({ data: [{ data: "novo" }] })],
    ["attr", wrapper => (wrapper.vm.$attrs = { displayModeBar: "hover" })]
  ])("when %p changes", (_, changeData) => {
    describe.each([
      ["once", changeData],
      [
        "twice",
        wrapper => {
          changeData(wrapper);
          changeData(wrapper);
        }
      ]
    ])("%s in the same tick", (_, update) => {
      const { error } = console;

      beforeEach(() => {
        console.error = () => {};
        jest.clearAllMocks();
        update(wrapper);
      });
      afterEach(() => {
        console.error = error;
      });

      it("calls plotly react once in the next tick", async () => {
        await vm.$nextTick();
        expect(plotlyjs.react).toHaveBeenCalledWith(vm.$el, vm.data, vm.layout, vm.options);
        expect(plotlyjs.react.mock.calls.length).toBe(1);
      });

      it("does not calls plotly relayout", async () => {
        await vm.$nextTick();
        expect(plotlyjs.relayout).not.toHaveBeenCalled();
      });
    });
  });

  describe("when attrs and props changes in the same tick", () => {
    const { error } = console;

    beforeEach(() => {
      console.error = () => {};
      jest.clearAllMocks();
      wrapper.setProps({ data: [{ data: "novo" }] });
      wrapper.vm.$attrs = { displayModeBar: "hover" };
    });
    afterEach(() => {
      console.error = error;
    });

    it("calls plotly react once in the next tick", async () => {
      await vm.$nextTick();
      expect(plotlyjs.react).toHaveBeenCalledWith(vm.$el, vm.data, vm.layout, vm.options);
      expect(plotlyjs.react.mock.calls.length).toBe(1);
    });

    it("does not calls plotly relayout", async () => {
      await vm.$nextTick();
      expect(plotlyjs.relayout).not.toHaveBeenCalled();
    });
  });

  describe("when attrs changes to same value", () => {
    const { error } = console;

    beforeEach(() => {
      console.error = () => {};
      jest.clearAllMocks();
      const attrs = Object.assign({}, vm.$attrs);
      vm.$attrs = attrs;
    });
    afterEach(() => {
      console.error = error;
    });

    it("does not calls plotly react", async () => {
      await vm.$nextTick();
      expect(plotlyjs.react).not.toHaveBeenCalled();
    });

    it("does not calls plotly relayout", async () => {
      await vm.$nextTick();
      expect(plotlyjs.relayout).not.toHaveBeenCalled();
    });
  });

  describe("when layout changes", () => {
    const updateLayout = () => wrapper.setProps({ layout: { novo: "layout" } });
    describe.each([
      ["once", updateLayout],
      [
        "twice",
        () => {
          updateLayout();
          updateLayout();
        }
      ]
    ])("%s in the same tick", (_, update) => {
      beforeEach(() => {
        jest.clearAllMocks();
        update(wrapper);
      });

      it("calls plotly relayout once", async () => {
        await vm.$nextTick();
        expect(plotlyjs.relayout).toHaveBeenCalledWith(vm.$el, {
          novo: "layout"
        });
        expect(plotlyjs.relayout.mock.calls.length).toBe(1);
      });

      it("does not calls plotly react", async () => {
        await vm.$nextTick();
        expect(plotlyjs.react).not.toHaveBeenCalled();
      });
    });
  });

  const changeData = () => wrapper.setProps({ data: { novo: "data" } });
  const changeLayout = () => wrapper.setProps({ layout: { novo: "layout" } });

  describe.each([
    [
      () => {
        changeData();
        changeLayout();
      }
    ],
    [
      () => {
        changeLayout();
        changeData();
      }
    ]
  ])("when layout changes and data changes", changes => {
    beforeEach(() => {
      jest.clearAllMocks();
      changes();
    });

    it("calls plotly react once", async () => {
      await vm.$nextTick();
      expect(plotlyjs.react).toHaveBeenCalledWith(
        vm.$el,
        { novo: "data" },
        { novo: "layout" },
        {
          displayModeBar: true,
          responsive: false
        }
      );
      expect(plotlyjs.react.mock.calls.length).toBe(1);
    });

    it("does not calls plotly relayout", async () => {
      await vm.$nextTick();
      expect(plotlyjs.relayout).not.toHaveBeenCalled();
    });
  });

  describe("when calling toImage", () => {
    beforeEach(() => {
      vm.toImage({ option: 1 });
    });

    it("calls Plotly toImage", () => {
      const { clientWidth: width, clientHeight: height } = vm.$el;
      expect(plotlyjs.toImage).toHaveBeenCalledWith(vm.$el, {
        width,
        height,
        option: 1,
        format: "png"
      });
    });
  });

  describe("when calling downloadImage", () => {
    beforeEach(() => {
      vm.downloadImage({ option: 1 });
    });

    it("calls Plotly toImage", () => {
      const { clientWidth: width, clientHeight: height } = vm.$el;
      const { downloadImage } = plotlyjs;
      expect(downloadImage).toHaveBeenCalled();
      const {
        mock: {
          calls: [call]
        }
      } = downloadImage;

      expect(call.length).toBe(2);
      expect(call[0]).toBe(vm.$el);
      expect(call[1]).toMatchObject({
        width,
        height,
        option: 1,
        format: "png"
      });
      expect(call[1].filename).not.toBeUndefined();
    });
  });

  describe("when destroyed", () => {
    beforeEach(() => {
      wrapper.destroy();
    });

    it("calls plotly purge", () => {
      expect(plotlyjs.purge).toHaveBeenCalledWith(vm.$el);
    });

    test.each(events)("unlistens to plotly event %s", evtName => {
      const { removeAllListeners } = vm.$el;
      expect(removeAllListeners).toHaveBeenCalledWith(`plotly_${evtName.toLowerCase()}`);
    });

    it(`unlistens to all the ${events.length} plotly events`, () => {
      const {
        removeAllListeners: {
          mock: { calls }
        }
      } = vm.$el;
      expect(calls.length).toBe(events.length);
    });
  });
});
