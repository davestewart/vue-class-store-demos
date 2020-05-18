<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Vanilla Vue Model, no plugins</p>
    <hr>
    <section>
      <input type="number" v-model="model.value">
      <button @click="model.value++">Add</button>
    </section>
    <section>
      Double: <output>{{ model.double }}</output>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import { page } from '..'

export default {
  extends: page('Vue Model'),

  computed: {
    model () {
      return new Vue({
        data: {
          value: 1
        },

        computed: {
          double () {
            return this.value * 2
          }
        }
      })
    }
  }
}
</script>
