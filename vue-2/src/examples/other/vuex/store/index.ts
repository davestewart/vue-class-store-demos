import Vue from 'vue'
import Vuex from 'vuex'
import rectangle from './modules/rectangle'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    rectangle
  }
})

function updateLog () {
  store.dispatch('rectangle/log', `Area is ${store.getters['rectangle/area']}`)
}

store.watch((state) => (state as any).rectangle.width, updateLog)

export default store
