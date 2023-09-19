<template>
  <div class="relative w-full h-full overflow-hidden z-20">
    <circles-background-animation></circles-background-animation>
    <div
      class="grid place-items-stretch h-fit relative z-10"
      :class="showModal ? 'bg-modal' : ''"
    >
      <div class="auth-card">
        <div v-if="loading" class="flex justify-center">
          <h2 class="section-title m-2">
            <span
              class="material-icons-outlined animate-pulse relative mx-2 pt-1 align-top"
              >volcano</span
            >
            SIGN UP
            <span
              class="material-icons-outlined animate-pulse relative mx-2 pt-1 align-top"
              >volcano</span
            >
          </h2>
        </div>
        <div v-else class="flex justify-center">
          <h2 class="section-title m-2">SIGN UP</h2>
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
        <form @submit.prevent="validateFormSignUp()" class="py-4">
          <div class="py-2">
            <label for="email" class="text-sm">Email</label>
            <input
              id="email"
              class="inp"
              :class="inpEmailError ? 'inp-error' : ''"
              type="text"
              v-model="email"
              placeholder="moltendev@labs.com"
              autocomplete="current-email"
            />
            <p v-if="inpEmailError" class="inp-error-text">Invalid email</p>
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
                :class="inpPasswordError ? 'inp-error-field' : ''"
                :type="isVisible ? 'text' : 'password'"
                v-model="password"
                placeholder="password"
                autocomplete="current-password"
              />
            </div>
            <p v-if="inpPasswordError" class="inp-error-text">
              Password must be 8 characters or more, contain at least one
              lowercase letter, one uppercase letter, one number, and one symbol
              (!@#$%^&*())
            </p>
          </div>
          <div class="py-4">
            <label for="passwordTwo" class="text-sm">Confirm password</label>
            <div class="flex relative">
              <i
                @click="toggleVisibility()"
                class="absolute material-icons-outlined top-1/2 transform -translate-y-1/2 z-10 cursor-pointer right-2 text-surface-900"
              >
                {{ isVisible ? "visibility_off" : "visibility" }}
              </i>
              <input
                id="passwordTwo"
                class="inp"
                :class="inpPasswordTwoError ? 'inp-error-field' : ''"
                :type="isVisible ? 'text' : 'password'"
                v-model="passwordTwo"
                placeholder="confirm password"
                autocomplete="current-password"
              />
            </div>
            <p v-if="inpPasswordTwoError" class="inp-error-text">
              Passwords must be equal
            </p>
          </div>
          <div class="py-4">
            <input
              id="rememeber"
              class="accent-tertiary-500"
              checked
              type="checkbox"
              v-model="remember"
            />
            <label for="remember" class="px-2 text-sm">Remember me</label>
          </div>
          <div class="py-2 w-full text-right">
            <button class="btn w-full" type="submit">SIGN IN</button>
          </div>
        </form>
        <div class="flex flex-col items-center justify-center pt-2">
          <p class="m-0 text-center text-sm">Have an account?</p>
          <nuxt-link to="/auth">
            <button class="btn-text">Log in</button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <transition name="pop">
      <div v-if="showModal" class="modal">
        <h1>Thanks for joining!</h1>
        <p>Check your email to confirm your registration</p>
        <button @click="closeModal()" class="btn">Ok</button>
      </div>
    </transition>
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
  }, 1000);
});

onBeforeUnmount(() => {
  if (themeStore.previousTheme !== null) {
    themeStore.isDarkTheme = themeStore.previousTheme;
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", themeStore.isDarkTheme);
    rootElement.classList.toggle("light", !themeStore.isDarkTheme);
  }
});

const inpEmailError = ref(false);
const inpPasswordError = ref(false);
const inpPasswordTwoError = ref(false);
const email = ref("");
const password = ref("");
const passwordTwo = ref("");

const validateFormSignUp = () => {
  inpEmailError.value = false;
  inpPasswordError.value = false;
  inpPasswordTwoError.value = false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    inpEmailError.value = true;
  }
  /* Regex for 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol (!@#$%^&*()) */
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    inpPasswordError.value = true;
  }
  if (password.value !== passwordTwo.value) {
    inpPasswordTwoError.value = true;
  }
  if (
    !inpEmailError.value &&
    !inpPasswordError.value &&
    !inpPasswordTwoError.value
  ) {
    handleSignUp();
  }
};

const loading = ref(false);
const remember = ref(false);
const handleSignUp = async () => {
  try {
    const userData = {
      email: email.value,
      password: password.value,
    };
    loading.value = true;
    await userStore.signUp(userData);
    await userStore.rememberMe();
    email.value = "";
    password.value = "";
    showModal.value = true;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const isVisible = ref(false);
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const showModal = ref(false);
const closeModal = () => {
  showModal.value = false;
  router.push("/");
};
</script>

<style scooped></style>
