<template>
  <div class="hello">
    <section class="py-3">
      <div class="container">
          <div class="row align-items-center">
            <div class="card my-5 col-md-5">
              <img :src="`../../static/img/${product.image[0]}`"  class="card-img-top">
            </div>
            <div class="card-body col-md-6 ">
              <form v-on:submit.prevent="addItem($event)" class="mt-3 card-body">
                <h3 class="card-title">{{product.name}}</h3>
                  <h2>
                    <span class="badge badge-info">
                      {{product.category}}
                    </span>
                  </h2>
                <h3 class="card-text">商品價格  $ {{product.price}} NTD</h3>
                <div class="mt-5 form-group">
                    <label>購買數量</label>
                    <input v-model="amount" class="form-control" type="number" min="1" max="20" required>
                </div>
                <div class="mt-5 form-group">
                    <button class="btn btn-primary"  type="submit">
                        加入購物車
                    </button>
                </div> 
              </form>              
            </div>
          </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            productList:[],
            product:{},
            amount:'',
            key:'',
        }
    },
    methods: {
      addItem(event) {
          const item = {
            ...this.product,
            amount: this.amount         
          }
          console.log('商品詳情 ',item)
          this.$store.commit("itemList",item);
          this.updateDataToStorage()
      },
      updateDataToStorage() {
        const itemListStr = JSON.stringify(this.$store.state.itemList);
        localStorage.setItem(this.key, itemListStr);
      }
    }, 
    mounted () {
       const config = {
               headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
           };
        // this.$store.commit("itemList",this.itemList);
         axios.get("https://x-home.pcpogo.com/homex/product.php?RDEBUG=andrewc",config)
          .then(response => {
            response.data.forEach(element => {
              element.image = JSON.parse(element.image);
              this.productList.push(element) 
              const pid = this.id
              const item = this.productList.find(item=>{
                  return item.id == pid
              })
              this.product = item     
            });
          })
          .catch(error => {
            console.log('err',error);
          });

    },
    created (){       
                // 一開啟網頁就更新itemList內容
            const itemListStr = localStorage.getItem(this.key);
            const defaultList = JSON.parse(itemListStr);
            this.$store.state.itemList = defaultList || []; 
    },
  props: {
    id: {
      type: String,
      default: ""
    }
  }
    
}
</script>
