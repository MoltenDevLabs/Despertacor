<template>
  <div class="">
    <h1 class="font-semibold sm:text-5xl lg:text-6xl">
      Web de la Coral MusSolidària
    </h1>
    <h2 class="my-16 md:my-20 font-semibold text-xl">
      Recurs per trobar les lletres, coneixer les artistes i més
    </h2>
    <div class="flex my-8">
      <nuxt-link to="/temes">
        <button class="btn dark:text-surface-300">Cançons</button>
      </nuxt-link>
      <nuxt-link to="/artistes">
        <button class="btn ml-4 dark:text-surface-300 dark:border-surface-300">
          Artistes
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
