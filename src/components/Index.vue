
<template >
      <section id="introSection" >
            <picture class="picture">
                <div class="mockup"></div>
                <img data-src="../../static/img/001.jpg" class="" alt="">

                 
            
            </picture>
        
    </section>
</template>

<style>

/*=============================================
=                  Intro                      =
=============================================*/

</style>
<script>
export default {
  mounted(){
      const html = document.documentElement 
      html.classList.add("no-js")
      const { documentElement } = document
        documentElement.classList.length > 1
            ? documentElement.classList.remove('no-js')
            : documentElement.removeAttribute('class')
        window.addEventListener('load', this.removeMockup);
        window.addEventListener('load', this.loadImage);
        window.addEventListener('load', this.onEnterView);
        window.addEventListener('load', this.onEnterView);
        window.addEventListener('load', this.lazyLoading);
        
  },
  methods:{
       removeMockup(event){
        console.log('event',event.target)
        const mockup = event.target.previousElementSibling
        mockup.addEventListener('transitionend', mockup.remove)
        mockup.classList.remove('loading')
        mockup.classList.add('fade-out')
      },
      loadImage(img){
        img.previousElementSibling.classList.add('loading')
        img.setAttribute('src', img.dataset.src)
        img.removeAttribute('data-src')
        img.addEventListener('load', removeMockup)
      },
      onEnterView(entries, observer){
          for (let entry of entries) {
            if (entry.isIntersecting) {
                loadImage(entry.target)
                observer.unobserve(entry.target)
            }
        }
      },
      lazyLoading(){
        const watcher = new IntersectionObserver(this.onEnterView())
        const lazyImages = document.querySelectorAll('.img.lazy')
        for (let image of lazyImages) {
            watcher.observe(image)
        }
      }
  }

}
</script>
<style scoped>


</style>