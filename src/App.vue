<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navBar">
      <a class="navbar-brand" href="/">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-5">
          <li class="nav-item active mr-5">
            <router-link to="helloworld">Helloworld</router-link>
          </li>
          <li class="nav-item">
            <router-link to="section">Section</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Section from '@/components/Section'
export default {
  name: 'App',
   components: {
    Section
  },
  data(){
     return {
      msg: '這是首頁'
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
