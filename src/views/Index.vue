
<template >
  <section id="introSection" >
    <div class="slide">
      <div class="slide-item">
        <transition-group name="flip-list" tag="ul" class="slide-list">
          <li v-for="(item,index) in slideData" :key="item.id">                   
              <img :src="`../../static/img/${itemObj[item.ref].image}`" :name="`${itemObj[item.ref]}`" :id="`${index}`"  @click="clickImg($event,index)" alt="">    
              <p class="">{{itemObj[item.ref].name}}</p> 
              <p class="money">TWD$ <span class="badge">{{itemObj[item.ref].price}}</span></p>   
          </li>
        </transition-group>
      </div>
      <div class="slide-ctrl">
        <div class="slide-prev" @click="slideCtrl(1)"><i class="fas fa-angle-double-left"></i></div>
        <div class="slide-next" @click="slideCtrl(-1)"><i class="fas fa-angle-double-right"></i></div>
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
      itemObj:[],
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
        slideCtrl(slidesToShow=1) {
          if (this.clickWait) {
            return;
          }
          this.stopTime();
          this.clickWait = true;

          if (slidesToShow > 0) {
              // 移除最後一個
              const shiftItem = this.slideData.splice(-5);
              this.slideData =[...shiftItem,...this.slideData]
              this.setTime();
              return;
          }
          if (slidesToShow < 0) {
            const shiftItem = this.slideData.splice(0,5);
            this.slideData = this.slideData.concat(shiftItem);
            // 註解掉的話只能點一次
            this.setTime();
            // return;
          }
        }
    },
    async mounted(){
      await axios.get("https://x-home.pcpogo.com/homex/product.php?RDEBUG=andrewc")
          .then(response => {
            console.log('response',response)
              response.data.forEach(element => {
                element.image = JSON.parse(element.image)[1]
                this.itemObj.push(element)
                console.log('this.itemObj',this.itemObj)
              }); 
          })
          .catch(error => {
            console.log('err',error);
          });
      for (let i = 0; i < this.itemObj.length*3 ; i++) {
        let obj = {};
        obj.id = i;
        // 2%10  10除以2的餘數是什麼，在此例 ref = i
        obj.ref = i % this.itemObj.length;
        this.slideData.push(obj);
        console.log('this.slideData',this.slideData)
      }
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
  display: flex;
  padding: 5px 0px;
  height: 2000px;
}
.slide-list li {
  position: relative;
  flex: 1 0 0;
  left:calc(-100% /1.79 * 5);
  margin: 15px;
  
}

.slide-list li:nth-child(1),
.slide-list li:nth-child(2),
.slide-list li:nth-child(3),
.slide-list li:nth-child(4),
.slide-list li:nth-child(5),
.slide-list li:nth-child(71),
.slide-list li:nth-child(72),
.slide-list li:nth-child(73),
.slide-list li:nth-child(74),
.slide-list li:nth-child(75)
{
  z-index: 0;
  opacity: 0;
} 


.slide-list img{
  width: 150px;
  height: 150px;
}

.flip-list-move {
  transition: transform 0.6s;
}

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