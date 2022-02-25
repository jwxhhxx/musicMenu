import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入路由相关文件
import router from "@/router"
import store from './store'
import * as API from '@/api'
import md5 from 'js-md5'

import 'default-passive-events'

Vue.config.productionTip = false

Vue.prototype.$md5 = md5
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
