<!-- template向外暴露只能有一个根标签，如果有两个以上的标签需要再用一个div再进行包裹 -->
<template>
<div>
<!-- 注意大写转换 -->
<home-header ></home-header>
<home-swiper :list="swiperList"></home-swiper>
<home-icons :list="iconList"></home-icons>
<home-recommend :list="recommendList"></home-recommend>
<home-weekend :list="weekendList"></home-weekend>
</div>
</template>

<script>
// 根据vue的组件化思想，在home组件下面细分更小的组件header,swiper
// 并把它导入到首页home.vue中
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  // 注册HomeHeader组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // 请求URL来获取ajax数据，axios返回一个promise对象
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    // 利用promise，数据获取成功后的操作
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
      }
      console.log(res.data)
    }
  },
  // 借助mounted生命周期函数来表示页面一挂载完成就去ajax请求
  // 初次加载
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 使用keep-alive，组件会多出一个生命周期函数
  // 当前页面重新被显示会执行
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    console.log('actived')
  }
}
</script>

<style>
</style>
