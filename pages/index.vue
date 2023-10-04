<template>
  <div>
    <heroSectionBackground
      class="h-[34rem] absolute top-0 -mx-[6%] min-w-full"
    />
    <heroSection class="relative mb-80 md:mb-44 mt-20 md:mt-12" />
    <sectionOne class="my-24" />
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
