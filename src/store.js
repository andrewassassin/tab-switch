import Vue from 'vue';
import Vuex from 'vuex';
//安裝vuex不受reload影響而消失的套件
// import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
      itemList:[],
      isLogin:'',
      userId:"",
      token:""
    },
    mutations: {
      itemList(state,item) {
        state.itemList.push(item)
      },
      login(state,data) {
        state.token = data;
      },
      user(state,data) {
        state.userId = data
      }
    },

  })
  
export default store;
