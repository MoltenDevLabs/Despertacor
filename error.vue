<template>
  <article class="m-auto prose prose-stone dark:prose-invert">
    <div class="mt-7 text-center">
      <h2 class="mt-7 text-7xl font-bold">{{ error.statusCode }}</h2>
      <p class="mt-7 text-6xl">
        Oops! Hi ha hagut un error! Recorda que és una pàgina en construcció.
      </p>
      <p class="mt-7">{{ error.message }}</p>
      <button class="btn my-7" @click="handleClearError()">
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
