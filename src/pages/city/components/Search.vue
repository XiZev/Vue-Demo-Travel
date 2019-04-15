<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleVuexClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="noData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleVuexClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    noData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        console.log(result)
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: 2rem
    padding: 0 .4rem
    background: $bgColor
    .search-input
      margin-top: .25rem
      box-sizing: border-box
      padding: 0 .3rem
      width: 100%
      height: 1.52rem
      line-height: 1.52rem
      text-align: center
      border-radius: .3rem
      color: #666
      font-size: .8rem
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 3.9rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: 1.5rem
      padding-left: .6rem
      background: #fff
      color: #666
</style>
