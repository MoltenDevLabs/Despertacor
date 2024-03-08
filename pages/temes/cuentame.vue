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
      <h3>Cuéntame</h3>
      <p>
        Ioa ioae, ioa ioae <br />
        Ioa ioae, ioa ioae <br />
        <br />
        Cuentame que te paso <br />
        Cuentame que te paso <br />
        <br />
        Que estaba alla en la playa <br />
        Recorriendo las aguaritas <br />
        Y vino una abejita y me pico ay ay! <br />
        <br />
        Cuentame que te paso <br />
        Cuentame que te paso <br />
        <br />
        Yo me saque la loteria <br />
        Corriendo fui de romeria <br />
        Y fue alli donde to el dinero perderi <br />
        <br />
        Pero las dos vienen las dos pao pao <br />
        <br />
        Pao pao pao pao pao (chiquita) <br />
        Pao pao pao pao pao (senorita) <br />
        Pao pao pao pao pao <br />
        <br />
        Pero las dos vienen la colococota <br />
        E la la la la la la la la la pao pao <br />
        <br />
        Pao pao pao pao pao (chiquita) <br />
        Pao pao pao pao pao (senorita) <br />
        Pao pao pao pao pao <br />
        <br />
        Ioa ioae, ioa ioae <br />
        Ioa ioae, ioa ioae <br />
        <br />
        Cuentame que te paso <br />
        Cuentame que te paso <br />
        <br />
        Que estaba alla en la playa <br />
        Recorriendo las aguaritas <br />
        Y vino una abejita y me pico ay ay! <br />
        <br />
        Pero las dos vienen las dos pao pao <br />
        <br />
        Pao pao pao pao pao (chiquita) <br />
        Pao pao pao pao pao (senorita) <br />
        Pao pao pao pao pao <br />
        <br />
        Woo-ooh!
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
