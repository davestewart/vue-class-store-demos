<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Convert any class into a reactive, computed store in one line</p>
    <hr>
    <Rectangle
      :width.sync="model.width"
      :height.sync="model.height"
      :area="model.area"
      :logs="model.logs"
      @randomize="model.randomize"
    />
  </div>
</template>

<script>
import VueStore from 'vue-class-store'
import { page } from '../index'
import { Rectangle } from '~/store/Rectangle'

export default {
  extends: page('Inline Store'),

  computed: {
    model () {
      return VueStore.create(new Rectangle(20, 10))
    }
  }
}
</script>
