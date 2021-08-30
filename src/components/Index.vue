
<template >
      <section id="introSection" >
          <div class="loadingImg">
        /*ondragstart="return false" 图片禁止拖动*/
        <img v-lazy="img"alt="" v-for="img in list" ondragstart="return false">
        <div class="gototop" @click="BackToTop">
            <a>回到<br>顶部</a>
        </div>
    </div> 
    </section>
</template>

<style>

/*=============================================
=                  Intro                      =
=============================================*/

</style>
<script>
import $ from 'jquery'
export default {
  data(){
    return{
       list: [
        '../../static/img/001.jpg',
        '../../static/img/002.jpg',
        '../../static/img/003.jpg',
        '../../static/img/004.jpg',
        '../../static/img/005.jpg',
        '../../static/img/006.jpg',
        '../../static/img/007.jpg',
        '../../static/img/008.jpg',
        '../../static/img/009.jpg',
        '../../static/img/010.jpg',
      ],
    }
  },
  mounted(){
     window.addEventListener('scroll', this.handleScroll)
            $(".gototop").hide();
  },
  methods:{
      BackToTop(){
                $('html,body').animate({ scrollTop: 0 }, 700);
            },
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
                if(scrollTop >100){
                    $(".gototop").fadeIn(500);
                }
            },
  }


}
</script>
<style scoped>
img[lazy=loading]{
}
img[lazy=loaded]{
  animation:fade 0.5s;
}
img{
  transition:all 0.5s;
  display: block;
  width: 400px;
  margin: 0 auto;
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.gototop{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #f2f2f5;
    position: fixed;
    right: 30px;
    bottom: 50px;
    font-size: 12px;
    cursor: pointer;
}
.gototop a{
    color: #666;
    line-height: 20px;
    display: inline-block;
}

</style>