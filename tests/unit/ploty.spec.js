import { shallowMount } from "@vue/test-utils";
import Ploty from "@/components/Ploty.vue";

describe("Ploty.vue", () => {
  it("renders a div", () => {
    const wrapper = shallowMount(Ploty, {
      attachToDocument: true
    });
    expect(wrapper.is("div")).toBe(true);
  });
});
