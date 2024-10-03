<template>
  <div>
    <div v-if="$device.isDesktop">
      <desktopVersion />
    </div>
    <div v-else>
      <heroSection class="relative my-48" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'redirect'
})

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>

<style></style>
