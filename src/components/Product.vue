<template>
  <header class="my-2">
    <section class="py-3">
      <div class="container">
        <h2 class="text-center mb-2">產品列表</h2>
          <div class="row">
            <div class="col-md-6" v-for="product in productList" :key="product.key">
              <div class="card my-5 mx-5">
                <img :src="`${product.image}`" :id="`${product.id}`" @click="goToProduct($event)" class="card-img-top">
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
        <div class="btn-group checkout-btn justify-content-center" role="group" id="tabs">
            <div class="img1 col-md-3 ">
                <img class="btn active w-75 "  alt="" >
                    <div class="card-btns">
                        <div class="card-btns-1">             
                            <i class="fas fa-sort-down fa-3x fa"></i>               
                        </div>
                    </div>
            </div>
            <div class="img2 col-md-3 ">
                <img class="btn w-75"  alt="" >
                    <div class="card-btns">
                        <div class="card-btns-2">
                            <i class="fas fa-sort-down fa-3x fa " ></i>               
                        </div>
                    </div>
            </div>
            <div class="img3 col-md-3">
                <img class="btn w-75 "  alt="" >
                    <div class="card-btns ">
                        <div class="card-btns-3 ">             
                            <i class="fas fa-sort-down fa-3x fa "></i>              
                        </div>
                    </div>
            </div>
        </div> 
    </div>
    <div class="row justify-content-center">         
        <div id="tab-inner" class="tabin col-md-8">
            <!-- 第一分頁 -->
            <div class="form-content container" v-for="product in productList" :key="product.key" >
                <div class="row align-items-center">
                    <img :src="`${product.image}`" :id="`${product.id}`" class="col-md-4 " alt="" >
                    <div class="col-md-8 py-5">
                        <h3 class="title">近場聆聽、高頻精準</h3>
                            <h4 class="name">KEF LSX</h4>
                            <p>聽人聲的最佳選擇，高頻清晰，低頻圓潤</p>   
                                   
                    </div>
                </div>
            </div>
            <!--  第二分頁 -->
            <div class="form-content container" v-for="product in productList" :key="product.key">
                <div class="row align-items-center">
                    <img :src="`${product.image}`" :id="`${product.id}`" class="col-md-4" alt="" >
                    <div class="col-md-8 py-5">
                        <h3 class="title">中頻渾厚、可外接低音</h3>
                            <h4 class="name">KEF LS50</h4>
                            <p>創造家庭劇院的第一首選</p>   
                                 
                    </div>
                </div>
            </div>
            <!-- 第三分頁 -->
            <div class="form-content container" v-for="product in productList" :key="product.key" >
                <div class="row align-items-center">
                    <img :src="`${product.image}`" :id="`${product.id}`" class="col-md-4" alt="" >
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
      productList:[]
    }
  },
  components: {
    Modal
  },
  mounted(){
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
        
      }
    }
  
}

</script>
<style scoped>

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

</style>