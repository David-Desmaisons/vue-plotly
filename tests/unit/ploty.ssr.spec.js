/**
 * @jest-environment node
 */

const Vue = require("vue");
const renderer = require("vue-server-renderer").createRenderer();
const Ploty = require("@/components/Ploty").default;
Vue.component("ploty", Ploty);
const app = new Vue({
  name: "test-app",
  template: `<ploty></ploty>`
});
let html;

describe("Ploty.vue in a ssr context", () => {
  beforeEach(async () => {
    html = await renderer.renderToString(app);
  });

  it("can be rendered", () => {
    const expected = '<div data-server-rendered="true"></div>';
    expect(html).toEqual(expected);
  });
});
