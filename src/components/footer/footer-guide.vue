<template>
	<div class="footer">
    <div @click="goto('/one')" :class="{on: isCurrent('/one')}" class="one_page">

    </div>
    <div @click="goto('/classified')" :class="{on: isCurrent('/classified')}">

    </div>
    <div @click="goto('/cart')" :class="{on: isCurrent('/cart')}">

    </div>
    <div @click="goto('/mine')" :class="{on: isCurrent('/mine')}">

    </div>
	</div>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      },
      isCurrent(path){
        //return this.$route.path === path
        return this.$route.path.search(path) === 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer
  width 100%
  height 55px
  background #f9f9f9
  display flex
  justify-content space-around
  align-items center
  position fixed
  z-index 999
  bottom 0
  border-top 1px solid #898989
  >div
    width 42px
    height 40px
    background url('./img/img.png') no-repeat
    background-size 234px 163px
  :nth-child(1)
    background-position -85px 0
    &.on
      background-position 0 0
  :nth-child(2)
    background-position -85px -41px
    &.on
      background-position 0 -41px
  :nth-child(3)
    background-position -85px -81px
    &.on
      background-position 0 -81px
  :nth-child(4)
    background-position -85px -122px
    &.on
      background-position 0 -122px


</style>
