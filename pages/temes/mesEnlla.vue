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
      <h3>Més Enllà</h3>
      <p>
        Més enllà dels teus problemes,<br />
        més enllà d'aquesta pena<br />
        hi ha un lloc feliç,<br />
        només has de provar a endinsar-t'hi.<br />
        <br />
        Pots ser el mal i la recepta, <br />
        ets la corba i la drecera. <br />
        A dintre teu hi ha un paradís per descobrir-lo. <br />
        No busquis regles <br />
        que tots els camins porten cap a tu. <br />
        Ets la ruta i el destí, tan sols cal mirar endins. <br />
        Tots som nit i tots matí perduts al paradís. <br />
        Pren el teu temps, busca el moment, <br />
        que mai no és tard per descobrir-te. <br />
        <br />
        Pot ser pou on tot s´ofega, <br />
        o bé font d'on creixi l´herba. <br />
        Tenir o donar, sentir o insensibilitzar-te. <br />
        Ets la llum del teu planeta, <br />
        ets qui té la teva adreça, <br />
        un univers que és dins de la teva consciència. <br />
        Dreceres incertes, dubtes que m´arrosseguen, <br />
        sentits que em fan somriure i creure en quimeres. <br />
        <br />
        Més enllà dels teus problemes,<br />
        més enllà d'aquesta pena<br />
        hi ha un lloc feliç,<br />
        només has de provar a endinsar-t'hi.<br />
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
