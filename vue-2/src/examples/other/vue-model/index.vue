<template>
  <div>
    <p>Logic and data moved into a factory, but that logic still requires a non standard format</p>
    <CodeView>
      examples/other/vue-model/index.vue
      examples/other/vue-model/Rectangle.js
    </CodeView>
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
import { makeRectangle } from './Rectangle'

export default {
  name: 'VueModel',

  computed: {
    model () {
      return makeRectangle(20, 10)
    }
  }
}
</script>
