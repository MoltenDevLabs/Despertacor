<template>
  <div class="relative">
    <div>
      <button class="absolute top-0 right-12 z-50" @click="navigateTo()">
        <i class="material-icons-outlined theme-icon scale-90">arrow_back</i>
      </button>
      <button
        class="absolute top-0 right-2 z-50"
        @click="themeStore.toggleTheme()"
      >
        <i
          class="material-icons-outlined theme-icon scale-90"
          :class="{ 'border-surface-900': !themeStore.isDarkTheme }"
          :title="themeStore.isDarkTheme ? 'Light mode' : 'Dark mode'"
        >
          {{ themeStore.isDarkTheme ? "light_mode" : "dark_mode" }}
        </i>
      </button>
    </div>
    <div>
      <h3>Goodnight Sweetheart</h3>
      <p>
        Goodnight sweetheart, well, it's time to go <br />
        Goodnight sweetheart, well, it's time to go <br />
        I hate to leave you, but I really must say | aa-aa-aa-a <br />
        So, goodnight sweetheart, goodnight <br />
        <br />
        Goodnight sweetheart, well, it's time to go <br />
        Goodnight sweetheart, well, it's time to go <br />
        I hate to leave you, but I really must say | aa-aa-aa-a <br />
        So, goodnight sweetheart, goodnight <br />
        <br />
        Well, it's three o'clock in the morning | aaaa-aaaa <br />
        Baby, just can't treat you right | aaaa-aaaa <br />
        Well, I hate to leave you, baby | aa <br />
        But don't mean maybe, you know I love you so <br />
        <br />
        Goodnight sweetheart, well, it's time to go <br />
        Goodnight sweetheart, well, it's time to go <br />
        I hate to leave you, but I really must say | aa-aa-aa-a <br />
        So, goodnight sweetheart, goodnight <br />
        <br />
        Goodnight sweetheart, well, it's time to go <br />
        Goodnight sweetheart, well, it's time to go <br />
        I hate to leave you, but I really must say | aa-aa-aa-a <br />
        So, goodnight sweetheart, goodnight <br />
        <br />
        Mother, ooh and your father | aaaa-aaaa <br />
        Won't like it if I stay here too long | aaaa-aaaa <br />
        One kiss in the dark | aa <br />
        And I'll be going, you know I hate to go <br />
        <br />
        Goodnight sweetheart, well, it's time to go <br />
        Goodnight sweetheart, well, it's time to go <br />
        I hate to leave you, but I really must say | aa-aa-aa-a <br />
        So, goodnight sweetheart, goodnight <br />
        <br />
        So, goodnight sweetheart, goodnight ... ... <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/themeStore";
import { useRouter } from 'vue-router';

const themeStore = useThemeStore();
const router = useRouter();

const navigateTo = () => {
  router.push("/temes");
}
</script>

<style scoped></style>
