<template>
  <div class="lightbox" @click.self="closeLightbox">

    <img :src="photoUrl(photo.filename)">

    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <p v-if="photo.title">{{ photo.title }}</p>
        <p v-if="photo.location">{{ photo.location }}</p>

      </div>
    </div>

   </div>
</template>

<script>

import photos from '@/photos.json';

export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },

  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },

  methods: {
    photoUrl(filename) {
      return require(`../images/${filename}`);
    },
    closeLightbox() {
      this.$router.push('/gallery');
    },
  }
};
</script>

<style>

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}

.lightbox img {
  margin: auto;
  max-width: 900px;
  max-height: 100%;
  /* grid-column-start: 2; */
  padding: 3rem;
}

.lightbox-info {
  margin: auto 2rem auto 0;
}

.lightbox-info-inner {
  background-color: none;
  color: white;
  display: inline-block;
  padding: 2rem;
}

</style>
