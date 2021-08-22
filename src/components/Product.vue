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
    <div>5566</div>
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
       axios.get("http://localhost/Amitproject/product.php#/")
          .then(response => {
            // let a = JSON.parse(response.data)
            // console.log('res  ',response);
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
<style>

</style>