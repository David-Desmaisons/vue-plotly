module.exports = {
  publicPath: "./",
  parallel: false,
  chainWebpack: config => {
    config.module
      .rule("js-plotly")
      .test(/\.js$/)
      .use("ify-loader")
      .loader("ify-loader")
      .end();
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => {
        Object.assign(options, {
          //transpileOnly: false, // crash
          happyPackMode: false
        })
        return options
      })
    console.log(config.module.rule("ts").uses.store.get('ts-loader').store.get('options'))
  }
};
