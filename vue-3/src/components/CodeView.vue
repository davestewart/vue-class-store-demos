<script>
import { h } from 'vue'
export default {
  functional: true,

  render (component) {
    const slots = component.$slots
    const text = slots.default
      ? slots.default()[0].children
      : 'Missing text!'
    // const rx = /[\r\n]+/
    const rx = / / // until I can get a fix for Vue 3 children not having line breaks
    const lines = text.trim().split(rx).map(line => line.trim()).join('\n')
    return h('div', { class: 'codeView' }, [
      h('p', 'Check the files in the sources panel:'),
      h('pre', lines),
    ])
  },
}
</script>

<style>
.codeView p {
  font-style: italic;
}

.codeView pre {
  padding: .5em .8em;
  border-radius: .25em;
  margin-left: 1.5em;
  background: #F4F4F4;
  color: #0FA0CE;
  font-weight: 200;
  font-family: monospace;
}
</style>
