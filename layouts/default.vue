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
      <footer
        class="fixed bottom-0 mx-auto px-[4%] py-[4%] grid grid-cols-5 auto-cols-auto gap-2 justify-items-center border-t-2 border-surface-600 dark:border-surface-300"
      >
        <nuxt-link to="/" class="material-icons-outlined" @click="scrollToTop()"
          >home</nuxt-link
        >
        <nuxt-link
          to="/artistes"
          class="material-icons-outlined"
          @click="scrollToTop()"
          >diversity_1</nuxt-link
        >
        <nuxt-link
          to="/temes"
          class="material-icons-outlined"
          @click="scrollToTop()"
          >lyrics</nuxt-link
        >
        <nuxt-link
          to="/concerts"
          class="material-icons-outlined"
          @click="scrollToTop()"
          >photo_library</nuxt-link
        >
        <client-only>
          <nuxt-link
            :to="user ? '/perfil' : '/auth'"
            @click="scrollToTop()"
            class="material-icons-outlined"
          >
            {{ user ? "account_circle" : "login" }}
          </nuxt-link>
        </client-only>
      </footer>
      <!-- FOOTER END -->
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scooped></style>
