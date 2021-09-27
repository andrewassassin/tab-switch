import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
      itemList:[],
      isLogin:'',
      username:[],
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
        state.username.push(data) 
      }
    }
  })
export default store;