import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
      Loaded: 'hi',
      itemList:[]
    },
    mutations: {
      setTitle(state,item) {
        state.Loaded = item.name;
      },
      itemList(state,item) {
        state.itemList = item
      }

    }
  })
export default store;