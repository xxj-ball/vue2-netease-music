import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont.css'
import scroll from './components/common/scroll'
import scrollRow from './components/common/scroll-row'
import downUp from './components/common/down-up'
Vue.config.productionTip = false
Vue.component('scroll',scroll);
Vue.component('scrollRow',scrollRow);
Vue.component('downUp',downUp);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

