// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ��Ҫ����reset.css���Ѳ�ͬ�ֻ��ĳ�ʼ����ʽ����ͳһ
// styles���Զ����·������
import 'styles/reset.css'
// ���1���ر߿�����⣨�е��ֻ��ֱ��ʸߣ�2������3������1���ر߿�ᱻ��ʾ�ɶ౶���߿���Ҫ����border.css�ļ���
import 'styles/border.css'
// 300ms����ӳ����⣨ĳЩ���ͻ����������ʹ��click�¼����ӳ�300ms����ִ�У�
// ��װfastclick�⣺npm install fastclick --save save��ָ�����ڿ����������Ǵ�����ߵİ汾����Ҫ�����Ŀ�
import fastClick from 'fastclick'
// ����iconfont.css��
import 'styles/iconfont.css'
// npm install vue-awesome-swiper@2.6.7 --save
// ȫ������vue-awesome-swiper�ֲ�����
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// ����vuex�Ĺ���ֿ�����
import store from './store/index.js'

Vue.config.productionTip = false
// �󶨵�document.body
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // ·�ɾ��Ǹ�����վ�Ĳ�ͬ�����ز�ͬ�����ݸ��û�
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
