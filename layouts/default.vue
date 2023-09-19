<template>
  <div>
    <!-- HEADER START -->
    <div v-if="$device.isMobileOrTablet">
      <header class="mx-auto px-[10%] flex items-center justify-between">
        <nuxt-link to="/" @click="scrollToTop()">
          <nuxt-icon
            :name="
              themeStore.isDarkTheme ? 'logo-text-white' : 'logo-text-black'
            "
            filled
          />
        </nuxt-link>
        <ul>
          <button
            class="btn p-1 border border-surface-900 dark:border-surface-200 flex flex-col justify-center items-center group"
            @click="openMenu()"
          >
            <div
              :class="`${hamburgerMenuLine} ${
                navMenu
                  ? 'rotate-45 translate-y-1.5 group-hover:opacity-100'
                  : 'group-hover:opacity-100'
              }`"
            ></div>
            <div
              :class="`${hamburgerMenuLine} ${
                navMenu ? 'opacity-0' : 'group-hover:opacity-100'
              }`"
            ></div>
            <div
              :class="`${hamburgerMenuLine} ${
                navMenu
                  ? '-rotate-45 -translate-y-1.5 group-hover:opacity-100'
                  : 'group-hover:opacity-100'
              }`"
            ></div>
          </button>
        </ul>
      </header>
      <header
        class="absolute top-[68px] min-w-full h-0 z-10 overflow-hidden transition-all ease-out duration-500"
        :class="navMenu ? 'h-80 opacity-90' : 'h-0'"
      >
        <ul class="flex flex-col items-center p-0 uppercase tracking-widest">
          <button
            class="absolute top-3 mx-[10%] flex place-self-end"
            @click="themeStore.toggleTheme()"
          >
            <i
              class="material-icons-outlined theme-icon scale-75"
              :class="{ 'border-surface-900': !themeStore.isDarkTheme }"
              :title="themeStore.isDarkTheme ? 'Light mode' : 'Dark mode'"
            >
              {{ themeStore.isDarkTheme ? "light_mode" : "dark_mode" }}
            </i>
          </button>
          <li><nuxt-link to="/" @click="scrollToTop()">HOME</nuxt-link></li>
          <li>
            <nuxt-link to="/about" @click="scrollToTop()">ABOUT</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" @click="scrollToTop()">CONTACT</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/design" @click="scrollToTop()">DESIGN</nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="user ? '/profile' : '/auth'"
              @click="scrollToTop()"
              class="btn"
            >
              {{ user ? "PROFILE" : "LOG IN" }}
            </nuxt-link>
          </li>
        </ul>
      </header>
    </div>

    <div v-else>
      <header
        class="header mx-auto px-[10%] py-[2%] flex items-center justify-between"
      >
        <nuxt-link to="/" class="">
          <nuxt-icon
            :name="
              themeStore.isDarkTheme ? 'logo-text-white' : 'logo-text-black'
            "
            title="Home"
            filled
          />
        </nuxt-link>
        <nav class="flex gap-4 items-center">
          <ul class="flex gap-12 text-lg uppercase tracking-widest my-4">
            <li><nuxt-link to="/" @click="scrollToTop()">HOME</nuxt-link></li>
            <li>
              <nuxt-link to="/about" @click="scrollToTop()">ABOUT</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" @click="scrollToTop()"
                >CONTACT</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/design" @click="scrollToTop()">DESIGN</nuxt-link>
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
          <ul>
            <li>
              <nuxt-link
                :to="user ? '/profile' : '/auth'"
                @click="scrollToTop()"
                class="btn"
              >
                {{ user ? "PROFILE" : "LOG IN" }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <!-- HEADER END -->

    <!-- CONTENT START -->
    <main :class="navMenu ? 'blur-sm' : ''">
      <slot />
    </main>
    <!-- CONTENT END -->

    <!-- FOOTER START -->
    <div>
      <footer
        class="relative mx-auto px-[10%] py-[6%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-cols-auto gap-2 justify-between border-t-2 border-surface-600 dark:border-surface-300"
      >
        <div class="col-span-full">
          <nuxt-link to="/" @click="scrollToTop()">
            <nuxt-icon
              :name="
                themeStore.isDarkTheme ? 'logo-text-white' : 'logo-text-black'
              "
              title="Home"
              filled
            />
          </nuxt-link>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">Web map</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/" @click="scrollToTop()">Home</nuxt-link>
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/about" @click="scrollToTop()">About</nuxt-link>
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/contact" @click="scrollToTop()"
                  >Contact</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/design" @click="scrollToTop()"
                  >Design</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/auth" @click="scrollToTop()">Log in</nuxt-link>
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/auth/signup" @click="scrollToTop()"
                  >Sign up</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/profile" @click="scrollToTop()"
                  >Profile</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">Check my work</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/contact" @click="scrollToTop()"
                  >Contact</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">Auth Links</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/auth" @click="scrollToTop()">Log in</nuxt-link>
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/auth/signup" @click="scrollToTop()"
                  >Sign up</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">User Links</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/profile" @click="scrollToTop()"
                  >Profile</nuxt-link
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
</template>

<script setup>
const hamburgerMenuLine =
  "h-0.5 w-5 my-0.5 rounded-full bg-surface-900 dark:bg-surface-200 transition ease transform duration-500";

import { useThemeStore } from "@/stores/themeStore";
const themeStore = useThemeStore();
const user = useSupabaseUser();

const navMenu = ref(false);
const openMenu = () => {
  navMenu.value = !navMenu.value;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  navMenu.value = false;
};
</script>

<style scooped></style>
