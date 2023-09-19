<template>
  <div>
    <div class="grid grid-cols-2 gap-4 pt-4">
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
