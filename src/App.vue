<template>
  <div>
  <router-view></router-view>
  <FootGudie></FootGudie>
  </div>
</template>

<script>
import FootGudie from './components/FootGuide/FootGuide.vue'
export default {
  components:{
    FootGudie
  }
}
</script>

<style scoped>
 .app
   color:red
</style>