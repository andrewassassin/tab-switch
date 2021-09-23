<template>
    <header class="my-2">
      <section class="py-3">
      <div class="container">
        <h2 class="text-center mb-2">產品列表</h2>
          <div class="row">
            <div class="col-md-4" v-for="product in productList" :key="product.key">
              <div class="card my-5 mx-2">
                <div class="slide-img">

                  <img :src="`../../static/img/${product.image[0]}`" class="card-img-top">
                
                    <div class="overlay">
                      <a :id="`${product.id}`" @click="goToProduct($event)" class="buy-btn">Buy Now</a>	
                    </div>
                  
                </div>
                <div class="card-body">
                  <h4 class="card-title">{{product.name}}</h4>
                  <h4>
                    <span class="badge badge-info">
                    {{product.category}}
                    </span>
                  </h4>
                  <p class="card-text"> $ {{product.price}} NTD</p>               
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
      <div class="tab-contnet container"> 
    <div class="row">  
        <div ref="tabTitle" class="btn-group checkout-btn justify-content-center" role="group" id="tabs">
            <div class="img1 col-md-3">
                <p :id="0" v-on:click.prevent="tabItem($event)">音樂饗宴</p>
                    <div class="card-btns">
                        <div class="card-btns-1">             
                            <i class="fas fa-sort-down fa-3x fa"></i>               
                        </div>
                    </div>
            </div>
            <div class="img2 col-md-3 ">
                <p :id="1" v-on:click.prevent="tabItem($event)">電影欣賞</p>
                    <div class="card-btns">
                        <div class="card-btns-2">
                            <i class="fas fa-sort-down fa-3x fa " ></i>               
                        </div>
                    </div>
            </div>
            <div class="img3 col-md-3">
                <p :id="2" v-on:click.prevent="tabItem($event)">藍芽喇叭</p>
                    <div class="card-btns ">
                        <div class="card-btns-3 ">             
                            <i class="fas fa-sort-down fa-3x fa "></i>              
                        </div>
                    </div>
            </div>
        </div> 
    </div>
    <div class="row justify-content-center">         
        <div ref="tabInner" id="tab-inner" class="tabin col-md-8">
            <!-- 第一分頁 -->
            <div class="form-content container">
                <div class="row align-items-center" v-for="product in productList" :key="product.key">
                    <img :src="`${product.image}`" class="col-md-4" alt="">
                    <div class="col-md-8 py-5">
                        <h3 class="title">近場聆聽、高頻精準</h3>
                            <h4 class="name">{{product.name}}</h4>
                              <span class="badge badge-info">
                                {{product.category}}
                              </span>                                
                    </div>
                </div>
            </div>
            <!--  第二分頁 -->
            <div class="form-content container" >
                <div class="row align-items-center">
                    <img src="../../static/img/002.jpg" class="col-md-4" alt="" >
                    <div class="col-md-8 py-5">
                        <h3 class="title">中頻渾厚、可外接低音</h3>
                            <h4 class="name">Dali SE</h4>
                            <p>創造家庭劇院的第一首選</p>           
                    </div>
                </div>
            </div>
            <!-- 第三分頁 -->
            <div class="form-content container" >
                <div class="row align-items-center">
                    <img src="../../static/img/003.jpg" class="col-md-4" alt="" >
                    <div class="col-md-8 py-5">
                        <h3 class="title">琴瑟優美、影音兼備</h3>
                            <h4 class="name">Edifier A100</h4>
                            <p>高低頻銜接得宜、適合聽琴聲</p>     
                                     
                    </div>
                </div>
            </div>
            <!-- 分頁結束 -->
        </div>
    </div>
</div> 
</header>


</template>

<script>
import Modal from '@/components/Modal'
import axios from 'axios'
import Item from '@/components/Item'
export default {
  name: 'Navbar',
  data () {
    return {
      productList:[],
      threeList: []
    }
  },
  components: {
    Modal
  },
  mounted(){
    const aa = document.getElementById("tab-inner").querySelectorAll(".form-content")
    console.log('aa',aa)
     this.panelDisplay(0)
        const config = {
               headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
              };
       axios.get("https://x-home.pcpogo.com/homex/product.php?RDEBUG=andrewc",config)
          .then(response => {
            // let a = JSON.parse(response.data)
            console.log('res  ',response);
            response.data.forEach(element => {
                element.image = JSON.parse(element.image);
              // console.log('ele',element)
              this.productList.push(element)
              
            });
          })
          .catch(error => {
            console.log('err',error);
          });
         
    },
    methods:{
      goToProduct(event){   
        const id = event.currentTarget.id
          const item = this.productList.find(item=>{
                return item.id == id
          })
          console.log('productsss',item)     
        this.$store.commit("setTitle",item);
        this.$router.push({
            path: `/product/${id}`,
            component: Item,
         })
        
      },
      tabItem(event){
        let tabId = event.currentTarget.id
        tabId = parseInt(tabId)
         console.log('tabId',tabId)
        this.panelDisplay(tabId)
      },
      panelDisplay(tabId){
        let tabLink = this.$refs.tabTitle.querySelectorAll("p")
        let activePanel = tabLink[tabId]
        let tabContents = this.$refs.tabInner.querySelectorAll(".form-content")
        console.log('tabContents',tabContents[1])
        for(let i =0;i<tabLink.length;i++){
            
        //設定條件tabLink ==activePanel 
        //將tablink代入for循環中並利用 if ...else 進行條件 classList.add增加class="active" 
        // ，就是每執行一次function的時候就進行全部tablinks增加class
        
            if(tabLink[i] == activePanel) {
            // 假設目前的 tabLink 等於 activate, 改變他的class .active
                tabLink[i].classList.add("active");
            // 顯示面板的display:block 
                tabContents[i].style.display="block";
            
            }else { 
            // 假設目前的 ablink 不等於 activate, 刪除他的class .active
                tabLink[i].classList.remove("active");
            // 隱藏面板
                tabContents[i].style.display="none";
            }
        }
      }
    }
  
}

</script>
<style scoped>
@import url("@fortawesome/fontawesome-free/css/all.css");

a{
  text-decoration: none;
}

.tab-contnet{
  /* flex-direction:column; */
  margin:20px 0 ;
  max-width: 100%;
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 30px 100px;
  position: relative;
}

.form-group{
  color:#fff;
      margin-bottom: 1rem;
}


.form-group label{
    display: inline-block;
    margin-bottom: 0.5rem;
    font-weight: bold;
 }

.form-group .form-control{
    display: block;
    width: 100%;
    -webkit-appearance: none;
    background-color: #EAF0ED;
    height: auto;
    border: none;
    padding: 17px 20px;
    color: #8DA291;
        font-size: 1rem;
    line-height: 1.5;
  }


.checkout-btn {
    width: 100%;
    margin-bottom: 30px;
    /* padding-left: 200px; */
}


.checkout-btn .btn{
    padding: 0;
    border-radius: 0;
    border: 1px solid #EAF0ED;
}
.checkout-btn .btn.active{
    background-color: #EAF0ED;
    border: 4px solid #e7d104;
 }

 .checkout-btn .btn{
  transition: all .5s cubic-bezier(.36,1.19,.63,1.39);
 }

 .checkout-btn img:hover {
  border: 1px solid #b68110;
 }

.tabin {
  transition: all .5s ease;
}

 .tabin.turnon {
  border: 4px solid #e7d104;
  transition: all .5s ease;
 }

/* 向下箭頭 */

 .card-btns-1,
 .card-btns-2,
 .card-btns-3 {
  position: absolute;
  bottom: -20px;
  left:34%;
  transition: all .5s cubic-bezier(.36,1.19,.63,1.39);
}


.card-btns{
  display: none;
}

.card-btns.showup{
  display: block;
}

.img1,
.img2,
.img3{
  cursor: pointer;
  position: relative;
}

.fa {
  color:  #e7d104;
}


@media (max-width: 800px) {
  .card-btns-1,
  .card-btns-2,
  .card-btns-3 {
    position: absolute;
    bottom: -20px;
    left:32%;
    transition: all .5s cubic-bezier(.36,1.19,.63,1.39);
    font-size: 12px;
  }
}

.slide-img{
	height: 450px;
	position:relative;
}
.slide-img img{
	width:100%;
	height: 100%;
	object-fit: cover;
	box-sizing: border-box;
}

.overlay{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	width:100%;
	height: 100%;
	background-color: rgba(58, 53, 53, 0.6);
	display: flex;
	justify-content: center;
  opacity: 0;
	align-items: center;
  transition: .1s opacity ease-in;
}
.buy-btn{
	width:160px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #FFFFFF;
	color:#252525;
	font-weight: 700;
	letter-spacing: 1px;
	font-family: calibri;
	border-radius: 20px;
	box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
}
.buy-btn:hover{
	color:#FFFFFF;
	background-color: #2164e0;
	transition: all ease 0.3s;
}

.slide-img:hover .overlay{
  transition: .4s opacity ease-out;
  opacity: 1;
}

.fone-de{
  position: absolute;
  left: 50px;
}


 
</style>