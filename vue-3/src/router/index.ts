import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import * as examples from '../examples'

function route (path, component, folder = '') {
  const title = (component.name || '').replace(/([a-z])([A-Z])/g, '$1 $2')
  return { path, component, title, meta: { folder, title } }
}

function example (path, component) {
  const parts = component.__file.split('/')
  return route(`/${parts[2] + path}`, component, parts[2])
}

export function getRoutes () {
  return Object.keys(examples).map((key) => {
    const component = examples[key]
    return example('/' + key, component)
  })
}

const routes = [
  route('/', Home),
  ...getRoutes()
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
