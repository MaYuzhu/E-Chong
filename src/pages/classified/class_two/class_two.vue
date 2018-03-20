<template>
	<div class="c-two">
    <div class="tuijian">
      <p>—— 推荐品牌 ——</p>
      <ul>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <border_top></border_top>
    <div class="zhuliang">
      <p>—— 主粮品牌 ——</p>
      <ul>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <border_top></border_top>
    <div class="lingshi">
      <p>—— 零食品牌 ——</p>
      <ul>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <div>
              <div>
                <img src="./img/2af1de3319e5729745a6f52097b1bc5f.jpg" alt="">
              </div>
              <p>关cit</p>
              <p>美国</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <router-link class="all" tag="div" to="/all">全部</router-link>
	</div>
</template>

<script>
  import border_top from '../../../components/border_top/border_top.vue'
  export default {
    components:{
      border_top
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .c-two
    padding 50px  0
    background #ededed
    position relative
    .tuijian,.zhuliang,.lingshi
      width 100%
      background white
      padding 0 6px
      box-sizing border-box
      >p
        padding 20px
        text-align center
        font-size 14px
        color #696969
      >ul
        display flex
        flex-wrap wrap
        justify-content space-between
        >li
          width 33.33%
          padding 0 6px
          box-sizing border-box
          margin-bottom 18px
          >a
            display block
            width 100%
            >div
              >div
                border 1px solid #d6d6d6
                padding 8px
                box-sizing border-box
                >img
                  width 100%
              >:nth-child(2)
                text-align center
                color black
                font-size 14px
                margin 4px 0
              >:nth-child(3)
                text-align center
                color #5e696a
                font-size 12px
                margin 4px 0
    .all
      width 40px
      height 40px
      text-align center
      line-height 40px
      border-radius 20px
      background rgba(200,200,200,.7)
      color white
      font-size 14px
      position fixed
      bottom 70px
      right 0
</style>
