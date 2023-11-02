<template>
  <div>
    <div v-if="$device.isDesktop">
      <desktopVersion />
    </div>
    <div v-else>
      <heroSectionBackground
        class="h-screen absolute top-0 -mx-[6%] min-w-full overflow-hidden"
      />
      <heroSection class="relative my-48" />
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>

<style></style>
