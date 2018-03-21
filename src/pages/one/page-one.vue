<template>
  <div class="wrap">
    <div class="one">
      <div class="header-wrap">
        <div class="guanggao" v-if="isShow">
          <img src="./img/adv.jpg" alt="">
          <i class="iconfont icon-guanbi" @click="guanbi"></i>
        </div>
        <div class="header">

          <div class="center">
            <div class="inner">搜索品牌和商品<i class="iconfont icon-sousuo1"></i></div>
          </div>

          <a href="#" class="left">
            <span>狗狗</span>
            <em>|</em>
            <span>城市</span>
            <i class="iconfont icon-sanjiao"></i>
          </a>

          <div class="right"><i class="iconfont icon-msnui-sms-bubble"></i></div>

        </div>
        <div class="nav" ref="navWrap">
          <ul class="nav-inner" @click="changeOn">
            <li><a href="javascript:"> <span class="on">首页</span></a></li>
            <li><a href="javascript:"> <span>狗狗主粮</span></a></li>
            <li><a href="javascript:"> <span>服饰城</span></a></li>
            <li><a href="javascript:"> <span>医疗保健</span></a></li>
            <li><a href="javascript:"> <span>零食玩具</span></a></li>
            <li><a href="javascript:"> <span>日用外出</span></a></li>
            <li><a href="javascript:"> <span>美容香波</span></a></li>
          </ul>
        </div>
      </div>
      <div class="one-content swiper-one">
        <div class="lunbo">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./img/baolu.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/fumo.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/haiwai.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/ouguan.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/zhuliang.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/tongzhi.jpg" alt="">
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="big-lun"><img src="./img/dog.jpg" alt=""></div>
        <ul class="one-tuan">
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/test.jpg" alt=""></a></li>
        </ul>
        <div class="yizhe">
          <img src="./img/miaosha1.jpg" alt="">
        </div>
        <div class="gouliang-wrap">
          <div class="gouliang-top">
            <div></div>
            <div>本场结束<span>12:00</span></div>
            <div>更多&gt;</div>
          </div>
          <div class="swiper-container">
            <ul class="swiper-wrapper gouliang">
              <li class="swiper-slide">
                <img src="./img/goods-item.jpg" alt="">
                <span>￥68.8元</span>
                <span>省7.6元</span>
              </li>
              <li class="swiper-slide">
                <img src="./img/goods-item.jpg" alt="">
                <span>￥68.8元</span>
                <span>省7.6元</span>
              </li>
              <li class="swiper-slide">
                <img src="./img/goods-item.jpg" alt="">
                <span>￥68.8元</span>
                <span>省7.6元</span>
              </li>
              <li class="swiper-slide">
                <img src="./img/goods-item.jpg" alt="">
                <span>￥68.8元</span>
                <span>省7.6元</span>
              </li>
              <li class="swiper-slide">
                <img src="./img/goods-item.jpg" alt="">
                <span>￥68.8元</span>
                <span>省7.6元</span>
              </li>
              <li class="swiper-slide">
                <img src="./img/goods-item.jpg" alt="">
                <span>￥68.8元</span>
                <span>省7.6元</span>
              </li>
              <li class="swiper-slide">
                <img src="./img/goods-item.jpg" alt="">
                <span>￥68.8元</span>
                <span>省7.6元</span>
              </li>

            </ul>

          </div>
        </div>
        <div class="pin">
          <img src="./img/pinpin.jpg" alt="">
        </div>
        <div class="gif">
          <img src="./img/giff.gif" alt="">
        </div>
        <div class="yi-tuan"><img src="./img/yi-zhe.jpg" alt=""></div>
        <div class="min-lunbo">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./img/3c54559f077235436b408a6839138b4f.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/3ea8f16882581307427bd3d962fc6dd0.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/9ab35e8f6f88e2adac715cd83ac5c69c.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./img/9e4502cf22ecb6f8b97715c7fc73ed50.jpg" alt="">
              </div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="dapai"><img src="./img/dapaihaohuo.jpg" alt=""></div>
        <div class="dapaiWrap">
          <div class="daleft">
            <img src="./img/48f18920d1f1ee4e52039bf92da2e805.jpg" alt="">
            <img src="./img/188ceb72ed63b6ddffa093f25f517727.jpg" alt="">
            <img src="./img/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg" alt="">
            <img src="./img/3ea747d791b0923f775d1b23b5da9485.jpg" alt="">
          </div>
          <div class="daright">
            <img src="./img/10a5324b7c6f1763122f2ee9cd54b5b7.jpg" alt="">
            <img src="./img/67301c12c7193d19e515c59d2bf2d15a.jpg" alt="">
            <img src="./img/b91027e7b664ebd165c8dc690fd9b778.jpg" alt="">
            <img src="./img/b30bab969d87ef724986ad42420432f4.jpg" alt="">
          </div>
        </div>
        <div class="zuic">
          <img src="./img/zuicanjiang.jpg" alt="">
          <img src="./img/zuicanjiang-content.jpg" alt="">
          <img src="./img/tebiexinqiu.jpg" alt="">
        </div>
        <div class="chaopin">
          <img src="./img/left.jpg" alt="">
          <img src="./img/right-1.jpg" alt="">
          <img src="./img/right-2.jpg" alt="">
        </div>
        <div class="tese">
          <img src="./img/teselanmu.jpg" alt="">
          <img src="./img/tese-item.jpg" alt="">
          <img src="./img/tese-item.jpg" alt="">
          <img src="./img/tese-item.jpg" alt="">
          <img src="./img/tese-item.jpg" alt="">
          <img src="./img/tese-item.jpg" alt="">
          <img src="./img/tese-item.jpg" alt="">
        </div>
        <div class="bottom">
          <div class="bots">
            <a href="javascript:" style="color: red">触屏版</a>
            <a href="javascript:">手机客户端</a>
            <a href="javascript:">关于我们</a>
            <a href="javascript:">联系我们</a>
          </div>
          <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
        </div>
      </div>

      <div class="zhayan"></div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import '../../../static/css/swiper.min.css'
  export default {
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      guanbi(){
        this.isShow = false
        document.querySelector('.one').classList.add('on_one')
      },
      changeOn(){
        console.log(this)
      }

    },
    mounted () {

      new BScroll(this.$refs.navWrap,{
        click:true,
        scrollX:true,
      })
      new Swiper('.lunbo>.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay:{
          delay:2500,
          disableOnInteraction:false,
        },
      })
      new Swiper('.gouliang-wrap>.swiper-container', {
        slidesPerView: 3.5,
      })
      new Swiper('.min-lunbo>.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay:{
          delay:2500,
          disableOnInteraction:false,
        },
      })

    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap
  width 100%
  height 100%
  overflow hidden
  position relative
  background white
  .one
    padding-top 140px
    padding-bottom 55px
    &.on_one
      padding-top 85px
      padding-bottom 55px
    .header-wrap
      position fixed
      top 0
      z-index 100
      width 100%
      .guanggao
        width 100%
        position relative
        img
          width 100%
        i
          position absolute
          top 50%
          left 10px
          transform translateY(-50%)
          color white
          font-size 20px
      .header
        width 100%
        height 50px
        background white
        line-height 50px
        padding 0 20px
        box-sizing border-box
        margin-top -2px
        >a,div
          float left
        >.left
          display block
          margin-left -100%
          padding-right 50px
          box-sizing border-box
          >:nth-child(3)
            font-size 12px
          i
            font-size 4px
          em
            font-style normal
        >.center
          width 100%
          height 50px
          display flex
          align-items center
          .inner
            width 65%
            height 30px
            line-height 30px
            background #cacaca
            border-radius 5px
            margin 0 50px 0 100px
            padding-left 10px
            color #677576
            i
              float right
        >.right
          width 30px
          margin-left -30px
          text-align center
          i
            font-size 26px
            color #677576
      .nav
        width 100%
        height 38px
        background white
        margin-top -2px
        .nav-inner
          width 150%
          display flex
          justify-content space-around
          line-height 38px
          span
            box-sizing border-box
            display inline-block
            height 35px
          .on
            color #00b400
            border-bottom 3px solid #00b400


    .one-content
      .lunbo
        width 100%
        .swiper-pagination-bullet
          background rgba(240,240,240,.6)
          transition all .5s
        .swiper-pagination-bullet-active
          width 16px
          height 8px
          border-radius 4px
          background rgba(240,240,240,.6)
          transition all .5s
        img
          width 100%

      .big-lun
        width 100%
        margin-top -3px
        img
          width 100%
      .one-tuan
        display flex
        justify-content space-between
        flex-wrap wrap
        >li
          width 20%
          a
            display block
            width 100%
            img
              width 100%
      .yizhe
        width 100%
        img
          width 100%
      .gouliang-wrap
        padding-bottom 10px
        .gouliang-top
          width 100%
          height 42px
          line-height 42px
          padding 5px
          box-sizing border-box
          div
            float left
            text-align center
          >:nth-child(1)
            width 30%
            height 42px
            background url('./img/fengqiang.png') no-repeat
            background-position center center
            background-size 100%
          >:nth-child(2)
            width 50%
            margin-left 0px
            box-sizing border-box
          >:nth-child(3)
            width 20%
        .swiper-container
          width 100%
          li
            text-align center
            img
              width 100px
            >:nth-child(2)
              color red
              display block
            >:nth-child(3)
              color #7e8c8d
              font-size 14px

      .pin
        width 100%
        img
          width 100%


      .gif
        width 100%
        img
          width 100%
      .yi-tuan
        width 100%
        img
          width 100%
      .min-lunbo
        width 100%
        .swiper-container
          .swiper-wrapper
            .swiper-slide
              img
                width 100%
      .dapai
        width 100%
        img
          width 100%

      .dapaiWrap
        overflow hidden
        margin-top -2px
        .daleft
          width 50%
          float left
          img
            width 100%
            margin-top -2px
        .daright
          width 50%
          float left
          img
            width 100%
            margin-top -2px
      .zuic
        width 100%
        margin-top -3px
        img
          width 100%
          display block
      .chaopin
        width 100%
        overflow hidden
        img
          float left
          width 50%
        >:nth-child(1)
          width 50%
      .tese
        width 100%
        overflow hidden
        margin-top -3px
        margin-bottom 3px
        >:nth-child(1)
          width 100%
        img
          float left
          width 50%
      .bottom
        width 100%
        padding-bottom  5px
        div
          width 100%
          display flex
          justify-content center
          a
            margin 0 5px
            color #5f6d6e
        p
          font-size 10px
          text-align center
          line-height 18px
          color #8b999a
  .zhayan
    position fixed
    z-index 50
    right 0px
    bottom 100px
    width 85px
    height 94px
    background url('./img/godog.png') no-repeat
    background-size 100% 100%
    animation zhayan 1.5s infinite steps(2)
    @keyframes zhayan {
      0% {background : url('./img/godog.png') no-repeat 0px 0px}
      100% {background : url('./img/godog.png') no-repeat -173px 0px}
    }
</style>
