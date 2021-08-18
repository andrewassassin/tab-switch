<template>
  <div class="hello">
    <h1>{{product.name}}</h1>
    <section class="py-3">
        <div class="container">
            <div class="row">
                <form id="LoginForm"  class="container col-md-6 py-3">
                    <div class="form-group">
                        <label for="userName">會員帳號</label>
                        <input type="text"  placeholder="請輸入帳號" id="userName" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="userPwd">會員密碼</label>
                        <input type="password" placeholder="請輸入密碼" id="userPwd" class="form-control"  required>
                    </div>
                    <div class="form-group my-4">
                        <button type="submit" class="btn btn-primary"><i class="fas fa-plus"></i> 登入</button>
                    </div>
                </form>
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
            product:{}
        }
    },
    mounted () {
         axios.get("http://localhost/Amitproject/product.php#/")
          .then(response => {
            // let a = JSON.parse(response.data)
            // console.log('res  ',response);
            response.data.forEach(element => {
            //   console.log('ele',element)
              this.productList.push(element) 
              console.log('productList',this.productList)
            const pid = this.id
            const item = this.productList.find(item=>{
                return item.id == pid
          })
          console.log('item',item)     
          this.product = item     
            });
          })
          .catch(error => {
            console.log('err',error);
          });
          
        //   this.product = item

    },
    computed: {
    // 2. 將 state 中的 Loaded 用 computed 抓出來給 userLoaded 做使用
        userLoaded() {
        return this.$store.state.Loaded;
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
