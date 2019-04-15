// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 需要引入reset.css来把不同手机的初始化样式进行统一
// styles是自定义的路径别名
import 'styles/reset.css'
// 解决1像素边框的问题（有的手机分辨率高，2倍甚至3倍屏，1像素边框会被显示成多倍屏边框，需要引入border.css文件）
import 'styles/border.css'
// 300ms点击延迟问题（某些机型或者浏览器上使用click事件会延迟300ms后再执行）
// 安装fastclick库：npm install fastclick --save save是指无论在开发环境还是打包上线的版本都需要依赖的库
import fastClick from 'fastclick'
// 引入iconfont.css库
import 'styles/iconfont.css'
// npm install vue-awesome-swiper@2.6.7 --save
// 全局引入vue-awesome-swiper轮播机制
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// 引入vuex的共享仓库内容
import store from './store/index.js'

Vue.config.productionTip = false
// 绑定到document.body
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 路由就是根据网站的不同，返回不同的内容给用户
  // router: router,
  router,
  // store: store,
  store,
  // components: { App: App },
  components: {
    App
  },
  template: '<App/>'
})
