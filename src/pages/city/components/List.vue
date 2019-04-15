<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
          <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleVuexClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 此处的:ref是从data中接受的数据，并且是循环输出 -->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleVuexClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleVuexClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  name: 'CityList',
  mounted () {
    // console.log(this.$refs.wrapper)
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        // element获取对应字母class等于area的dom区域
        // this.$refs[this.letter]是数组，不是标准的dom元素
        // this.$refs[this.letter][0]才是对应的dom元素
        const element = this.$refs[this.letter][0]
        // console.log(this.$refs[this.letter][0])
        // letter检测到发生变化且不为空的时候，可以让better-scroll滚动区自动滚到某一个元素上
        this.scroll.scrollToElement(element)
      }
      // console.log(this.letter)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    overflow: hidden
    position: absolute
    left: 0
    top: 3.9rem
    right: 0
    bottom: 0
    .border-topbottom
      &:before
        border-color: #ccc
      &:after
        border-color: #ccc
    .title
      line-height: 2rem
      background: #eee
      padding-left: .8rem
      color: #666
      font-size: .8rem
    .button-list
      overflow: hidden
      padding: .3rem .8rem .3rem .3rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .2rem
          padding: .3rem 0
          text-align: center
          border: .08rem solid #ccc
          border-radius: .3rem
    .item-list
      .item
        line-height: 2rem
        padding-left: .8rem
      .border-bottom
        &:before
          border-color: #ccc
</style>
