<template>
  <div class="card text-center transition-all duration-500 hover:scale-105">
    <img :src="imageSrc" alt="Some Image" />
    <nuxt-link :to="`/design/${title}`">
      <button class="btn mb-4">View {{ title }}</button>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
