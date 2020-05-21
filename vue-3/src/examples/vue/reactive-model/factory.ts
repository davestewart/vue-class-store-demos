import { ref, watch, computed } from 'vue'

export default function (w = 2, h = 2) {
  const width = ref(w)
  const height = ref(h)
  const logs = ref([] as string[])
  const area = computed(() => width.value * height.value)

  watch(area, function (value) {
    // how do you get access to this?
    // this.log(`Area is ${value}`)
    console.log('value', value)
  })

  function randomize () {
    width.value = Math.random() * 20
    height.value = Math.random() * 10
  }

  function log (message) {
    logs.value.push(`${new Date().toISOString().match(/\d{2}:\d{2}:\d{2}/)}: ${message}`)
  }

  log('Vue Component created!')

  return {
    width,
    height,
    logs,
    area,
    randomize,
    log
  }
}
