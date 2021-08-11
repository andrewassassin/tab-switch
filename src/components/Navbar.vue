<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navBar">
            <a class="navbar-brand" href="/">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-5">
                <li class="nav-item active mr-5">
                    <router-link to="product">Product</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="section">Section</router-link>
                </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <button v-on:click.prevent="clickMe()" class="btn btn-primary"  type="click">
                            上欄購物車
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
            <transition >
                <Modal v-if="isClickCart" @closeBtn="closeModal"  />
            </transition >
    </div>
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
    }
  }
}

</script>

<style scoped>

.v-enter-active,.v-leave-active {
  transition: opacity .4s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>