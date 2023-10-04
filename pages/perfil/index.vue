<template>
  <div>
    <div class="flex items-start justify-end">
      <button
        @click="
          userStore.editing ? userStore.saveProfile() : userStore.editProfile()
        "
        class="btn material-icons-outlined mx-4 p-1 z-40"
        :title="userStore.editing ? 'Save' : 'Edit'"
      >
        {{ userStore.editing ? "save" : "edit" }}
      </button>
      <nuxt-link
        to="/"
        @click="userStore.signOut()"
        class="btn material-icons-outlined no-underline p-1 z-40"
        title="Log out"
        v-bind:exact="true"
      >
        logout
      </nuxt-link>
    </div>

    <div class="mx-16">
      <div class="card text-center mb-8 relative">
        <img
          :src="imageSrc"
          alt="Some Image"
          class="m-0"
          :class="userStore.editing ? 'brightness-50 opacity-80' : ''"
        />
        <input
          v-if="userStore.editing"
          v-model="userStore.editedUsername"
          class="inp py-0 px-12 z-40 absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full"
          type="text"
        />
        <p
          v-else
          class="btn py-0 px-12 absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full"
        >
          {{ userStore.usernameRef }}
        </p>
      </div>
      <div class="flex flex-col align-bottom justify-end">
        <!-- <p class="text-sm mt-0">{{ user.email }}</p> -->
      </div>
      <!-- <profileCard :nom="userStore.usernameRef" :imageSrc="imageSrc" /> -->
    </div>
    <div class="absolute inset-0 flex items-center justify-center rounded-full">
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
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const user = useSupabaseUser();

onMounted(() => {
  userStore.fetchUser();
});

const imageSrc =
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/sign/cantants-coral/mussol1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYW50YW50cy1jb3JhbC9tdXNzb2wxLnBuZyIsImlhdCI6MTY5NTMxMDA2NiwiZXhwIjoxNzI2ODQ2MDY2fQ.UPJSr62F62Ivcm2jLf-wXKRcmNFWE9dlLeT6eDj6rCg&t=2023-09-21T15%3A27%3A46.549Z";

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
