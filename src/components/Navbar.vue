<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light  fixed-top" id="navBar">
            <a class="navbar-brand"></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-5 ml-5">
                <li class="nav-item mr-5">
                    <router-link class="text-body" to="/">首頁</router-link>
                </li>
                <li class="nav-item active mr-5">
                    <router-link class="text-body" to="/product">商品詳情</router-link>
                </li>
                <li class="nav-item mr-5 ">
                    <router-link class="text-body" to="/create">建立商品</router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link class="text-body" to="/register">註冊</router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link class="text-body" to="/login">登入</router-link>
                </li>              
                </ul>
            </div>
            <form @submit.prevent="innerSearch($event)" class="form-inline mr-5">
              <input v-model="searchBar" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div>
              <button v-on:click.prevent="openModal()" class="btn btn-primary"  type="click">
                購物車
              </button>
            </div>
        </nav>
            <transition >
                <Modal v-if="isClickCart" @closeBtn="closeModal"  />
            </transition >
    </div>
</template>
<script>
import Modal from '@/components/Modal'
import Search from '@/views/Search'
export default {
  name: 'Navbar',
  data () {
    return {
      isClickCart: false,
      searchBar:""
    }
  },
  components: {
    Modal,
    Search
  },
  methods: {
    openModal () {
      this.isClickCart = true
    },
    closeModal () {
      this.isClickCart = false
    },
    innerSearch() {   
        const id = this.searchBar
        this.$router.push({
          path: `/search/${id}`,
          component: Search,
        })  
    }
  }
}

</script>

<style >
#modal{
  z-index: 500000000000;
}

.v-enter-active,.v-leave-active {
  transition: opacity .4s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

#navBar{
  box-shadow: 0px 5px 10px rgba(0, 0, 0, .2);
  background:  rgba(170, 100, 9, 0.904);
  z-index: 99;
}
</style>