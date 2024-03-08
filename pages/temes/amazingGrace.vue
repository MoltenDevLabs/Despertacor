<template>
  <div class="relative">
    <div>
      <button class="absolute top-0 right-12 z-50" @click="navigateTo()">
        <i class="material-icons-outlined theme-icon scale-90"
        :class="{ 'border-surface-900': !themeStore.isDarkTheme }">arrow_back</i>
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
      <h3>Amazing Grace</h3>
      <p>
        Amazing grace how sweet the sound <br />
        That saved a wretch like me <br />
        I once was lost, but now I'm found <br />
        Was blind but now I see <br />
        <br />
        'Twas grace that taught my heart to fear <br />
        And grace my fears relieved <br />
        How precious did that grace appear <br />
        The hour I first believed <br />
        <br />
        Through many dangers, toils, and snares <br />
        I have already come <br />
        This grace that brought me safe thus far <br />
        And grace will lead me home <br />
        <br />
        When we've been here ten thousand years <br />
        Bright, shining as the sun <br />
        We've no less days to sing God's praise <br />
        Than when we first begun <br />
        <br />
        Amazing grace how sweet the sound <br />
        That saved a wretch like me <br />
        I once was lost, but now I'm found <br />
        Was blind but now I see
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
