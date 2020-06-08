<template>

<div>
  <h6>
    THE CATCHING is about a young girl who wakes up in the woods.
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
                  url: require('@/images/catching/project1_1.png')
                },
                {
                  title: 'slide 2',
                  url: require('@/images/catching/project1_2.png')
                },
                {
                  title: 'slide 3',
                  url: require('@/images/catching/project1_3.png')
                },
                {
                  title: 'slide 4',
                  url: require('@/images/catching/project1_4.png')
                 }
            ]
        }
  }

};

</script>

<style>

.vueperslides--fixed-height { height: 400px; }

.vueperslide__image {
  transform: scale(1.2) rotate(-2deg);
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
