/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue$', path.resolve(__dirname, 'node_modules/vue/'))
  },
}
