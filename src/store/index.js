import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
//   state: state,
//   actions: actions,
//   mutations: mutations,
//   getters: getters,
//   getters之于state相当于组件中的computed之于data
//   除此之外，vuex还提供了一个module功能，它允许我们将 store 分割成模块
//   每个模块拥有自己的 state、mutation、action、getter
  state,
  actions,
  mutations,
  getters
})
