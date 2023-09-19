<template>
  <div>
    <div class="flex items-start justify-end">
      <button
        @click="userStore.editProfile()"
        class="btn material-icons-outlined mx-2 p-1"
        :title="userStore.editing ? 'Save' : 'Edit'"
      >
        {{ userStore.editing ? "save" : "edit" }}
      </button>
      <nuxt-link
        to="/"
        @click="userStore.signOut()"
        class="btn material-icons-outlined no-underline p-1"
        title="Log out"
        v-bind:exact="true"
      >
        logout
      </nuxt-link>
    </div>
    <div class="flex">
      <div class="rounded-full relative">
        <img
          src="assets/icons/logo.png"
          alt="Profile picture"
          class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 m-4 object-cover rounded-full outline outline-1 outline-offset-0 outline-surface-900 dark:outline-surface-50"
          :class="userStore.editing ? 'brightness-50 opacity-80' : ''"
        />
        <div
          class="absolute inset-0 flex items-center justify-center rounded-full"
        >
          <!-- The function "changeProfilePicture()" isn't done -->
          <!--           <i
            v-if="userStore.editing"
            class="btn-text text-surface-300 dark:text-surface-900 outline-none shadow-none p-1 material-icons-outlined bg-surface-900 dark:dark:bg-surface-300"
            @click="changeProfilePicture()"
          >
            edit
          </i> -->
        </div>
      </div>
      <div class="flex flex-col align-bottom justify-end">
        <input
          v-if="userStore.editing"
          v-model="userStore.editedUsername"
          class="inp py-0 md:mb-1.5 lg:mb-2 max-w-[8rem] md:max-w-[10rem] min-h-max max-h-6"
          type="text"
        />
        <h4 v-else class="m-0 max-w-[8rem] md:max-w-[10rem] min-h-max max-h-6">
          {{ userStore.usernameRef }}
        </h4>
        <p class="text-sm mt-0 md:mt-0 md:pb-4 lg:pb-6">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const user = useSupabaseUser();

onMounted(() => {
  userStore.fetchUser();
});

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
