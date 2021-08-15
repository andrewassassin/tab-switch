<template>
    <header class="my-2">
    <div id="carouselId" class="carousel slide " data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img src='../assets/carousel-1.jpg' alt="" class="w-100">
            </div>
            <div class="carousel-item">
                <img src="../assets/carousel-2.jpg" alt="" class="w-100">
            </div>
            <div class="carousel-item">
                <img src="../assets/carousel-3.jpg" alt="" class="w-100">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
      <section class="py-3">
      <div class="container">
        <h2 class="text-center mb-2">產品列表</h2>
          <div class="row">
            <div class="col-md-6" v-for="product in productList" :key="product.key">
              <div class="card my-5 mx-5">
                <img :src="`${product.image}`" class="card-img-top">
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
    <div>5566</div>
</header>


</template>

<script>
import Modal from '@/components/Modal'
import axios from 'axios'
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
       axios.get("http://localhost/Amitproject/week11_db.php#/")
          .then(response => {
            // let a = JSON.parse(response.data)
            console.log('res  ',response);
            response.data.forEach(element => {
              console.log('ele',element)
              this.productList.push(element)
              
            });
          })
          .catch(error => {
            console.log('err',error);
          });
    }
  
}

</script>
<style>

</style>