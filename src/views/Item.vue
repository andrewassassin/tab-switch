<template>
  <div class="hello">
    <section class="py-3">
      <div class="container">
          <div class="row align-items-center">
            <div class="justify-content-center align-items-center my-5 col-md-5">
              <b-spinner class="" v-show="spin" label="Busy"></b-spinner>
              <img :src="`../../static/img/${product.image[0]}`" @load="loaded" class="card-img-top">
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
               <div class="mt-5 form-group">
                    <button class="btn btn-primary" @click="deleteBtn()" type="click">
                        刪除商品
                    </button>
                </div>            
            </div>
          </div>
      </div>
    </section>
    <ItemTab/>
  </div>
</template>
<script>
import axios from 'axios'
import ItemTab from '@/components/item_tab'
export default {
    data () {
        return {
            productList:[],
            product:{},
            amount:'',
            key:'',
            spin: true
        }
    },
    components: {
      ItemTab
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
      },
      loaded() {
        this.spin = false
      },
      deleteBtn(){
        axios.post("https://x-home.pcpogo.com/homex/delete.php?RDEBUG=andrewc",this.id)
          .then(res => {
                console.log(res)
              })
              // console.log('product內',this.product)
          .catch(error => {
            console.log('err',error);
          });
      }
      // spin() {
      //   return this.visibility
      // }
    }, 
      async mounted() {
        console.log('this',this)
        var that = this
        // this.$store.commit("itemList",this.itemList);
         await axios.get("https://x-home.pcpogo.com/homex/product.php?RDEBUG=andrewc")
          .then(response => {
            response.data.forEach(element => {
              element.image = JSON.parse(element.image);
              that.productList.push(element) 
              that.product  = that.productList.find(item=>{
                  return item.id == that.id
              })
              // console.log('product內',this.product)
              
            });
              console.log('product內',that.product)
          })
          console.log('product',that.product)
          .catch(error => {
            console.log('err',error);
          });
    },
    created (){       
        if(this.key!==''){
                // 一開啟網頁就更新itemList內容
            const itemListStr = localStorage.getItem(this.key);
            const defaultList = JSON.parse(itemListStr);
            this.$store.state.itemList = defaultList || []; 
        }
    },
  props: {
    id: {
      type: String,
      default: ""
    }
  }
    
}
</script>
<style scoped>

</style>
