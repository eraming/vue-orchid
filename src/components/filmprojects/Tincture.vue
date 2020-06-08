<template>

<div class="desc">
  <h6>
    TINCTURE
    On the eve of a reunion, Karine has a revelation about the loss of someone close to her.
  </h6>


  <vueper-slides slide-image-inside
  :slide-ratio="1 / 2" fixed-height="250px"
  >

  <vueper-slide
  v-for="(slide, url) in slides"
  :key="url"
  :image="slide.url"
 />


</vueper-slides>

</div>
</template>


<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  components: { VueperSlides, VueperSlide },

  data() {
    return {
      slides: [
                {
                  title: 'slide 1',
                  url: require('@/images/tincture/tincture1.png')
                },
                {
                  title: 'slide 2',
                  url: require('@/images/tincture/tincture2.png')
                },
                {
                  title: 'slide 3',
                  url: require('@/images/tincture/tincture3.png')
                },
                {
                  title: 'slide 4',
                  url: require('@/images/tincture/tincture4.png')
                },
                {
                  title: 'slide 5',
                  url: require('@/images/tincture/tincture5.png')
                 }
            ]
        }
  }

};

</script>

<style>

.vueperslides--fixed-height { height: 400px; }

.vueperslide__image {
  transform: scale(1);
}

.vueperslide__title {
  font-size: 7em;
  opacity: 0.7;
}


p {
  position: absolute;
  /* top: 5px; */
  right: 5px;
  z-index: 0;
}

h6 {
  color: black;
}

html {font: 12px Tahoma, Geneva, sans-serif;}
* {margin: 0;padding: 0;color: white;}

</style>
