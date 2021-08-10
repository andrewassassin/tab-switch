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
</header>
</template>

<script>
export default {
name: 'Section',
    data(){
        return {
            msg: '這是首頁'
        }
    },
    created(){
        console.log('created section!');
    },
    mounted(){
        console.log('mounted section!');
    },
    updated(){
        console.log('updated section!');
    },
    activated(){
        console.log('activated section!');
    }
}
</script>