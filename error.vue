<template>
  <article class="m-auto prose prose-stone dark:prose-invert">
    <div class="mt-8 text-center">
      <p class="mb-0 text-6xl font-bold">ERROR</p>
      <h2 class="mt-2 text-6xl font-bold">{{ error.statusCode }}</h2>
      <p class="mt-8 mx-2 text-4xl">
        Oops! Hi ha hagut un error! Recorda que és una pàgina en construcció.
      </p>
      <p class="mt-8">{{ error.message }}</p>
      <button class="btn my-8" @click="handleClearError()">
        Tornar a Home
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
