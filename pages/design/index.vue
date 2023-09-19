<template>
  <div>
    <h1>Design View</h1>
    <div class="grid grid-cols-3 gap-5 pt-4">
      <DesignCard
        v-for="(title, index) in titles"
        :key="index"
        :title="title"
        :imageSrc="imageSrc[index]"
      />
    </div>
  </div>
</template>

<script setup>
const titles = ["palette", "typography"];
const imageSrc = ["assets/images/palette.png", "assets/images/typography.webp"];
</script>

<style></style>
