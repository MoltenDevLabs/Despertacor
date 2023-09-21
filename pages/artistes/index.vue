<template>
  <div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-4"
    >
      <DesignCard
        v-for="(nom, index) in noms"
        :key="index"
        :nom="nom"
        :imageSrc="imageSrc[index]"
      />
    </div>
  </div>
</template>

<script setup>
const noms = [
  "Noe",
  "Cantant 1",
  "Cantant 2",
  "Cantant 3",
  "Cantant 4",
  "Cantant 5",
];
const imageSrc = [
  "assets/images/mussol1.png",
  "assets/images/mussol2.png",
  "assets/images/mussol3.png",
  "assets/images/mussol4.png",
  "assets/images/mussol5.png",
  "assets/images/mussol6.png",
];
</script>

<style></style>
