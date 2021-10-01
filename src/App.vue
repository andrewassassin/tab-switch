<template>
  <div id="app">
    <Navbar />
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
   provide() {
    return {
      reload: this.reload
    };
  },
   components: {
    Navbar
  },
  data(){
     return {
      msg: '這是首頁',
      isRouterAlive: true
    }
  },
  methods:{
     reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
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
