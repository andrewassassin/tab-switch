// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引用bootstrap
import 'bootstrap/dist/js/bootstrap.min'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue,axios,VueAxios,router)

// import foneawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = JSON.stringify(localStorage.getItem(store.state.token));
//     console.log('token main', token)
//     if (token == 'null' || token === '') {
//       console.log('into null')
//       next('/login');
//     } else {
//       console.log('ok')
//       next();
//     }
//   }
// });