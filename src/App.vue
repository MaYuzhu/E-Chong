<template>
  <div id="app">
    <router-view></router-view>
    <footerGuide></footerGuide>
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

</style>
