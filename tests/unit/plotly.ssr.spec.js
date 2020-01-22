/**
 * @jest-environment node
 */

const Vue = require("vue");
const renderer = require("vue-server-renderer").createRenderer();
const Plotly = require("@/components/Plotly").default;
Vue.component("plotly", Plotly);
const app = new Vue({
  name: "test-app",
  template: `<plotly></plotly>`
});
let html;

describe("Plotly.vue in a ssr context", () => {
  beforeEach(async () => {
    html = await renderer.renderToString(app);
  });

  it("can be rendered", () => {
    const expected = '<div data-server-rendered="true"></div>';
    expect(html).toEqual(expected);
  });
});
