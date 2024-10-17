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
      <h3>Quan Tot s'Enlaira</h3>
      <p>
        Vaig, estar temptant la sort <br />
        Mesurant les paraules <br />
        Vaig flotant entremig dels records <br />
        <br />
        I flotant, buscant el paradís <br />
        Retallant les distàncies <br />
        Que em transporten a un món indecís <br />
        <br />
        Però jo mai, mai <br />
        Mai, mai <br />
        Seré feliç <br />
        Com ho he estat aquesta nit <br />
        <br />
        Però jo mai, mai <br />
        Mai, mai <br />
        <br />
        Quan tot s'enlaira <br />
        Toco els somnis de puntetes <br />
        Junts, podem arribar més lluny <br />
        Més lluny <br />
        <br />
        Un llarg viatge <br />
        Il·lusions dins les maletes <br />
        Junts, podem arribar més lluny <br />
        Més lluny <br />
        <br />
        Vaig, flirtejant amb la por (uuh) <br />
        Navegant entre dubtes <br />
        Vaig somiant amb la teva escalfor <br />
        <br />
        I somiant, que tu remes amb mi <br />
        Fins que aquella incertesa <br />
        Es fon quan se'ns creuen els camins <br />
        <br />
        Però jo mai, mai <br />
        Mai, mai <br />
        <br />
        Seré feliç <br />
        Com ho he estat aquesta nit <br />
        <br />
        Però jo mai, mai <br />
        Mai, mai <br />
        <br />
        Quan tot s'enlaira <br />
        Toco els somnis de puntetes <br />
        Junts, podem arribar més lluny <br />
        Més lluny <br />
        <br />
        Un llarg viatge <br />
        Il·lusions dins les maletes <br />
        Junts, podem arribar més lluny <br />
        Més lluny <br />
        <br />
        Quan tot s'enlaira <br />
        Toco els somnis de puntetes <br />
        Junts, podem arribar més lluny <br />
        Més lluny <br />
        <br />
        Un llarg viatge <br />
        Il·lusions dins les maletes <br />
        Junts, podem arribar més lluny <br />
        Més lluny <br />
        <br />
        Quan tot s'enlaira
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
