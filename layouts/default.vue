<template>
  <div>
    <!-- MOBILE -->
    <div v-if="$device.isMobileOrTablet">
      <!-- HEADER START -->
      <!-- HEADER END -->

      <!-- CONTENT START -->
      <main class="mb-16">
        <slot />
      </main>
      <!-- CONTENT END -->

      <!-- FOOTER START -->
      <!--     <footer>
      <div class="absolute inset-x-0 bottom-0 flex justify-center border-t">
        <p class="text-xs tracking-wide mt-2 opacity-60">
          Made with<span
            class="material-icons-outlined align-text-bottom scale-[.8]"
            >local_fire_department</span
          >by MoltenDevLabs ©
        </p>
      </div>
    </footer> -->
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
        <!--         <div class="absolute inset-x-0 bottom-0 flex justify-end">
          <p class="text-xs tracking-wide m-4 opacity-60">
            Made with<span
              class="material-icons-outlined align-text-bottom scale-[.8]"
              >local_fire_department</span
            >by MoltenDevLabs ©
          </p>
        </div> -->
      </footer>
      <!-- FOOTER END -->
    </div>
    <!-- MOBILE -->

    <!-- DESKTOP -->
    <div v-else>
      <!-- HEADER START -->
      <header
        class="header mx-auto px-[10%] py-[2%] flex items-center justify-between"
      >
        <div class="flex gap-2 items-center">
          <nuxt-link to="/" @click="scrollToTop()">
            <nuxt-icon :name="'logoS'" title="Home" filled />
          </nuxt-link>
          <h5>Coral MusSolidària</h5>
        </div>
        <nav class="flex gap-4 items-center">
          <ul class="flex gap-12 text-lg uppercase tracking-widest my-4">
            <li><nuxt-link to="/" @click="scrollToTop()">HOME</nuxt-link></li>
            <li>
              <nuxt-link to="/temes" @click="scrollToTop()">CANÇONS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/artistes" @click="scrollToTop()"
                >ARTISTES</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/concerts" @click="scrollToTop()"
                >CONCERTS</nuxt-link
              >
            </li>
          </ul>
        </nav>
        <nav class="flex items-center">
          <button class="flex" @click="themeStore.toggleTheme()">
            <i
              class="material-icons-outlined theme-icon mx-8 scale-90"
              :class="{ 'border-surface-900': !themeStore.isDarkTheme }"
              :title="themeStore.isDarkTheme ? 'Light mode' : 'Dark mode'"
            >
              {{ themeStore.isDarkTheme ? "light_mode" : "dark_mode" }}
            </i>
          </button>
        </nav>
      </header>
      <!-- HEADER END -->

      <!-- CONTENT START -->
      <main>
        <slot />
      </main>
      <!-- CONTENT END -->

      <!-- FOOTER START -->
      <div>
        <footer
          class="relative mx-auto px-[10%] py-[6%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-cols-auto gap-2 justify-between border-t-2 border-surface-600 dark:border-surface-300"
        >
          <div class="col-span-full">
            <div class="flex gap-2 items-center">
              <nuxt-link to="/" @click="scrollToTop()">
                <nuxt-icon :name="'logoS'" title="Home" filled />
              </nuxt-link>
              <h5>Coral MusSolidària</h5>
            </div>
          </div>
          <div class="">
            <nav>
              <ul>
                <h6 class="font-bold text-xs lg:text-sm mb-2">Web map</h6>
                <li class="text-xs lg:text-sm">
                  <nuxt-link to="/" @click="scrollToTop()">Home</nuxt-link>
                </li>
                <li class="text-xs lg:text-sm">
                  <nuxt-link to="/temes" @click="scrollToTop()"
                    >Cançons</nuxt-link
                  >
                </li>
                <li class="text-xs lg:text-sm">
                  <nuxt-link to="/artistes" @click="scrollToTop()"
                    >Artistes</nuxt-link
                  >
                </li>
                <li class="text-xs lg:text-sm">
                  <nuxt-link to="/concerts" @click="scrollToTop()"
                    >Concerts</nuxt-link
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="absolute inset-x-0 bottom-0 flex justify-end">
            <p class="text-xs tracking-wide m-4 opacity-60">
              Made with<span
                class="material-icons-outlined align-text-bottom scale-[.8]"
                >local_fire_department</span
              >by MoltenDevLabs ©
            </p>
          </div>
        </footer>
      </div>
      <!-- FOOTER END -->
    </div>
    <!-- DESKTOP END -->
  </div>
</template>

<script setup>
import { useThemeStore } from "@/stores/themeStore";
const themeStore = useThemeStore();
const user = useSupabaseUser();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scooped></style>
