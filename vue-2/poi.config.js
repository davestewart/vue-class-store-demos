const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {}
    }
  ],

  css: {
    sourceMap: false
  },

  chainWebpack: (config) => {
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue$', path.resolve(__dirname, '../node_modules/vue/'))
  }
}
