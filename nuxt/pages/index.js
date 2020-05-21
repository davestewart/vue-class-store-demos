import Rectangle from '~/components/Rectangle.vue'

export function page (title) {
  return {
    name: title.replace(/ /, ''),

    components: {
      Rectangle
    },

    head () {
      return {
        title
      }
    },

    data () {
      return {
        title
      }
    }
  }
}
