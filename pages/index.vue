<template>
  <div class="container">
    <div>
      <h1 class="title">Vue Class Store</h1>
      <h4>Running in Nuxt</h4>
      <div class="links">
        <section v-for="group in links" :key="group.name">
          <p>{{ group.title }}</p>
          <ul>
            <li v-for="(title, page) in group.links" :key="page">
              <nuxt-link :to="`/${group.prefix}/${page}`">
                {{ title }}
              </nuxt-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <div>
      <p>GitHub</p>
      <ul>
        <li>
          <a href="https://github.com/davestewart/vue-class-store" target="_blank">Vue Class Store</a>
        </li>
        <li>
          <a href="https://github.com/davestewart/nuxt-class-store" target="_blank">This demo</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

function group (title, links) {
  return {
    title, prefix: title.toLowerCase(), links
  }
}

export default Vue.extend({
  data () {
    return {
      links: [
        group('Examples', {
          basic: 'Basic store',
          inline: 'Inline store',
          inherit: 'Store inheritance',
          global: 'Global store'
        }),
        group('Caveats', {
          random: 'Randomised data'
        })
      ]
    }
  }
})
</script>
