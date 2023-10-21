<template>
  <div>
    <h1 class="text-surface-300 font-semibold">
      Vine a
      <transition name="fade" mode="out-in">
        <span
          class="text-outline text-primary-500 font-bold"
          :key="words[currentWordIndex]"
          >{{ words[currentWordIndex] }}</span
        >
      </transition>
      <br />
      a la Coral MusSolidària
    </h1>
    <h2 class="text-surface-300 my-24 font-semibold text-2xl">
      Aqui trobaràs tot el que necessites per treure el màxim profit dels
      assajos.
    </h2>
  </div>
</template>

<script setup>
const words = ["Cantar", "Riure", "Aprendre", "Jugar", "Divertir-te"];
let currentWordIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
  }, 5000);
});
</script>

<style>
.text-outline {
  text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px black;
}
</style>
