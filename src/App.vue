<template>
  <div id="app">
    <router-view></router-view>
    <FooterArea v-show="$route.meta.views"></FooterArea>
  </div>
</template>
<script>
import FooterArea from './components/FooterArea/FooterArea'
export default {
  data () {
    return { 
      
    }
  },
  components: {
    FooterArea
  }
}
</script>
<style>
.app{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
