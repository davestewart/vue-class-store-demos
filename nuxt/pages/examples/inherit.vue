<template>
  <div>
    <h1>{{ title }}</h1>
    <p>One class extends another's reactive, computed and watched properties, adding and modifying some of its own</p>
    <hr>
    <Rectangle
      name="Square"
      :width.sync="model.width"
      :height.sync="model.height"
      :area="model.area"
      :logs="model.logs"
      @randomize="model.randomize"
    />
  </div>
</template>

<script>
import { page } from '../index'
import { SquareStore } from '~/store/Square'

export default {
  extends: page('Store Inheritance'),

  computed: {
    model () {
      return new SquareStore(20)
    }
  }
}
</script>
