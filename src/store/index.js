import Vue from 'vue'
import Vuex from 'vuex'
import recommend from './modules/recommend'
import rank from './modules/rank'
import singer from './modules/singer'
import author from './modules/author'
import offic from './modules/offic'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    recommend,
    rank,
    singer,
    author,
    offic
  }
})
