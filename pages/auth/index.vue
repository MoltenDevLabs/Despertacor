<template>
  <div>
    <h2>Entra amb el teu compte de Google</h2>
    <button @click="signInWithGoogle()" class="btn">Entra</button>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const router = useRouter();

const signInWithGoogle = () => {
  userStore.signInWithGoogle();
  router.push("/");
};
</script>

<style scoped></style>
