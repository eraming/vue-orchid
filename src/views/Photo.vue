<template>
  <div>
    <Gallery />
    <Photo />
  </div>
</template>

<script>
import Photo from '@/components/Photo.vue';
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'photo',
  components: {
    Photo,
    Gallery,
  },
};
</script>
