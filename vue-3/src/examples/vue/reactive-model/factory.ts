import { ref, watch, computed } from 'vue'

export default function (w = 2, h = 2) {
  const width = ref(w)
  const height = ref(h)
  const logs = ref([] as string[])
  const area = computed(() => width.value * height.value)

  function randomize () {
    width.value = Math.random() * 20
    height.value = Math.random() * 10
  }

  function log (message) {
    logs.value.push(`${new Date().toISOString().match(/\d{2}:\d{2}:\d{2}/)}: ${message}`)
  }

  watch(area, function (value) {
    log(`Area is ${value}`)
  })

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
