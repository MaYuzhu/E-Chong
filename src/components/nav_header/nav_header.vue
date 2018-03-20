<template>
	<div>
    <div class="wrap">
      <div class="head">
        <a href="javascript:"><i class="iconfont icon-zuo"></i></a>
        <span>购物车</span>
        <i class="iconfont icon-fenlei" @click="navShow"></i>
      </div>
      <transition name="navList">
        <ul class="show" v-show="isShow">
          <li>
            <a href="javascript">
              <i class="iconfont icon-shouye"></i>
              <p>首页</p>
            </a>
          </li>
          <li>
            <a href="javascript">
              <i class="iconfont icon-wendang"></i>
              <p>商品分类</p>
            </a>
          </li>
          <li>
            <a href="javascript">
              <i class="iconfont icon-gouwuche"></i>
              <p>购物车</p>
            </a>
          </li>
          <li>
            <a href="javascript">
              <i class="iconfont icon-chongwu"></i>
              <p>我的e宠</p>
            </a>
          </li>
        </ul>
      </transition>

    </div>
	</div>
</template>

<script>
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      navShow(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap

  .head
    width 100%
    height 50px
    background pink
    line-height 50px
    font-size 0
    vertical-align middle
    border-bottom 1px solid #999
    position absolute
    z-index 50
    >a
      display inline-block
      i
        font-size 30px
        color #858585
        display inline-block
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin 0 auto
    >span
      font-size 20px
      display inline-block
      width 80%
      text-align center
      margin 0 auto
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

    >i
      font-size 30px
      color #858585
      display inline-block
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin 0 auto
  .show
    width 100%
    height 66px
    background lavender
    padding-top 50px
    display flex
    >li
      width 25%
      display flex
      align-items center
      >a
        display block
        text-align center
        width 100%
        >i
          font-size 26px
          text-align center
        >p
          font-size 14px
          text-align center
          margin 3px 0
          color #333
    transform: scaleY(1)
    &.navList-enter-active, &.navList-leave-active
      transition: transform .5s
    &.navList-enter, &.navList-leave-to
      transform: scaleY(0)
</style>
