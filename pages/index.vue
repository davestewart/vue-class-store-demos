<template>
  <div class="container">
    <div>
      <h1 class="title">Class Store Demo</h1>
      <div class="links">
        <ul>
          <li v-for="(title, link) in links" :key="link">
            <nuxt-link :to="`/${link}`">
              {{ title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      links: {
        basic: 'Basic store',
        inline: 'Inline store',
        inherit: 'Store inheritance',
        global: 'Global store',
        model: 'Vue Model'
      }
    }
  }
})
</script>
