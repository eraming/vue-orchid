<template>


  <vueper-slides>
  <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
</vueper-slides>
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
          title: 'Slide #1',
          content: 'Slide content.'
        },
        {
          title: 'Slide #2',
          content: 'Slide content.'
        }
      ]

    }

  }
};

</script>

<style>

.vueperslide {
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);

  &__title {
    font-size: 7em;
    opacity: 0.6;
  }
}

// documentation link.
p {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
}

html {font: 12px Tahoma, Geneva, sans-serif;}
* {margin: 0;padding: 0;color: #fff;}

</style>
