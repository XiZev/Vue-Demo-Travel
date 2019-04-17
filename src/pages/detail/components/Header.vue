<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // keep-alive时候后多出的生命周期函数activated，每次页面展示的时候会执行
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被隐藏或替换成新的页面,解绑全局事件
  deactivated () {
    window.remoEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .4rem
    top: .4rem
    width: 2.4rem
    height: 2.4rem
    line-height: 2.4rem
    border-radius: 1.2rem
    background: rgba(0, 0, 0, .8)
    text-align: center
    .header-abs-back
      color: #fff
      font-size: 1.2rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    right: 0
    left: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .9rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: 2.6rem
      text-align: center
      font-size: .8rem
      color: #fff
</style>
