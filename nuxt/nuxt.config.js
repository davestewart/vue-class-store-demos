import path from 'path'

export default {
  mode: 'universal',
  head: {
    title: 'Index',
    titleTemplate: '%s - Vue Class Store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ]
  },
  css: [
    '~/assets/styles/index.css'
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  build: {
    extend (config) {
      config.resolve.alias.vue$ = path.resolve(__dirname, '../node_modules/vue/')
    }
  }
}
