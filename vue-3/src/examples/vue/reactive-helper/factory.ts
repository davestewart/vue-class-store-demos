import { ref, watch, computed, reactive } from 'vue'

export default function (w = 2, h = 2) {
  const data = reactive({
    width: ref(w),
    height: ref(h),
    logs: ref([] as string[]),
    area: computed(() => data.width.value * data.height.value),
    randomize () {
      data.width.value = Math.random() * 20
      data.height.value = Math.random() * 10
    },
    log (message) {
      data.logs.value.push(`${new Date().toISOString().match(/\d{2}:\d{2}:\d{2}/)}: ${message}`)
    }
  })

  watch(data.area, function (value) {
    // how do you get access to this?
    // this.log(`Area is ${value}`)
    console.log('value', value)
  })

  data.log('Vue Component created!')

  return data
}
