<template>
  <div class="create">
    <h1>新增商品</h1>
    <section class="py-3">
      <div class="container">
          <div class="row">
            <form id="createProductForm" v-on:submit.prevent="createForm($event)" class="container col-md-6 py-3">
                <div class="form-group">
                    <label for="productName">商品名稱</label>
                    <input type="text" id="productName" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="productPrice">商品價格</label>
                    <input type="number" id="productPrice" class="form-control" min="1" max="90000" required>
                </div>
                <div class="form-group">
                    <input type="file" accept="image/*" @change="previewImage">
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
            <div v-if="preview">
              <img :src="preview" />
              <p>file name: {{ image.name }}</p>
              <p>size: {{ image.size/1024 }}KB</p>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      preview: null,
      image: null
    }
  }, 
  methods: {
    createForm (event) {
          console.log('hi')
          //讀取圖片路徑
            console.log("圖片路徑",this.image.name)
            const product = {
              name: event.target[0].value,
              price: event.target[1].value,
              image: `../../static/img/${this.image.name}` ,
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
    },
    previewImage (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        console.log('value',this.image.name)
        reader.readAsDataURL(input.files[0]);
      }
    }
}

}
</script>
