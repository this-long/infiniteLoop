import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/global.css'
import './plugin/axios'
// import './plugins/element.js'
import './element'
import './filters/filters'
import './plugin/axios'
import 'turndown'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
