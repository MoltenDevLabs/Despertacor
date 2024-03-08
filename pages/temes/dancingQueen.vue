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
      <h3>Dancing Queen</h3>
      <p>
        You can dance <br />
        You can jive <br />
        Having the time of your life <br />
        Ooh, see that girl <br />
        Watch that scene <br />
        Digging the dancing queen <br />
        <br />
        Friday night and the lights are low <br />
        Looking out for a place to go <br />
        Where they play the right music <br />
        Getting in the swing <br />
        You come to look for a king <br />
        <br />
        Anybody could be that guy <br />
        Night is young and the music's high <br />
        With a bit of rock music <br />
        Everything is fine <br />
        You're in the mood for a dance <br />
        <br />
        And when you get the chance <br />
        <br />
        You are the dancing queen <br />
        Young and sweet <br />
        Only seventeen <br />
        Dancing queen <br />
        Feel the beat from the tambourine, oh yeah <br />
        <br />
        You can dance <br />
        You can jive <br />
        Having the time of your life | aaaaa.... <br />
        Ooh, see that girl <br />
        Watch that scene <br />
        Digging the dancing queen <br />
        <br />
        You're a teaser, you turn 'em on <br />
        Leave 'em burning and then you're gone <br />
        Looking out for another <br />
        Anyone will do <br />
        You're in the mood for a dance <br />
        <br />
        And when you get the chance <br />
        <br />
        You are the dancing queen <br />
        Young and sweet <br />
        Only seventeen <br />
        Dancing queen <br />
        Feel the beat from the tambourine, oh yeah <br />
        <br />
        You can dance <br />
        You can jive <br />
        Having the time of your life | aaaaa.... <br />
        Ooh, see that girl <br />
        Watch that scene <br />
        Digging the dancing queen <br />
        <br />
        Digging the dancing queen <br />
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
