<template>
	<div class="classified">
    <div class="top">
      <div class="fen">
        <router-link to="/classified/class_one" tag="a">分类</router-link>
        <router-link to="/classified/class_two" tag="a">品牌</router-link>
      </div>

      <i class="iconfont icon-sousuo1"></i>
    </div>

    <router-view></router-view>
	</div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classified
  width 100%
  height 100%
  .top
    position fixed
    z-index 200
    width 100%
    height 40px
    background #fafafa
    border-bottom 1px solid #a9a9a9
    top 0
    .fen
      width 120px
      margin 0 auto
      line-height 40px
      text-align center
      display flex
      justify-content space-around
      a
        color #000
        display block
        height 40px
        float left
        box-sizing border-box
      .router-link-active
        color red
        border-bottom 3px red solid

    i
      position absolute
      top 50%
      right 10px
      transform translateY(-50%)

</style>
