<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6dd;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <!-- 一开始是隐藏状态，如果点击banner之后显示出来，swipwe计算宽度会出现问题，导致轮播图无法正常滚动 -->
    <!-- swiperOptions引入observeParents,observer来解决 -->
    <!-- common-gallery作为插槽传入fade-animation组件之中，再在里面进行动画显示 -->
    <fade-animation>
      <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
import FadeAnimation from 'common/fade/FadeAnimation.vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_r_800x800_ad61c624.jpg', 'http://img1.qunarzz.com/sight/p0/1409/18/691791f00f29bce28a90f898d3faab1a.jpg_r_800x800_6f65375a.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 53.3%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: 2.5rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: 1rem
        padding: 0 .5rem
      .banner-number
        height: 1rem
        line-height: 1rem
        margin: .7rem .2rem
        padding: .15rem 1rem
        font-size: .6rem
        border-radius: .3rem
        background: rgba(0,0,0,.8)
      .banner-icon
        font-size: .6rem
</style>
