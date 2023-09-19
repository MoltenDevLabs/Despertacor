<template>
  <div class="relative w-full h-full overflow-hidden z-20">
    <circles-background-animation></circles-background-animation>
    <div class="grid place-items-stretch h-fit relative z-10">
      <div class="auth-card">
        <div v-if="loading" class="flex justify-center">
          <h2 class="section-title m-2">
            <span
              class="material-icons-outlined animate-pulse relative mx-2 pt-1 align-top"
              >volcano</span
            >
            LOG IN
            <span
              class="material-icons-outlined animate-pulse relative mx-2 pt-1 align-top"
              >volcano</span
            >
          </h2>
        </div>
        <div v-else class="flex justify-center">
          <h2 class="section-title m-2">LOG IN</h2>
        </div>
        <div>
          <nuxt-link
            to="/"
            class="material-icons-outlined absolute top-2 left-3 sm:top-4 sm:left-5"
            title="Home"
            ><button class="btn-text rounded-full scale-125 w-8 h-8 p-0">
              arrow_back
            </button></nuxt-link
          >
        </div>
        <form @submit.prevent="handleSignIn()" class="py-4">
          <div class="py-2">
            <label for="email" class="text-sm">Email</label>
            <input
              id="email"
              class="inp"
              :class="inpError ? 'inp-error-field' : ''"
              type="text"
              v-model="email"
              placeholder="moltendev@labs.com"
              autocomplete="current-email"
            />
          </div>
          <div class="py-4">
            <label for="password" class="text-sm">Password</label>
            <div class="flex relative">
              <i
                @click="toggleVisibility()"
                class="absolute material-icons-outlined top-1/2 transform -translate-y-1/2 z-10 cursor-pointer right-2 text-surface-900"
              >
                {{ isVisible ? "visibility_off" : "visibility" }}
              </i>
              <input
                id="password"
                class="inp"
                :class="inpError ? 'inp-error-field' : ''"
                :type="isVisible ? 'text' : 'password'"
                v-model="password"
                placeholder="password"
                autocomplete="current-password"
              />
            </div>
            <p v-if="inpError" class="inp-error-text">Invalid credentials</p>
          </div>
          <div class="py-4">
            <input
              id="remember"
              class="accent-tertiary-500"
              checked
              type="checkbox"
              v-model="remember"
            />
            <label for="remember" class="px-2 text-sm">Remember me</label>
          </div>
          <div class="py-2 w-full text-right">
            <button class="btn w-full" type="submit">LOG IN</button>
          </div>
        </form>
        <div class="flex flex-col items-center justify-center pt-2">
          <p class="m-0 text-center text-sm">Don't have an account?</p>
          <nuxt-link to="/auth/signup">
            <button class="btn-text">Sign up</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
import { useThemeStore } from "@/stores/themeStore";
const userStore = useUserStore();
const themeStore = useThemeStore();
const router = useRouter();

definePageMeta({
  layout: "auth",
});

onMounted(() => {
  themeStore.toggleAndSetPreviousTheme();
  setTimeout(() => {
    const middlePosition =
      document.body.scrollHeight / 2 - window.innerHeight / 2;
    window.scrollTo({ top: middlePosition, behavior: "smooth" });
    document.body.classList.add("disable-scrolling");
  }, 1000);
});

onBeforeUnmount(() => {
  // When leaving the auth page, revert to the previous theme
  if (themeStore.previousTheme !== null) {
    themeStore.isDarkTheme = themeStore.previousTheme;
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", themeStore.isDarkTheme);
    rootElement.classList.toggle("light", !themeStore.isDarkTheme);
  }
  document.body.classList.remove("disable-scrolling");
});

// PROBAR SENSE SETTIMEOUT AMB BONA CONEXIO
/* onMounted(() => {
  const middlePosition =
    document.body.scrollHeight / 2 - window.innerHeight / 2;
  window.scrollTo({ top: middlePosition, behavior: "instant" });
}); */

const inpError = ref(false);
const loading = ref(false);
const remember = ref(false);
const email = ref("");
const password = ref("");

const handleSignIn = async () => {
  try {
    inpError.value = false;
    const userData = {
      email: email.value,
      password: password.value,
    };
    loading.value = true;
    await userStore.signIn(userData);
    await userStore.rememberMe();
    router.push("/");
    email.value = "";
    password.value = "";
  } catch (error) {
    inpError.value = true;
  } finally {
    loading.value = false;
  }
};

const isVisible = ref(false);
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style>
.disable-scrolling {
  overflow: hidden;
}
</style>
