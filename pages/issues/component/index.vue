<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Same logic as <nuxt-link to="./model/">Vue Model</nuxt-link>, but baked into page component – works with <code>generate</code></p>
    <hr>
    <section>
      <input type="number" v-model="value">
      <button @click="value++">Add</button>
    </section>
    <section>
      Double: <output>{{ double }}</output>
    </section>
  </div>
</template>

<script>
import { page } from '../../index'

export default {
  extends: page('Normal Component'),

  data () {
    return {
      value: 1
    }
  },

  computed: {
    double () {
      return this.value * 2
    }
  }
}
</script>
