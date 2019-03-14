module.exports = {
  chainWebpack: config => {
    config.module
      .rule("js-ploty")
      .test(/\.js$/)
      .use("ify-loader")
      .loader("ify-loader")
      .end();
  }
};
