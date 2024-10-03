<template>
  <div v-if="$device.isDesktop">
    <main>
      <slot />
    </main>
  </div>
  <div v-else>
    <div>
      <!-- HEADER START -->
      <!-- HEADER END -->

      <!-- CONTENT START -->
      <main class="mb-16">
        <slot />
      </main>
      <!-- CONTENT END -->

      <!-- FOOTER START -->
      <!-- FOOTER END -->
    </div>
  </div>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scooped></style>
