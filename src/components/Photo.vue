<template>
  <div class="lightbox" @click.self="closeLightbox">

    <!-- <img :src="photoUrl(photo.filename)"> -->

    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="photoUrl(photo.filename)" />
      </div>
    </transition-group>

    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <p v-if="photo.title">{{ photo.title }}</p>
        <p v-if="photo.location">{{ photo.location }}</p>
      </div>
    </div>

    <a class="prev" @click="prev" href="#">&#10094;</a>
    <a class="next" @click="next" href="#">&#10095;</a>

   </div>
</template>

<script>

import photos from '@/photos.json';

export default {
  name: 'Photo',
  data() {
    return {
      photos,
      currentIndex: 0,

    };
  },

  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },

    currentImg: function() {
      return this.photos[Math.abs(this.currentIndex) % this.photos.length];
    }


  },

  methods: {
    photoUrl(filename) {
      return require(`../images/photography/${filename}`);
    },
    closeLightbox() {
      this.$router.push('/gallery');
    },


    //how to make the below loop through the json?

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }

  },

};
</script>

<style>

@media (min-width: 768px), all {
  .lightbox-info .lightbox img .lightbox {
    position: absolute;
    left: 50%;
    text-align: left;
    transform: translatex(-50%);
  }
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
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


.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

</style>
