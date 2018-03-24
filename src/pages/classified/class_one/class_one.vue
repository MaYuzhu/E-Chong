<template>
	<div class="aaa">

    <div class="left" ref="leftList">
      <ul class="gouliang">
        <li  @click="setOn(index)" :class="{on:myIndex === index}"
            v-for="(list,index) in categorys" :key="index">{{list.name}}</li>

      </ul>
    </div>
    <div class="right" ref="rightList">
      <div>
        <div class="food_wrap"  v-for="(list,index) in categorys" :key="index"
              v-if="myIndex===index">
          <div class="food">
            <a href="javascript:">{{list.name}}<span>更多商品</span></a>
          </div>
          <div class="foods" v-for="(foodL,index) in list.cate_list">
            <ul v-if="foodL.type===0">
              <li v-for="(food,index) in foodL.list"><a href="javascript:">
                <img :src="food.photo" alt="">
                <p>{{food.name}}</p>
                </a>
              </li>
            </ul>

          </div>

          <div class="foods" v-for="(foodL,index) in list.cate_list" v-if="foodL.type===2">
            <div class="food">
              <a href="javascript:">{{foodL.title}}<span>更多商品</span></a>
            </div>
            <ul>
              <li v-for="(food,index) in foodL.list"><a href="javascript:">
                <img :src="food.logo" alt="">
                <p>{{food.name}}</p>
              </a>
              </li>
            </ul>

            <!--<ul v-if="foodL.type===2">
              <li v-for="(food,index) in foodL.list"><a href="javascript:">
                <img :src="food.logo" alt="">
                <p>{{food.title}}</p>
              </a>
              </li>
            </ul>-->
          </div>
        </div>

        <!--<div class="pai">
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
        </div>-->
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
        myIndex : 0
      }
    },
    mounted(){
      this.$store.dispatch('getCategorys',() => {
          this.$nextTick(() => {
            this._left()
            this._right()
          })

      })

     },
    methods:{
      setOn(index){
        this.myIndex = index
      },
      _left(){
        new BScroll(this.$refs.leftList,{
          click:true,
          scrollY:true,
        })
      },
      _right(){
        new BScroll(this.$refs.rightList,{
          click:true,
          scrollY:true,
        })
      }
    },
    computed:{
      ...mapState(['categorys'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.aaa
  width 100%
  height 100%
  background #dddddd
  position absolute
  overflow hidden
  .left
    width 20%
    position absolute
    left 0
    top 41px
    bottom 56px
    height 84%
    margin-top 3px
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
    background #ffffff
    right 0
    top 41px
    bottom 56px
    width 79%
    box-sizing border-box
    margin-left 0
    height 85%
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
            padding-top 3px
            a
              display block
              width 100%
              padding-bottom 3px

              img
                width 100%
                /*border 1px solid #111*/
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
