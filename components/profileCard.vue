<template>
  <div class="card text-center mb-8 relative">
    <img :src="imageSrc" class="m-0" alt="Some Image" />
    <button
      class="btn py-0 px-8 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
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
