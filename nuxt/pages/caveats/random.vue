<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Use <code>client-only</code> for stores that generate randomised data</p>
    <hr>
    <p class="is-warning">Refresh the page to see the first value change on load</p>
    <ul>
      <li>Not client only:
        <output>{{ model.value }}</output>
      </li>
      <li>
        Client only:
        <client-only>
          <output>{{ model.value }}</output>
        </client-only>
      </li>
    </ul>
  </div>
</template>

<script>
import VueStore from 'vue-class-store'
import { page } from '../index'

@VueStore
class RandomStore {
  value = 0

  constructor () {
    this.value = Math.random()
  }
}

export default {
  extends: page('Randomised data'),

  computed: {
    model () {
      return new RandomStore()
    }
  }
}
</script>
