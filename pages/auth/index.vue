<template>
  <div>
    <h2 class="mt-40">Entra amb el teu compte de Google</h2>
    <div class="flex justify-center my-12">
      <button
        class="px-4 py-2 border flex items-center gap-2 border-slate-900 dark:border-slate-200 rounded-lg text-slate-700"
        @click="signInWithGoogle()"
      >
        <img
          class="w-6 h-6 m-0"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span class="text-surface-900 dark:text-surface-200"
          >Entra amb Google</span
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();

const signInWithGoogle = () => {
  userStore.signInWithGoogle();
};
</script>

<style scoped></style>
