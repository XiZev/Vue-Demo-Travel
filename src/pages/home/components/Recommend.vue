<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <!-- 1像素边框border-bottom -->
        <li class="item border-bottom" v-for="item of list" :key="item.id">
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
      margin-top: 1.4rem
      line-height: 1.4rem
      background: #eee
      text-indent: .6rem
    .item
      overflow: hidden
      display: flex
      height: 5.7rem
      .item-img
        width: 5.1rem
        height: 5.1rem
        padding: .3rem
      .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
          margin-top: .2rem
          line-height: 1.2rem
          font-size: 1rem
          ellipsis()
        .item-desc
          margin-top: .5rem
          line-height: 1.2rem
          color: #ccc
          ellipsis()
        .item-button
          line-height: 1.5rem
          margin-top: .3rem
          background: #ff9300
          padding: .1rem .5rem
          border-radius: .5rem
          color: #fff
</style>
