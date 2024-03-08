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
      <h3>Que Tinguem Sort</h3>
      <p>
        Si em dius "adeu" <br />
        Vull que el dia sigui net i clar <br />
        Que cap ocell <br />
        Trenqui l'harmonia del seu cant <br />
        <br />
        Que tinguis sort <br />
        I que trobis el que t'ha mancat <br />
        En mi <br />
        <br />
        Si em dius "et vull" <br />
        Que el sol faci el dia molt més llarg <br />
        I així, robar <br />
        Temps al temps d'un rellotge aturat <br />
        <br />
        Que tinguem sort <br />
        Que trobem tot el que ens va mancar <br />
        Ahir <br />
        <br />
        I així pren <br />
        I així pren <br />
        Tot el fruit que et pugui donar <br />
        El camí que, a poc a poc, escrius <br />
        Per a demà <br />
        <br />
        Que demà <br />
        Que demà <br />
        Mancarà el fruit de cada pas <br />
        Per això, malgrat la boira, cal <br />
        Caminar <br />
        <br />
        Ah, ah-ah-ah <br />
        Ah-ah <br />
        Ah, ah-ah-ah <br />
        Ah-ah <br />
        <br />
        Si vens amb mi <br />
        No demanis un camí planer <br />
        Ni estels d'argent <br />
        Ni un demà ple de promeses, sols <br />
        <br />
        Un poc de sort <br />
        I que la vida ens doni un camí <br />
        Ben llarg <br />
        <br />
        I així pren <br />
        I així pren <br />
        Tot el fruit que et pugui donar <br />
        El camí que, a poc a poc, escrius <br />
        Per a demà <br />
        <br />
        Que demà <br />
        Que demà <br />
        Mancarà el fruit de cada pas <br />
        Per això, malgrat la boira, cal <br />
        Caminar
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
