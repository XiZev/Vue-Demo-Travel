<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件 -->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height:3rem
    font-size: 1rem
    padding: 0 .6rem
    .item-title-icon
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block
      width: 1.2rem
      height: 1.2rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.4rem no-repeat
      margin-right: .1rem
      background-size: 1.4rem 10rem
  .item-children
    padding: 0 .4rem
</style>
