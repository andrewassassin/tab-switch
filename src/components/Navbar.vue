<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navBar">
            <!-- 手機版切換導覽列顯示按鈕 -->
            <button class="navbar-toggler" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand"></a>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">              
                  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item mr-5">
                        <router-link class="text-body nav-link" to="/">首頁</router-link>
                    </li>
                    <li class="nav-item active mr-5">
                        <router-link class="text-body nav-link" to="/product">商品詳情</router-link>
                    </li>
                    <li class="nav-item mr-5 ">
                        <router-link class="text-body nav-link" to="/create">建立商品</router-link>
                    </li>
                    <li class="nav-item mr-5">
                        <router-link class="text-body nav-link" to="/register">註冊</router-link>
                    </li>
                    <li class="nav-item mr-5">
                        <router-link class="text-body nav-link" to="/login">登入</router-link>
                    </li>              
                  </ul>
                  <form @submit.prevent="innerSearch($event)" class="form-inline mr-5">
              <input v-model="searchBar" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div>
              <button v-on:click.prevent="openModal()" class="btn btn-primary mr-3 float-right"  type="click">
                <i class="fas fa-shopping-cart"></i> 購物車
              </button>
            </div>
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
  inject: ["reload"],
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
        if(id&& this.$route.path!==`/search/${id}` &&this.$route.name!=='search'){
          this.$router.push({
            path: `/search/${id}`,
            component: Search,
          })  
        }else if(id&&this.$route.name=='search'){
            this.$router.push({
            path: `/search/${id}`,
            component: Search,
          })  
           this.reload();
        }
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