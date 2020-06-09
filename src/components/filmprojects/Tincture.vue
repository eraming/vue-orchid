<template>

<div class="desc">

  <h5>
    TINCTURE </h5>
    <br>
    <h6>
    On the eve of a reunion, Karine has a revelation about the loss of someone close to her.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Cras sed lorem massa.
    Mauris dui felis, pulvinar vel velit eu, aliquam pretium lectus. </h6>
    
  <h6>  Aliquam et nibh urna. Integer a rutrum velit. Mauris fermentum massa eget lacus lacinia,
    in porttitor felis efficitur. Fusce viverra ut nulla quis hendrerit. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Morbi elit neque, semper sollicitudin luctus non, rhoncus a lectus.
    Ut sed vestibulum nisl. Morbi non lorem neque. Cras aliquam felis vel consequat vehicula. Fusce placerat,
    felis at maximus lobortis, magna libero rutrum tellus, vitae interdum turpis libero id quam.
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
  padding: 10px;
}

h5 {
  color: black;
  padding: 10px;
}

html {font: 12px Tahoma, Geneva, sans-serif;}
* {margin: 0;padding: 0;color: white;}

</style>
