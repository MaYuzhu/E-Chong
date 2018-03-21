<template>
	<div class="app">
    <div style="width: 100px;height: 100px;background: lavenderblush">{{categorys}}</div>
    <div class="left" ref="leftList">
      <ul class="gouliang">
        <li :class="{on:!isYes}" @click="setOn">为您推荐</li>
        <li>狗狗零食</li>
        <li>狗狗玩具</li>
        <li>狗狗医疗</li>
        <li>狗狗美容</li>
        <li>狗狗呵呵</li>
        <li>狗狗哈哈</li>
        <li>狗呵呵呵</li>
        <li>狗狗玩具</li>
        <li>狗狗医疗</li>
        <li>狗狗美容</li>
        <li>狗狗呵呵</li>
        <li>狗狗哈哈</li>
        <li>狗狗end</li>
     </ul>
    </div>
    <div class="right" ref="rightList">
      <div>
        <div class="food_wrap">
          <div class="food">
            <a href="javascript:">狗狗零食<span>更多商品</span></a>
          </div>
          <div class="foods">
            <ul>
              <li><a href="javascript:"><img src="./img/liang.jpg" alt=""><p>国产狗粮</p></a></li>
              <li><a href="javascript:"><img src="./img/liang.jpg" alt=""><p>国产狗粮</p></a></li>
              <li><a href="javascript:"><img src="./img/liang.jpg" alt=""><p>国产狗粮</p></a></li>
              <li><a href="javascript:"><img src="./img/liang.jpg" alt=""><p>国产狗粮</p></a></li>
            </ul>
          </div>
        </div>

        <div class="pai">
          <p><a href="javascript:">热门品牌</a></p>
          <div class="pai_item">
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
            <a href="javascript:">
              <div>
                <img src="./img/pai.jpg" alt="">
              </div>
              <p>天衡宝(原雪山)</p>
            </a>
          </div>
        </div>
      </div>

    </div>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        isYes:true,
        categorys:[]
      }
    },
    mounted(){
      this.$store.dispatch('getCategorys',() => {

      })
      new BScroll(this.$refs.leftList,{
        click:true,
        scrollY:true,
      }),
      new BScroll(this.$refs.rightList,{
        click:true,
        scrollY:true,
      })
     },
    methods:{
      setOn(){
        this.isYes = false
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  margin-top 40px
  width 100%
  height 100%
  background #dddddd
  position absolute

  .left
    width 20%
    position absolute
    left 0
    top 0
    height 84%
    ul
      li
        font-size 14px
        height 50px
        line-height 50px
        text-align center
        margin-bottom 2px
        background white
        box-sizing border-box
        padding 0 4px
      .on
        background #dddddd
        color red
  .right
    position absolute
    right 0
    top 0
    width 79%
    box-sizing border-box
    margin-left 0
    height 84%
    .food_wrap
      width 100%
      background white
      margin-top 3px
      .food
        >a
          display block
          width 100%
          height 30px
          line-height 30px
          padding 3px 8px
          box-sizing border-box
          color #323232
          span
            float right
            font-size 14px
            color #7e8c8d

      .foods
        width 100%
        ul
          width 100%
          padding 10px
          box-sizing border-box
          display flex
          flex-wrap wrap
          justify-content space-between
          li
            width 31%
            a
              display block
              width 100%
              img
                width 100%
              p
                text-align center
                color black
                font-size 12px
                margin 5px 0 8px 0

    .pai
      width 100%
      background #ffffff
      margin-top 3px
      p
        a
          display block
          width 100%
          height 30px
          line-height 30px
          padding 3px 8px
          box-sizing border-box
          color #323232

      .pai_item
        width 100%
        padding 12px
        box-sizing border-box
        display flex
        justify-content space-between
        flex-wrap wrap
        a
          display block
          width 48%
          margin-bottom 10px
          >div
            box-sizing border-box
            border 1px solid #b8b8b8
            padding 0 12px
            img
              width 100%
              height 100%

          p
            text-align center
            color black
            font-size 12px
            margin-top 5px


</style>
