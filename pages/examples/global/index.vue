<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Independent global and local data working together, with no special setup</p>
    <hr>
    <p>Managing {{ model.items.length }} items ( {{ model.numSelected }} selected )</p>
    <button @click="model.addItem">Add Item</button>
    <button @click="model.toggleRandom">Toggle Random</button>
    <div class="items">
      <Item v-for="item in model.items" :key="item.id" :model="item" />
    </div>
  </div>
</template>

<script>
import { page } from '../../index'
import { ItemsStore } from './ItemsStore'
import Item from './Item.vue'

export default {
  extends: page('Global Store'),

  components: {
    Item
  },

  provide () {
    return {
      $store: this.model
    }
  },

  computed: {
    model () {
      return new ItemsStore(2)
    }
  }
}
</script>

<style>
#global pre {
  display: none
}
</style>
