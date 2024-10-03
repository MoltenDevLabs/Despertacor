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
      <h3>Correllengua</h3>
      <p>
        Diuen aqueta i aquet, <br />
        és l'esperit ganxet <br />
        que t'empaita per la plaça <br />
        pilla al bou i a la Mulassa <br />
        <br />
        Diuen siroll i en sec, <br />
        que no pari aquest batec <br />
        que no pari aquesta fenya <br />
        i esmolem ben bé les enyes <br />
        <br />
        io io <br />
        Xalem com un moixó <br />
        piula la paraula d'un poble a cada racó <br />
        <br />
        io io <br />
        Xalem com un moixó <br />
        vola dient hola i per tothom <br />
        <br />
        Corre la llengua i corres tu (corres tu) <br />
        i comença el viatge <br />
        mai més un missatge perdut <br />
        <br />
        Corre la llengua i corres tu (corres tu) <br />
        i comença el viatge <br />
        mai més un missatge perdut <br />
        <br />
        Corre la llengua i corres tu <br />
        <br />
        Naltros diem torreta, fumera, <br />
        ferrada, aubergínia, romanço, radere <br />
        Naltros diem electra, senalla... <br />
        Dingú com la iaia fa aqueta samfanya <br />
        <br />
        io io <br />
        Xalem com un moixó <br />
        piula la paraula d'un poble a cada racó <br />
        <br />
        io io <br />
        Xalem com un moixó <br />
        vola dient hola per tothom <br />
        <br />
        Corre la llengua i corres tu (corres tu) <br />
        i comença el viatge <br />
        mai més un missatge perdut <br />
        <br />
        Corre la llengua i corres tu (corres tu) <br />
        i comença el viatge <br />
        mai més un missatge perdut <br />
        <br />
        Corre la llengua i corres tu <br />
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
