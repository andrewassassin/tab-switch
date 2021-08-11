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
    <div>{{msg}}</div>

                        <button v-on:click.prevent="clickMe()" class="btn btn-primary"  type="click">
                            section購物車
                        </button>
     
                <transition >
                <Modal v-if="isClickCart" @closeBtn="closeModal"  />
            </transition >
</header>

</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'Navbar',
  data () {
    return {
      isClickCart: false
    }
  },
  components: {
    Modal
  },
  methods: {
    clickMe () {
      console.log('click')
      this.isClickCart = true
    },
    closeModal () {
      this.isClickCart = false
    },
    mounted(){
       axios.get("http://localhost/Amitproject/select.php#/")
          .then(response => {
            console.log('res  ', response.data);
          })
          .catch(error => {
            console.log('err',error);
          });
    }
  }
}

</script>