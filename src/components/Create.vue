<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="py-3">
        <div class="container">
            <div class="row">
                <form id="createProductForm" class="container col-md-6 py-3">
                    <div class="form-group">
                        <label for="productName">商品名稱</label>
                        <input type="text" id="productName" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="productPrice">商品價格</label>
                        <input type="number" id="productPrice" class="form-control" min="1" max="90000" required>
                    </div>
                    <div class="form-group">
                        <input type='file' id='productImage' accept="image/*">
                        <input type='button' id='btnLoad' value='檢查圖片大小' >
                    </div> 
                    <div class="form-group">
                        <label for="productCategory">商品分類</label>
                        <select id="productCategory" class="form-control">
                            <option value="書架喇叭">書架喇叭</option>
                            <option value="腳架" selected>腳架</option>
                            <option value="墊材">墊材</option>
                            <option value="藍芽喇叭">藍芽喇叭</option>
                            <option value="落地喇叭">落地喇叭</option>
                        </select>
                    </div>
                    <div class="form-group my-4">
                        <button type="submit" class="btn btn-primary"><i class="fas fa-plus"></i> 新增商品</button>
                    </div>
                </form>
                <!-- 商品圖片預覽區塊 -->
                <img class="col-md-4" id="blah" src="#" alt="商品圖片預覽" width="200"/>
            </div>
        </div>
    </section>
    <button v-on:click="updateEvent()" class="bg-light"></button>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '新增商品',
      count: 0
    }
  }, 
  methods: {
    updateEvent: function () {
        this.count += 1;
      }
},
mounted(){
   $('#productImage').change( function() { 
     console.log('enter change')
      //圖片預覽
        const imgInp = document.getElementById("productImage")
          imgInp.onchange = event => {
              const [file] = imgInp.files
              if (file) {
                blah.src = URL.createObjectURL(file)
              }
            }
      //讀取圖片路徑
          let value = document.getElementById("productImage").files[0].name;
            console.log("圖片路徑",value)
            $("#createProductForm").unbind('submit').bind('submit',function(e){
              console.log('submit')
                e.preventDefault();
            const product = {
            name: $("#productName").val(),
            price:$("#productPrice").val(),
            image: `../../static/img/${value}` ,
            category:$("#productCategory").val(),
            createdAt: new Date().getTime()
            }
              const config = {
                responseType: 'text'
              };
              axios.post("http://localhost/Amitproject/insert.php#/", product, config)
                  .then(response => {
                    console.log('res  ', response);
                  })
                  .catch(error => {
                    console.log('err',error);
                  });
              })
    
      })
}
}
</script>
