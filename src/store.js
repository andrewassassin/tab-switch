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
      MyMutations(state) {
        console.log('MyMutations run!');
        // 抓到user之後，將state的loaded改為true
        state.Loaded = true;
      },
      setTitle(state,item) {
        state.Loaded = item.name;
      },
      itemList(state,item) {
        state.itemList = item
      }

    }
  })
export default store;