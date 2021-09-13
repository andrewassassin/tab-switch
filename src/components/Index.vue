
<template >
  <section id="introSection" >
    <h2>Image Loader Spinner</h2>
    <button @click="toggleimg">{{ btntext }}</button>
    <div v-if="isLoading" class="loading"></div>
    <!-- @load加在圖片內，意思是當圖片一出來，我就執行load的設定 -->
    <img v-show="isLoaded" :src="imgsrc" width="400" @load="loaded">
  </section>
</template>

<script>
export default {
  data(){
    return{
      imgsrc: "",
      btntext: "Show Image",
      isLoaded: false,
      isLoading: false
    }
  },
  methods:{
    loaded() {
      console.log('0 0 ')
        this.isLoaded = true;
        this.isLoading = false;
    },
    toggleimg: function(){
        if (this.imgsrc == "") {
      this.isLoaded =  false;
      this.isLoading = true;
            this.imgsrc = "https://images2.alphacoders.com/103/1039991.jpg"
        this.btntext = "Hide Image"
      }else{
      this.imgsrc = ""
      this.btntext = "Show Image"
      }
    }
  }
}
</script>
<style scoped>
.loading {
  background: transparent url('https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif') center no-repeat;
  height: 400px;
  width: 400px;
}
</style>