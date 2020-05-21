<template>
  <div>
    <p>Logic and data declared using factory function + reactive helper to return standalone model</p>
    <CodeView>
      examples/vue/reactive-model/index.vue
      examples/vue/reactive-model/factory.ts
    </CodeView>
    <hr>
    <RectangleView
      v-model:width="width"
      v-model:height="height"
      :area="area"
      :logs="logs"
      @randomize="randomize"
    />
  </div>
</template>

<script>
import makeModel from './factory'

export default {
  name: 'ReactiveHelper',

  setup () {
    return makeModel(10, 10)
  },
}
</script>
