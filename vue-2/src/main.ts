import Vue from 'vue'
import router from './router'
import App from './components/App.vue'
import RectangleView from './components/RectangleView.vue'
import CodeView from './components/CodeView.vue'
import store from './examples/other/vuex/store'
import './styles/index.css'

// global components
Vue.component('RectangleView', RectangleView)
Vue.component('CodeView', CodeView)

// setup and mount
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
