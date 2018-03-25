<template>
	<div>
    <nav_header style="position:fixed;top:0;width:100%;z-index:20">
      <span slot="span">全部品牌</span>
    </nav_header>
    <div class="big_wrap" ref="allScroll">
      <ul>
        <li class="a_all" v-for="(item, index) in allbrands.brand">
          <p>{{item.order}}</p>
          <ul class="a_start">
            <li v-for="(bra, i) in item.list" :key="i">
              <div><img :src="bra.logo" alt=""></div>
              <div>
                <p>{{bra.name}}</p>
                <p>{{bra.address}}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <ul class="zimu">
      <li :class="{on:i===currentIndex}" v-for="(item,i) in allbrands.brand" :key="i"
            @click="addOn(i)">{{item.order}}</li>
    </ul>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import nav_header from '../../components/nav_header/nav_header.vue'
  import {mapState} from 'vuex'
  export default {
    data () {
      return{
        isOn:0,
        scrollY:0,
        tops:[],
      }
    },
    mounted () {
      this.$store.dispatch('getAllBrand',() => {
        this.$nextTick(() => {
          this._initScroll()
          this._initTops ()
        })
      })
    },
    computed:{
      ...mapState(['allbrands']),
      currentIndex () { // findIndex(): 返回值是第个返回true所对应的index
        const {scrollY, tops} = this
        // scrollY要>=当前的top && 小于下一个top
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }
    },
    methods:{
      addOn(i){
        this.isOn = i
        const top = this.tops[i]
        // 更新目标scrollY值
        this.scrollY = top
        // 平滑滚动到指定位置
        this.allScroll.scrollTo(0, -top, 200)
      },
      _initScroll(){
        this.allScroll = new BScroll (this.$refs.allScroll,{
          click:true,
          probeType:3
        })
        // 监视滑动过程
        this.allScroll.on('scroll', (pos) => {
          //console.log(pos.y)
          // 保存y
          this.scrollY = Math.abs(pos.y)
        })
        // 监视滑动结束
        this.allScroll.on('scrollEnd',(pos) => {
          //console.log('滑动结束', pos.y)
          this.scrollY = Math.abs(pos.y)  // 解决惯性滑动更新
        })
      },
      _initTops () {
        const tops = []
        let top = 0
        // 计算各个 top, 并保存到tops
        tops.push(top)

        // 得到ul下所有的子li
        const brandItems = this.$refs.allScroll.getElementsByClassName('a_all')
        Array.prototype.slice.call(brandItems).forEach((brandItem, index) => {
          top += brandItem.clientHeight
          tops.push(top)
        })
        // 保存tops
        this.tops = tops
        //console.log(this.tops)
      },
    },

    components:{
      nav_header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .big_wrap
    padding-top:51px
    position fixed
    top 0
    bottom 0
    margin auto
    width 100%
    >ul
      padding-bottom 51px
      >.a_all
        >p
          font-size 18px
          background #e5e5e5
          padding 5px 0 5px 18px
        >.a_start
          width 100%
          background white
          >li
            width 96%
            height 73px
            box-sizing border-box
            padding 10px
            background white
            border-bottom 1px solid #e5e5e5
            overflow hidden
            >:nth-child(1)
              float left
              border 1px solid #e5e5e5
              width 100px
              height 50px
              padding 6px
              box-sizing border-box
              img
                width 100%
                height 100%
            >:nth-child(2)
              float left
              :nth-child(1)
                font-size 16px
                color #222
                margin 8px 0 5px 18px
              :nth-child(2)
                font-size 14px
                color #999
                margin 8px 0 5px 18px

  .zimu
    position fixed
    right 0
    top 50%
    transform translateY(-50%)
    li
      text-align center
  .on
    color red
</style>
