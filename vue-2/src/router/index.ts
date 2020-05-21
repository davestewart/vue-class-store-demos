import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import * as examples from '../examples'

Vue.use(VueRouter)

function route (path: string, component: any, folder = '') {
  const title = (component.name || '').replace(/([a-z])([A-Z])/g, '$1 $2')
  return { path, component, title, meta: { folder, title } }
}

function example (path: string, component: any) {
  const [, , folder] = component.__file.split('/')
  return route(`/${folder + path}`, component, folder)
}

export function getRoutes () {
  return Object.keys(examples).map(key => {
    const component = examples[key]
    return example('/' + key, component)
  })
}

const routes = [
  route('/', Home),
  ...getRoutes()
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
