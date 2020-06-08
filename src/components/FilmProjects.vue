<template>


  <vueper-slides
  :slide-ratio="1 / 2" fixed-height="300px"
  >
  <vueper-slide
  v-for="(slide, url) in slides"
  :key="url"
  :image="slide.url"
 />


</vueper-slides>


</template>


<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import photos from '@/photos.json';


export default {
  components: { VueperSlides, VueperSlide },

  data() {
    return {
      photos,
      slides: [
                {
                  title: 'slide 1',
                  url: require('../images/project1/project1_1.png')
                },
                {
                  title: 'slide 2',
                  url: require('../images/project1/project1_2.png')
                },
                {
                  title: 'slide 3',
                  url: require('../images/project1/project1_3.png')
                 }
            ]
        }
  }

  // methods: {
  //   thumbUrl(filename) {
  //     return require(`../images/photography/thumbnails/${filename}`);
  //   },
  // },

};

</script>

<style>

.vueperslides--fixed-height { height: 500px; }

.vueperslide {
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);

  &__title {
    font-size: 7em;
    opacity: 0.6;
  }
}


p {
  position: absolute;
  /* top: 5px; */
  right: 5px;
  z-index: 0;
}

html {font: 12px Tahoma, Geneva, sans-serif;}
* {margin: 0;padding: 0;color: #fff;}

</style>
