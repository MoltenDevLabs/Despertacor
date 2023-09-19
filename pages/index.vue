<template>
  <div>
    <!-- HERO SECTION -->
    <heroSectionBackground
      class="opacity-80 h-[34rem] absolute top-0 -mx-[6%] min-w-full"
    />
    <heroSection class="relative mb-40 md:mb-44 mt-20 md:mt-12" />
    <!-- SECTION ONE SECTION -->
    <!-- <sectionOneSection class="fade-in-effect mb-24" /> -->
    <!-- SECTION TWO SECTION -->
    <!-- <sectionTwoSection class="fade-in-effect mb-24" /> -->
    <!-- SECTION THREE SECTION-->
    <!-- <sectionThreeSection class="fade-in-effect mb-24" /> -->
    <!-- SECTION FOUR SECTION -->
    <!-- <sectionFourSection class="fade-in-effect" /> -->
  </div>
</template>

<script setup>
useFadeInEffect();

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>

<style></style>
