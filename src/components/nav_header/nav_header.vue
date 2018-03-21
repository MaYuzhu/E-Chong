<template>
	<div>
    <div class="wrap">
      <div class="head">
        <a href="javascript:" @click="$router.back()"><i class="iconfont icon-zuo"></i></a>
        <slot name="span"></slot>
        <i class="iconfont icon-fenlei" @click="navShow"></i>
      </div>
      <transition name="navList">
        <ul class="show" v-show="isShow">
          <li>
            <a href="javascript:">
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
              <div><span>0</span></div>
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
          //更季杨柳待春雨
        //一杯过往敬无悔
      //缘聚还散谢涵濡
    //夜风微醺众生美
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap
  width 100%
  overflow hidden
  .head
    width 100%
    height 50px
    background white
    line-height 50px
    font-size 0
    vertical-align middle
    border-bottom 1px solid #999
    text-align center
    /*position absolute
    z-index 50*/
    >a
      display inline-block
      float left
      height 100%
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

      text-align center
      margin 0 auto
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color black
    >i
      font-size 30px
      color #858585
      display inline-block
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin 0 auto
      float right
      padding-right 10px
  .show
    width 100%
    height 66px
    background white
    /*padding-top 50px*/
    display flex
    border-bottom 1px solid #999
    >li
      overflow hidden
      width 25%
      display flex
      align-items center
      >a
        display block
        text-align center
        width 100%
        position relative
        >i
          font-size 26px
          text-align center
        >p
          font-size 14px
          text-align center
          margin 3px 0
          color #333
        >div
          position absolute
          top -5px
          left 50px
          width 14px
          height 14px
          border-radius 9px
          border 1px solid #ffffff
          background rgb(244, 0, 0)
          line-height 12px
          text-align center
          >span
            color white
            font-size 12px
    &.navList-enter-active, &.navList-leave-active
      transition: .5s
    &.navList-enter, &.navList-leave-to
      height 0
</style>
