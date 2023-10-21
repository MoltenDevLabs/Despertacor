<template>
  <div class="relative">
    <div>
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
        I hate to leave you, but I really must say <br />
        Oh, goodnight sweetheart, goodnight <br />
        <br />
        Goodnight sweetheart, well, it's time to go <br />
        Goodnight sweetheart, well, it's time to go<br />
        I hate to leave you, but I really must say<br />
        Oh, goodnight sweetheart, goodnight<br />
        <br />
        Well, it's three o'clock in the morning<br />
        Baby, I just can't treat you right<br />
        Well, I hate to leave you, baby<br />
        Don't mean, maybe because I love you so<br />
        <br />
        Goodnight sweetheart, well, it's time to go<br />
        Goodnight sweetheart, well, it's time to go<br />
        I hate to leave you, but I really must say<br />
        Oh, goodnight, sweetheart, goodnight<br />
        <br />
        Mother and your father<br />
        Won't like it if I stay here too long<br />
        One kiss in the dark<br />
        And I'll be going, you know I hate to go<br />
        <br />
        Goodnight sweetheart, well, it's time to go<br />
        Goodnight sweetheart, well, it's time to go<br />
        I hate to leave you, but I really must say<br />
        Oh, goodnight, sweetheart, goodnight<br />
      </p>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/themeStore";
const themeStore = useThemeStore();
</script>

<style scoped></style>
