import "./jsdom-polyfill";
import { describe, beforeEach, expect, test } from "vitest";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { mount } from "@vue/test-utils";
import Plotly from "@/index";

//const wrapper = mount(Plotly);
const app = createSSRApp({
  data: () => ({ count: 1 }),
  components: { Plotly },
  template: `<plotly id="some-graph" />`
})

let html;

describe("Plotly.vue in a ssr context", () => {
  beforeEach(async () => {
    html = await renderToString(app);
  });

  test("can be rendered", () => {
    const expected = '<div id="some-graph"></div>';
    expect(html).toEqual(expected);
  });
});
