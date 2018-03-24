<template>
	<div>
    <nav_header>
      <span slot="span">全部品牌</span>
    </nav_header>
    <ul class="big_wrap">
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
    <ul class="zimu">
      <li class=" " v-for="(item,i) in allbrands.brand" :key="i">{{item.order}}</li>
    </ul>
	</div>
</template>

<script>
  import nav_header from '../../components/nav_header/nav_header.vue'
  import {mapState} from 'vuex'
  export default {
    data () {
      return{
        isShow:false
      }
    },
    mounted () {
      this.$store.dispatch('getAllBrand')
    },
    computed:{
      ...mapState(['allbrands'])
    },
    methods:{

    },

    components:{
      nav_header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .big_wrap

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
