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
        <div class="relative">
          <img
            :src="userStore.imageSrc"
            alt="Some Image"
            class="m-0"
            :class="userStore.editing ? 'brightness-50 opacity-80' : ''"
          />
          <input
            type="file"
            accept="image/*"
            @change="changeProfilePicture"
            class="hidden"
            ref="fileInput"
          />
          <i
            v-if="userStore.editing"
            class="btn-text z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-surface-300 dark:text-surface-900 outline-none shadow-none p-1 material-icons-outlined bg-surface-900 dark:dark:bg-surface-300"
            @click="$refs.fileInput.click()"
          >
            add_photo_alternate
          </i>
        </div>
        <input
          v-if="userStore.editing"
          v-model="userStore.editedUsername"
          class="inp py-0 px-2 w-full z-40 absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full text-center"
          type="text"
        />
        <p
          v-else
          class="btn py-0 px-2 w-full absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-[170%]"
        >
          {{ userStore.usernameRef }}
        </p>
      </div>
    </div>
    <div class="my-16">
      <textarea
        v-if="userStore.editing"
        v-model="userStore.editedDescription"
        class="inp py-1 px-2 w-full resize-none"
        rows="12"
      />
      <p v-else class="py-1 px-2 w-full">
        {{ userStore.descriptionRef }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUser();
});

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
