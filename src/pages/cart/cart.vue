<template>
	<div>
    <nav_header>
      <span slot="span">购物车</span>
    </nav_header>
    <div class="cart">
      <p><i class="iconfont icon-gouwuche"></i></p>
      <p>购物车是空的</p>
      <p><a href="javascript:">去逛逛</a> <a href="javascript:">我的收藏</a></p>
    </div>
	</div>
</template>

<script>
  import nav_header from '../../components/nav_header/nav_header.vue'
  export default {
    components:{
      nav_header
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart
    padding-top 50px
    background white
    >:nth-child(1)
      text-align center
      i
        font-size 200px
        color #858585
    >:nth-child(2)
      font-size 16px
      color #858585
      text-align center
      margin 30px 0
    >:nth-child(3)
      text-align center
      padding-bottom 20px
      a
        display inline-block
        width 80px
        height 30px
        border 1px solid #858585
        border-radius 5px
        line-height 30px
        margin 5px 10px

</style>
