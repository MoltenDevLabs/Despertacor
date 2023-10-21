<template>
  <div
    class="card text-center mb-8 relative"
    @click="$router.push(`/artistes/${profile.id}`)"
  >
    <img :src="profile.image_url" class="m-0" alt="Some Image" />
    <button
      class="btn py-0 px-2 w-full absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full"
      @click="$router.push(`/artistes/${profile.id}`)"
    >
      {{ profile.username }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  profile: Object,
});
</script>

<style scoped></style>
