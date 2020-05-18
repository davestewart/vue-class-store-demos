export function page (title) {
  return {
    name: title.replace(/ /, ''),

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
