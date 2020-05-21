import { createApp } from 'vue'
import router from './router'
import App from './components/App.vue'
import RectangleView from './components/RectangleView.vue'
import CodeView from './components/CodeView.vue'
import './styles/index.css'

// setup and mount
createApp(App)
  .component('RectangleView', RectangleView)
  .component('CodeView', CodeView)
  .use(router)
  .mount('#app')
