<template>
  <div class="body">
    <div class="mine">
      <div class="bg">
        <div class="zhuce">
          <a href="/"><img src="./img/personal-bico3.png" alt=""></a>
          <a href="javascript:">注册</a>
        </div>
        <div class="ec">
          <img src="./img/logo.png" alt="">
        </div>
        <div class="tab_login">
          <div><a href="javascript:">普通登录</a><i></i></div>
          <div><a href="javascript:">手机动态密码登录</a><i></i></div>
        </div>
      </div>
      <form action="javascript:" class="form_wrap">
        <ul class="form1" @click="addOn" :class="{on:have}">
          <li>
            <i class="iconfont icon-touxiang"></i>
            <input type="text" placeholder="手机号/邮箱/用户名">
          </li>
          <li>
            <i class="iconfont icon-mima54"></i>
            <input type="password" placeholder="输入密码">
          </li>
        </ul>
        <ul class="form2" @click="addOn" :class="{on:!have}">
          <li>
            <i class="iconfont icon-shouji"></i>
            <input type="text" placeholder="已注册的手机号">
          </li>
          <li>
            <i class="iconfont icon-mima54"></i>
            <input type="password" placeholder="请输入图片内容">
          </li>
          <li>
            <i class="iconfont icon-mima54"></i>
            <input type="password" placeholder="动态密码">
            <div>获取验证码</div>
          </li>
        </ul>
        <div class="wang"><a href="javascript">忘记密码？</a></div>
        <input type="submit" class="deng" value="登     录" />
      </form>
      <div class="hezuo">
        <p><a href="javascript:">合作网站登录</a></p>
        <ul>
          <li><a href="javascript:"><img src="./img/login_ico4.png" alt=""></a></li>
          <li><a href="javascript:"><img src="./img/login_ico2.png" alt=""></a></li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
  export default {

    data(){
      return{
        have:true
      }
    },
    methods:{
      addOn(){
        this.have = !this.have
      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .mine
      background white
      .bg
        position relative
        width 100%
        height 172px
        background url('./img/bg.png') no-repeat
        background-size 100% 100%
        .zhuce
          width 100%
          height 50px
          line-height 50px
          box-sizing border-box
          padding  0 10px
          display flex
          justify-content space-between
          align-items flex-end
          >:nth-child(1)
            display table
            >img
              vertical-align middle
              width 16px
          >:nth-child(2)
            color white
        .ec
          position absolute
          width 100%
          height 30%
          top 50%
          transform translateY(-50%)
          display flex
          justify-content center
          img
            width 80px
            margin 0 auto
        .tab_login
          position absolute
          bottom 0
          width 100%
          height 44px
          background rgba(255,255,255,.3)
          >:nth-child(1)
            overflow hidden
            position absolute
            width 50%
            >a
              float left
              width 100%
              line-height 44px
              text-align center
              color rgba(255,255,255,.9)
            >i
              width 0
              height 0
              border 10px solid transparent
              border-bottom 10px solid #fff
              position absolute
              bottom -1px
              left 50%
              transform translateX(-50%)


          >:nth-child(2)
            overflow hidden
            position absolute
            right 0
            width 50%
            >a
              float left
              width 100%
              line-height 44px
              text-align center
              color rgba(255,255,255,.9)
            >i
              display none
              width 0
              height 0
              border 10px solid transparent
              border-bottom 10px solid #fff
              position absolute
              bottom -1px
              left 50%
              transform translateX(-50%)
      .form_wrap
        .form1,.form2
          width 86%
          margin 0 auto
          >li
            height 50px
            border-bottom 1px solid #d9d9d9
            line-height 50px
            position relative
            i
              font-size 30px
              color #d9d9d9
              vertical-align middle
            input
              height 30px
              outline none
              transform translateY(2px)
            ::-webkit-input-placeholder
              color #d9d9d9
            >div
              width 88px
              height 28px
              border 1px solid rgba(254, 0, 0, 0.7)
              border-radius 5px
              color rgba(254, 0, 0, 0.7)
              text-align center
              line-height 28px
              font-size 14px
              position absolute
              top 50%
              transform translateY(-50%)
              right 0

        .wang
          width 86%
          text-align right
          margin 10px auto
        .deng
          width 86%
          height 40px
          display block
          border-radius 5px
          color white
          background #2EC975
          margin 20px auto
        .on
          display none
      .hezuo
        width 86%
        margin 80px auto 0
        >p
          width 100%
          text-align center
        ul
          width 100%
          display flex
          justify-content flex-start
          li
            width 33%
            a
              display block
              text-align center
              margin 20px 0
              img
                width 60px


</style>
