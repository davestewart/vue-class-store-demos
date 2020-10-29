<script>
export default {
  functional: true,

  render (h, context) {
    const slots = context.slots()
    const lines = slots.default[0].text.trim().split(/[\r\n]+/).map(line => line.trim())
    return h('div', { class: 'codeView' }, [
      h('p', 'Check the files in the source panel:'),
      h('pre', { class: { pre: true } }, lines.map(line => {
        return h('a', {
          domProps: {
            innerText: line
          },
          on: {
            click () {
              try {
                window.navigator.clipboard.writeText(line)
                console.log(`Copied "${line}" to clipboard`)
              } catch (err) {
                console.log(line)
              }
            }
          }
        })
      }))
    ])
  }
}
</script>

<style lang="scss">
.codeView {
  p {
    font-style: italic;
  }

  pre {
    padding: .5em .8em;
    border-radius: .25em;
    margin-left: 1.5em;
    background: #F4F4F4;
    color: #0FA0CE;
    font-weight: 200;
    font-family: monospace;
  }

  a {
    display: block;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
}

</style>
