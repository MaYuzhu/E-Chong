<template>
  <div id="app">
    <router-view></router-view>
    <footerGuide v-show="$route.meta.showFooter"></footerGuide>
  </div>
</template>

<script>
  import footerGuide from './components/footer/footer-guide.vue'
export default {
  components:{
    footerGuide,
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;

}

</style>
