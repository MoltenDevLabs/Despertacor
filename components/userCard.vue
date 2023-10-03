<template>
  <div
    class="card text-center transition-all duration-500 hover:scale-105 mb-8 relative"
    @click="$router.push(`/artistes/${nom}`)"
  >
    <img :src="imageSrc" class="m-0" alt="Some Image" />
    <button
      class="btn py-0 px-8 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
      @click="$router.push(`/artistes/${nom}`)"
    >
      {{ nom }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  nom: {
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
