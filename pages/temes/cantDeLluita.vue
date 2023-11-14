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
      <h3>Cant de Lluita</h3>
      <p>
        Som en acte de protesta <br />
        Som mans fredes vora el foc <br />
        Som la veu de la revolta <br />
        Netes de la por i el dol <br />
        <br />
        Disfressades d'utopia <br />
        Emprendrem lluny del dolor <br />
        La recerca de la vida <br />
        A cavall de la raó <br />
        <br />
        Som en acte de protesta <br />
        Som mans fredes vora el foc <br />
        Som la veu de la revolta <br />
        Netes de la por i el dol <br />
        <br />
        Coincideixen les mirades <br />
        Fixades en l'horitzó <br />
        Potser avui farem victoria <br />
        Potser enterrarem el plor <br />
        <br />
        Som en acte de protesta <br />
        Som mans fredes vora el foc <br />
        Som la veu de la revolta <br />
        Netes de la por i el dol <br />
        <br />
        Doncs ens mantindrem alçades <br />
        Ja no ens veuran de genolls <br />
        El sol mantindrà la flama <br />
        La lluna encendrà passió <br />
        <br />
        Som en acte de protesta | en acte de protesta <br />
        Som mans fredes vora el foc | mans fredes vora el foc <br />
        Som la veu de la revolta | la veu de la revolta <br />
        Netes de la por i el dol | la por i el dol ... ... <br />
        <br />
        Som <br />
      </p>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/themeStore";
const themeStore = useThemeStore();
</script>

<style scoped></style>
