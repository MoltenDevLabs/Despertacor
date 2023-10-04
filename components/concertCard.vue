<template>
  <div>
    <div
      class="border outline-offset-0 rounded-lg shadow shadow-slate-800/40 dark:shadow-slate-300/40"
      @click="$router.push(`/concerts/${concert}`)"
    >
      <div class="mb-0">
        <img
          class="m-0 rounded-t-lg"
          :src="fotoConcert"
          alt="Foto del concert"
        />
      </div>
      <div class="bg-primary-400 dark:bg-primary-500 mt-0 rounded-b-lg">
        <h4 class="mt-0 pt-4 px-4">{{ concert }}</h4>
        <p class="mb-0 pb-4 px-4">{{ descripcioConcert }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  concert: {
    type: String,
    required: true,
  },
  descripcioConcert: {
    type: String,
    required: true,
  },
  fotoConcert: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
