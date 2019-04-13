<!-- template向外暴露只能有一个根标签，如果有两个以上的标签需要再用一个div再进行包裹 -->
<template>
<div>
<!-- 注意大写转换 -->
<home-header :city="city"></home-header>
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
      city: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      // 请求URL来获取ajax数据，axios返回一个promise对象
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    // 利用promise，数据获取成功后的操作
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
      }
      console.log(res)
    }
  },
  // 借助mounted生命周期函数来表示页面一挂载完成就去ajax请求
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
