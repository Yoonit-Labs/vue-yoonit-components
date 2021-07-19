module.exports = {
  outputDir:
    process.env.NODE_ENV === 'wc'
      ? 'dist/wc'
      : process.env.NODE_ENV === 'vue'
        ? 'dist/vue'
        : 'dist',

  css: {
    extract: false
  },

  chainWebpack: config => {
    const imageRule = config.module.rule('images')
    imageRule.uses.clear()

    imageRule
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: Infinity,
        encoding: 'base64',
        esModule: false
      })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule
      .test(/\.svg$/)
      .use('svg-url-loader')
      .loader('svg-url-loader')
      .options({
        encoding: 'base64',
        esModule: false
      })
  }
}
