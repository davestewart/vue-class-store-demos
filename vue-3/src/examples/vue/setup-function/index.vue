<template>
  <div>
    <p>Logic and data split between setup function and component methods</p>
    <CodeView>
      examples/other/vue-computed/index.vue
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
import { ref, watch, computed } from 'vue'

export default {
  name: 'SetupFunction',

  setup () {
    const width = ref(20)
    const height = ref(20)
    const logs = ref([])
    const area = computed(() => width.value * height.value)

    watch(area, function (value) {
      // how do you get access to this?
      // this.log(`Area is ${value}`)
      console.log('value', value)
    })

    return {
      width,
      height,
      logs,
      area
    }
  },

  created () {
    this.log('Vue Component created!')
  },

  methods: {
    randomize () {
      this.width = Math.random() * 20
      this.height = Math.random() * 10
    },

    log (message) {
      this.logs.push(`${new Date().toISOString().match(/\d{2}:\d{2}:\d{2}/)}: ${message}`)
    }
  }
}
</script>
