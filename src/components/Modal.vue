<template>
  <div id="modal" class="container">
    <div class = "DivOverlapMask row justify-content-center align-items-center">
      <div class=" DivDialog">
        <div class="row justify-content-between">
            <h5 class="ml-3" >
                <i class="fas fa-shopping-cart"></i> 購物車
            </h5>
            <button type="button" v-on:click.prevent="closeBtn()" class="close mb-3 mr-3" >
               &times;
            </button>
        </div>
        <div>
            <table class="table table-border">
                <thead>
                    <tr>
                        <th>產品名稱</th>
                        <th class="text-right">單價</th>
                        <th class="text-right">數量</th>
                        <th class="text-right">總計</th>
                    </tr>
                </thead>
                <tbody id="cartTableBody" v-for="(item,idx) in itemList" :key="item.key">
                  <tr>
                      <td>
                          <div class="d-flex">
                              <button v-on:click.prevent="deleteBtn($event)" :id="`${idx}`" type="button" class="delete-btn btn btn-danger btn-sm">
                                  &times;
                              </button>
                              <div>
                                  <p class="m-0">{{item.title}}</p>
                              </div>
                          </div>
                      </td>
                      <td class="text-right">$ {{item.price}}</td>
                      <td class="text-right">
                        <button v-on:click.prevent="minusBtn($event)" :id="`${idx}`" class="counter-btn" >-</button>
                          {{item.amount}}
                        <button v-on:click.prevent="addBtn($event)" :id="`${idx}`" class="counter-btn" >+</button>
                      </td>
                      <td class="text-right">$ {{item.price*item.amount}}</td>
                  </tr>
                </tbody>
                <tfoot id="cartTableFoot">
                  <tr>
                  <th>總金額</th>
                  <td colspan="3" class="text-right">$ {{getCartValue}}</td>
                  </tr>
                </tfoot>
            </table>
        </div>
        <div class="text-right">
            <button id="clearCartBtn" v-on:click.prevent="clearBtn($event)" type="button" class="btn btn-danger">
                <i class="fas fa-trash-alt"></i> 清空購物車
            </button>
            <button type="button" v-on:click.prevent="closeBtn()" class="btn btn-secondary" >
                <i class="fas fa-times"></i> 關閉
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     data() {
            return {
                zIndex: this.getZIndex(),
            }
        },
    methods: {
    closeBtn () {
      this.$emit('closeBtn')
    },
      getZIndex() {
                let zIndexInit = 20190315;
                return zIndexInit++
            }
}
}
</script>
<style >
#modal {
  position: fixed;
  z-index: 500000;

}

.DivOverlapMask{
  position:fixed;
  top:0px;
  left:0px;
  height:100%;
  width:100%;
  margin:0;
  padding:0;
  background:rgba(32, 32, 32, 0.7);
}

/* Modal Dialog 層 */
.DivDialog{
  position:fixed;
  width:800px;
  height:800px;
  margin:0;
  padding:20px;
  background-color: #ffffff;
  border-radius: 10px;
}

.close {
  font-size: 35px;
}

</style>
