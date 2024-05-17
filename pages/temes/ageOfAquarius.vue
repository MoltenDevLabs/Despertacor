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
      <h3>Age of Aquarius</h3>
      <p>
        When the moon is in the seventh house <br />
        And jupiter aligns with mars <br />
        Then peace will guide the planets <br />
        And love will steer the stars <br />
        <br />
        This is the dawning of the age of aquarius <br />
        Age of aquarius <br />
        Aquarius <br />
        Aquarius <br />
        <br />
        Harmony and understanding <br />
        Sympathy and trust abounding <br />
        No more falsehoods or derisions <br />
        Golden living dreams of visions <br />
        <br />
        Mystic crystal revelation <br />
        And the mind's true liberation <br />
        Aquarius <br />
        Aquarius <br />
        <br />
        When the moon is in the seventh house <br />
        And jupiter aligns with mars <br />
        Then peace will guide the planets <br />
        And love will steer the stars <br />
        <br />
        This is the dawning of the age of aquarius <br />
        Age of aquarius <br />
        Aquarius, Aquarius <br />
        Aquarius, Aquarius <br />
        <br />
        Let the sunshine <br />
        Let the sunshine in <br />
        The sunshine in <br />
        (x3) <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/themeStore";
const themeStore = useThemeStore();
</script>

<style scoped></style>
