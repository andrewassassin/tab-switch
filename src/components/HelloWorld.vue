<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
     
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          count: {{count}}
        </a>
      </li>

    </ul>
    <button v-on:click="updateEvent()" class="bg-light"></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  }, 
  methods: {
      updateEvent: function () {
        this.count += 1;
      },
    },
    mounted(){
        console.log('mounted hello!');
    },
    created(){
        console.log('created hello!');
    },
    updated(){
        console.log('updated hello!');
    },
    activated(){
        console.log('activated hello!');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
