<template>
  <div id="app">
    <Navbar />
            <button v-on:click.prevent="clickMe()" class="btn btn-primary"  type="click">
                            首頁購物車
                        </button>
     
                <transition >
                <Modal v-if="isClickCart" @closeBtn="closeModal"  />
            </transition >
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Modal from '@/components/Modal'
export default {
  name: 'App',
   components: {
    Navbar,
    Modal
  },
  data(){
     return {
      msg: '這是首頁',
      isClickCart: false
    }
  },
   methods: {
    clickMe () {
      console.log('click')
      this.isClickCart = true
    },
    closeModal () {
      this.isClickCart = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


@import "~bootstrap/scss/bootstrap";
</style>
