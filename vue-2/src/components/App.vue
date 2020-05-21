<template>
  <div id="demo">
    <main id="main" class="container">
      <h1>{{ $route.meta.title }}</h1>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Vue Class Store - Demo'
  }
})
</script>
