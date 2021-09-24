<template>
    <div class="tab-contnet container"> 
        <h1>推薦產品</h1>
        <div class="row">  
            <div ref="tabTitle" class="btn-group checkout-btn justify-content-center" role="group" id="tabs">
                <div class="img1 col-md-3">
                    <p :id="0" v-on:click.prevent="tabItem($event)">落地喇叭</p>
                        <div class="card-btns">
                            <div class="card-btns-1">             
                                <i class="fas fa-sort-down fa-3x fa"></i>               
                            </div>
                        </div>
                </div>
                <div class="img2 col-md-3 ">
                    <p :id="1" v-on:click.prevent="tabItem($event)">藍芽喇叭</p>
                    <div class="card-btns">
                        <div class="card-btns-2">
                            <i class="fas fa-sort-down fa-3x fa"></i>               
                        </div>
                    </div>
                </div>
                <div class="img3 col-md-3">
                    <p :id="2" v-on:click.prevent="tabItem($event)">電影欣賞</p>
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
                    <div class="row align-items-center" v-for="product in threeList" :key="product.key">
                        <img :src="`../../static/img/${product.image[0]}`" class="col-md-4" alt="">
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
                    <div class="row align-items-center" v-for="product in threeList2" :key="product.key">
                        <img :src="`../../static/img/${product.image[0]}`" class="col-md-4" alt="" >
                        <div class="col-md-8 py-5">
                            <h3 class="title">近場聆聽、高頻精準</h3>
                            <h4 class="name">{{product.name}}</h4>
                                <span class="badge badge-info">
                                    {{product.category}}
                                </span>                      
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
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            productList:[],
            productList2:[],
            threeList: [],
            threeList2:[]
        }
    },
    beforeMount() {
    // 在頁面開啟前發出請求
        this.getInitialUsers()
    },
    mounted(){
        this.scroll() 
        const aa = document.getElementById("tab-inner").querySelectorAll(".form-content")
        this.panelDisplay(0)   
    },
    methods:{
        getInitialUsers() {  
            const count = 0
            const config = {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        }
                    }
            axios.post(`https://x-home.pcpogo.com/homex/tab.php?RDEBUG=andrewc`,count,config)
                .then(response =>{      
                    this.productList = response.data
                    console.log(response.data)
                    this.productList.splice(0,2).forEach(item=>{
                        item.image = JSON.parse(item.image);
                        this.threeList.push(item)
                    })
                })
                axios.post(`https://x-home.pcpogo.com/homex/tab2.php?RDEBUG=andrewc`,count,config)
                .then(response =>{      
                    this.productList2 = response.data
                    console.log(response.data)
                    this.productList2.splice(0,2).forEach(item=>{
                        item.image = JSON.parse(item.image);
                        this.threeList2.push(item)
                    })
                })
        },
        scroll() {
            let isLoading = false
            var count = 0 
            var that = this
            window.onscroll = async function() {
                // 距離底部200px加載一次
                let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200
                // let height = document.documentElement.offsetHeight - document.documentElement.scrollTop
                // console.log('bottomOfWindow',height - window.innerHeight)
                if (bottomOfWindow && isLoading == false) {
                    isLoading = true
                    count += 2
                    await axios.post(`https://x-home.pcpogo.com/homex/tab.php?RDEBUG=andrewc`, count)
                        .then(response => {
                            that.productList = response.data
                            that.productList.splice(0,2).forEach(item=>{
                                item.image = JSON.parse(item.image);
                                that.threeList.push(item)
                            })            
                        })        
                     axios.post(`https://x-home.pcpogo.com/homex/tab2.php?RDEBUG=andrewc`,count)
                         .then(response =>{      
                            this.productList2 = response.data
                            console.log(response.data)
                            this.productList2.splice(0,2).forEach(item=>{
                                item.image = JSON.parse(item.image);
                                this.threeList2.push(item)
                    })
                })
                    isLoading = false
                }         
            }
         
        },
        tabItem(event){
            let tabId = event.currentTarget.id
            tabId = parseInt(tabId)
            this.panelDisplay(tabId)
        },
        panelDisplay(tabId){
            let tabLink = this.$refs.tabTitle.querySelectorAll("p")
            let activePanel = tabLink[tabId]
            let tabContents = this.$refs.tabInner.querySelectorAll(".form-content")
            console.log('tabContents',tabContents[1])
            for(let i =0;i<tabLink.length;i++){      
                if(tabLink[i] == activePanel) {
                    tabLink[i].classList.add("active");
                    tabContents[i].style.display="block";  
                }else { 
                    tabLink[i].classList.remove("active");
                    tabContents[i].style.display="none";
                }
            }
        }
    }
}
</script>
<style scoped>

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
</style>