// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  configureWebpack (config) {
    config.devtool = 'source-map'
  },

  chainWebpack: (config) => {
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue$', path.resolve(__dirname, 'node_modules/vue/'))
  }
}
