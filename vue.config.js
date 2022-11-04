module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.module.rule("js-plotly").test(/\.js$/).use("ify-loader").loader("ify-loader").end();
  }
};
