// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next) => { 
  if(to.matched.some( m => m.meta.auth)){ 
    // 對路由進行驗證 
    if(store.state.isLogin=='ok') {
    // 已經登陸 
      next 
    }else {
      // 未登錄則跳轉到登陸界面，
      query:{ Rurl: to.fullPath}
    }

  }
})
