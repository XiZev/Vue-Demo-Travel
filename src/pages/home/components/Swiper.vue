<template>
<!-- swiper再用div标签包裹：解决图片还未加载，而下面的文本加载完毕后占据图片空间，等到图片加载完成之后文本下移而产生抖动 -->
<div class="wrapper">
  <!-- 接收data内的swiperQption的内容 -->
  <!-- v-if解决swiper图片一开始显示最后一张图片。原因是json数据未传入的时候list是空数组，这里规定只有当list有数据才能创建swiper -->
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for='item of list' :key='item.id'>
      <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <!-- Optional controls -->
    <!-- swiper-pagination显示分页 -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--swiper-button-prev，swiper-button-next控制左右箭头-->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- swiper-scrollbar控制滚动条 -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // pagination配置项，传入一个专门用于显示内容的div（.swiper-pagination）
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<!-- 图片的高宽比，宽度100%，高度会相对宽度撑开26.67% -->
<!-- 写在height中实现不了，写在height中表示父级元素的高度，要实现图片自适应就要用overflow: hidden，height: 0，padding-bottom: 26.67%-->
<!-- 或者直接使用height：26.67vw 但是这种表示可能会对浏览器兼容性有影响 -->
<!-- 由于scoped的存在，只修饰当前组件class的名字 。但是 swiper-pagination组件显示的内容已经传递给了swiper组件，swiper组件决定显示的内容，所以swiper显示的页码要由swiper这个组件来显示-->
<!-- 解决：使用穿透.wrapper >>> .swiper-pagination-bullet-active wrapper下面只要出现.swiper-pagination-bullet-active wrapper则生效，不受scoped限制-->
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width: 100%
</style>
