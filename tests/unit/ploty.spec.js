import { shallowMount } from "@vue/test-utils";
import Ploty from "@/components/Ploty.vue";

let wrapper;
let layout;
let data;
const id ="id";

describe("Ploty.vue", () => {
  beforeEach(() => {
    layout={};
    data = [];
    wrapper = shallowMount(Ploty, {
      propsData:{
        layout,
        data,
        id
      },
      attrs:{
        "display-mode-bar": true
      },
      attachToDocument: true
    });
  })

  it("renders a div", () => {
    expect(wrapper.is("div")).toBe(true);
  });

  it("sets id", () => {
    expect(wrapper.is(`#${id}`)).toBe(true);
  });
});
