// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'

// import vue loading
import Loading from 'vue-loading-overlay' //component
import 'vue-loading-overlay/dist/vue-loading.css' //style
Vue.component('Loading', Loading)


import createApp from 'vue';

// import Vant,{Lazyload} from 'vant';
const app = new createApp();

// 注册时可以配置额外的选项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  listenEvents: [ 'scroll' ]
});



// options 为可选参数，无则不传
// Vue.use(Lazyload);
// Vue.use(Vant);




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