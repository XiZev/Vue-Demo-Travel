<template>
<div class="icons">
<swiper :options="swiperOption">
  <swiper-slide v-for='(page, index) of pages' :key='index'>
  <div class="icon" v-for='item of page' :key='item.id'>
    <div class="icon-img">
      <img class="icon-img-content" :src="item.imgUrl" />
    </div>
    <p class="icon-img-desc">{{item.desc}}</p>
  </div>
  </swiper-slide>
</swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 轮播图自动滚动关闭
        autoplay: false
      }
    }
  },
  // 利用计算属性来两页滑动显示列表中的图标
  computed: {
    // pages是由一个函数返回出来的内容,是一个二维数组，page是一维数组，包含每一页所具有的图标
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        // page表示当前下标对应的数据应该展现在轮播图的第几页
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<!--.icons >>> .swiper-container 用于解决滑动区域大小和整个icon区域大小一致 -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 50%
    .icon
      position: relative
      overflow: hidden
      float: left
      height: 0
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .85rem
        box-sizing: border-box
        padding: 1rem
        .icon-img-content
          display: block
          margin: 0 auto
          width: 100%
      .icon-img-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .85rem
        line-height: .85rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
