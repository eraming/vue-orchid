<template>
  <div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
    <router-link :to="`/photo/${photo.id}`">
      <img :src="thumbUrl(photo.filename)">
    </router-link>
    </div>
  </div>
</template>

<script>
import photos from '@/photos.json';

export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },

  methods: {
    thumbUrl(filename) {
      return require(`../images/photography/thumbnails/${filename}`);
    },
  },
};
</script>

<style scoped>


  @media (min-width: 768px), all {
    .gallery-panel img {
      display: flex;
      max-width: 50rem;
    }
  }

  .gallery {
    display: flex;
    flex-flow: wrap;
    grid-gap: 1rem;
    max-width: 100rem;
    margin: 4rem auto;
    padding: 0 7rem;
  }
  .gallery-panel img {
    width: 100%;
    height: 15vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }


</style>
