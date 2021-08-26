import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
      Loaded: 'hi',
      itemList:[],
      isLogin:''
    },
    mutations: {
      setTitle(state,item) {
        state.Loaded = item.name;
      },
      itemList(state,item) {
        state.itemList.push(item)
      },
      login(state,v) {
        state.userInfo = v;
      }  
    }
  })
export default store;