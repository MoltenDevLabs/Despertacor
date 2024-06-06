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
      <h3>Compta amb mi</h3>
      <p>
        Compta amb mi en l'últim sospir de la nit <br />
        I en el primer alè del dia <br />
        Als teus llavis, quan badallis <br />
        Compta amb mi <br />
        <br />
        Compta amb mi, quan s'oxidin els dies <br />
        I si la boira entela els vidres <br />
        Dels teus somnis, quan no els trobis <br />
        Compta amb mi <br />
        <br />
        I tu i jo, en la ciutat gelada <br />
        Desfent la neu a dins dels teus llençols <br />
        I tu i jo, fins que se't curin les ales <br />
        Jo seré aquí espantant els teus malsons <br />
        <br />
        Compta amb mi en els dies de lluita <br />
        I si l'esperança et descuida <br />
        Als mals passos hi haurà uns braços <br />
        Compta amb mi <br />
        <br />
        I tu i jo, en la ciutat gelada <br />
        Desfent la neu a dins dels teus llençols <br />
        I tu i jo, fins que se't curin les ales <br />
        Jo seré aquí espantant els teus malsons <br />
        <br />
        I tu i jo, en la ciutat gelada <br />
        Desfent la neu a dins dels teus llençols <br />
        I tu i jo, fins que se't curin les ales <br />
        Jo seré aquí espantant els teus malsons <br />
Compta amb mi 
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
