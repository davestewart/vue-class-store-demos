<template>
  <div>
    <h4>Running in Vue 3</h4>
    <section v-for="folder in folders" :key="folder.title">
      <p>{{ folder.title }}</p>
      <ul>
        <li v-for="route in folder.routes" :key="route.path">
          <router-link :to="route.path">{{ route.meta.title }}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { getRoutes } from '../router'

export default {
  name: 'VueClassStoreDemo',

  setup () {
    return {
      folders: computed(() => {
        return getRoutes().reduce((folders, route) => {
          const folder = route.meta.folder
          if (!folders[folder]) {
            folders[folder] = {
              title: folder.replace(/\W/g, ' ').replace(/\w/, c => c.toUpperCase()),
              routes: [],
            }
          }
          folders[folder].routes.push(route)
          return folders
        }, {})
      }),
    }
  },
}
</script>
