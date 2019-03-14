import { shallowMount } from "@vue/test-utils";
import Plotlyjs from "plotly.js";
jest.genMockFromModule('plotly.js');
import Ploty from "@/components/Ploty.vue";
const { error } = console;


describe("Ploty.vue", () => {
  beforeEach(() => {
    console.error = () => { };
  })
  afterEach(() => {
    console.error = error;
  })
  it("renders a div", () => {
    const wrapper = shallowMount(Ploty);
    expect(wrapper.is('div')).toBe(true);
  });
});
