<template>
	<div>
    <nav_header>
      <span slot="span">全部品牌</span>
    </nav_header>
    <ul class="big_wrap">
      <li class="a_all">
        <p>A</p>
        <ul class="a_start">
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>

        </ul>
      </li>

      <li class="a_all">
        <p>B</p>
        <ul class="a_start">
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>

        </ul>
      </li>
      <li class="a_all">
        <p>C</p>
        <ul class="a_start">
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>

        </ul>
      </li>
      <li class="a_all">
        <p>D</p>
        <ul class="a_start">
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>
          <li>
            <div><img src="./all.jpg" alt=""></div>
            <div>
              <p>艾尔</p>
              <p>中国</p>
            </div>
          </li>

        </ul>
      </li>
    </ul>
    <ul class="zimu">
      <li class="on">A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
      <li>F</li>
      <li>G</li>
      <li>H</li>
      <li>I</li>
      <li>J</li>
      <li>K</li>
      <li>L</li>
      <li>M</li>
      <li>N</li>
      <li>O</li>
      <li>P</li>
      <li>Q</li>
      <li>R</li>
      <li>S</li>
      <li>T</li>
      <li>U</li>
      <li>V</li>
      <li>W</li>
      <li>X</li>
      <li>Y</li>
      <li>Z</li>
    </ul>
	</div>
</template>

<script>
  import nav_header from '../../components/nav_header/nav_header.vue'
  export default {
    data(){
      return{
        isShow:false
      }
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
