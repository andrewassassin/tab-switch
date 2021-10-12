
<template >
  <section id="introSection" >
    <div class="slide">
      <div class="slide-item">
        <transition-group :name="transitionSwiper" tag="ul" class="slide-list">
          <li v-for="(item,index) in slideData" :key="item.id">                   
              <img :src="`../../static/img/${item.image}`" :id="`${index}`" alt="">    
              <p class="">{{item.name}}</p> 
              <p class="money">TWD$ <span class="badge">{{item.price}}</span></p>   
          </li>
        </transition-group>
      </div>
      <div class="slide-ctrl">
        <div v-if="prevBtn" class="slide-prev" @click="slideCtrl(1)"><i class="fas fa-angle-double-left"></i></div>
        <div v-if="nextBtn" class="slide-next" @click="slideCtrl(-1)"><i class="fas fa-angle-double-right"></i></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      clickWait: false,
      timer: {},
      slideData: [],
      shiftItem:[],
      count:5,
      transitionSwiper:"",
      prevBtn:false,
      nextBtn:true
    }
  },
  methods:{
        setTime() {
          this.timer = setTimeout(() => {
            this.clickWait = false;
          }, 500);
        },
        stopTime() {
          window.clearInterval(this.timer);
        },
      // 既然上面call slideCtrl帶1進去，為何這邊強制slidesToShow = 1
      async slideCtrl(slidesToShow=1) {
          if (this.clickWait) {
            return;
          }
          this.stopTime();
          this.clickWait = true;
          if (slidesToShow > 0) {
              this.prevBtn = false 
              this.nextBtn = true  
              this.transitionSwiper="slidePrev"
              // 移除最後一個
              this.slideData =[...this.shiftItem,...this.slideData]
              console.log('this.slideData',this.slideData)
              this.slideData.splice(-5);
              this.setTime();
              return;
          }
          if (slidesToShow < 0) {  
              this.prevBtn = true 
              this.nextBtn = false   
              this.transitionSwiper="slide" 
              await axios.post("https://x-home.pcpogo.com/homex/tab2.php?RDEBUG=andrewc",this.count)
                .then(response => {
                    response.data.forEach(element => {
                      element.image = JSON.parse(element.image)[1]
                      this.slideData.push(element)
                    }); 
                })
                .catch(error => {
                  console.log('err',error);
                });
              this.shiftItem = this.slideData.splice(0,5)
              this.setTime();
              return;
          }
        }
    },
    async mounted(){
      const count = "0"
      await axios.post("https://x-home.pcpogo.com/homex/tab2.php?RDEBUG=andrewc",count)
          .then(response => {
            console.log('response',response)
              response.data.forEach(element => {
                element.image = JSON.parse(element.image)[1]
                this.slideData.push(element)
              }); 
          })
          .catch(error => {
            console.log('err',error);
          });
    }
}
</script>

<style scoped>
#introSection{
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
}

ul {
  list-style-type: none;
  padding: 0;
}

.slide-prev,
.slide-next {
  position: relative;
  /* user-select: none; */
  width: 25px;
  height: 25px;
  display: inline-block;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.slide-prev i,
.slide-next i{
  position: absolute;
  top: 50%;
  left: 50%;
}

.slide-prev{
  position: relative;
  right:55%;
  bottom:240px;

}

.slide-next{
  position: relative;
  left: 60%;
  bottom: 240px;
}

.slide-prev:hover,
.slide-next:hover {
  color: #ff0;
}
/* slide */
.slide-item{
  width:900px;
  height: 363px;
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}

.slide-list {
  /* position: relative; */
  display: flex;
  padding: 5px 0px;
  height: 2000px;
}
.slide-list li {
  /* display: inline-block; */
  /* position: relative; */
  flex: 1 0 0;
  left:calc(-100% /260 * 5);
  margin: 15px;
  
}

.slide-list img{
  width: 150px;
  height: 150px;
}

/* .flip-list-move {
  transition: transform 0.6s;
} */

.slide-leave-active,
.slide-enter-active,
.slidePrev-leave-active,
.slidePrev-enter-active{
  transition:all .5s;
  /* position: absolute; */
}

.slidePrev-leave-to{
  transform: translate(-1000%, 0);
}
/* 
.slidePrev-leave{
  transform: translate(2000%, 0);
} */


.slide-leave-to {
  transform: translate(1000%, 0);
}

/* .slide-move,
.slidePrev-move{
   transition:all .3s;
} */

.money{
  color: rgb(248, 7, 7);
  font-size: 12px;
  font-weight:bold;
}

.badge{
    color: rgb(248, 7, 7);
    display:inline;
    vertical-align:baseline ; 
    font-size: 18px;
}
</style>