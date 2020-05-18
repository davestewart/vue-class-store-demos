<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Simple and intuitive reactive, computed, and watched properties, within a single, reusable, extensible model</p>
    <hr>
    <RectangleView
      :width.sync="model.width"
      :height.sync="model.height"
      :area="model.area"
      :logs="model.logs"
      @randomize="model.randomize"
    />
  </div>
</template>

<script>
import { page } from '../../index'
import { RectangleStore } from './Rectangle'

export default {
  extends: page('Basic Store'),

  computed: {
    model () {
      return new RectangleStore(20, 10)
    }
  }
}
</script>
