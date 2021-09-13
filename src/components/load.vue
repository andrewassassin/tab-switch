<template>
  <div>
    <button @click="isShow =! isShow">Toggle</button>
    <div style="height: 120px;">
      <transition name="fade">
        <div class="block" v-if="isShow" key="block-1">Block 1</div>
        <div class="block" v-else key="block-2">Block 2</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
       isShow: true
    }
  }
}
</script>
<style scoped>
#app {
  position: relative;
  display: block;
  padding: 1rem;
  font-size: 1rem;
}

button {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.block {
  display: block;
  width: 150px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: #0f0;
  
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>