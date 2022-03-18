<template>
  <div id="app">
  <router-view></router-view>
  <FooterGudie></FooterGudie>
  </div>
</template>

<script>
import FooterGudie from './components/FootGuide/FooterGuide.vue'
export default {
  components:{
    FooterGudie
  }
}
</script>

<style lang="stylus" scoped>
 .app
   width 100%
   height 100%
   background #f5f5f5
</style>