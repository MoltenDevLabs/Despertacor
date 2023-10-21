<template>
  <div>
    <div class="mx-16 mt-8">
      <div class="card text-center mb-8 relative">
        <div class="relative">
          <img
            :src="profile?.image_url"
            alt="Some Image"
            class="m-0 rounded-full object-cover"
          />
        </div>
        <p
          class="btn py-0 px-2 w-full absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-[170%]"
        >
          {{ profile?.username }}
        </p>
      </div>
    </div>
    <div class="my-16">
      <p class="py-1 px-2 w-full">
        {{ profile?.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const route = useRoute();
const profile = ref({});

onMounted(async () => {
  profile.value = await userStore.fetchId(route.params.id);
});
</script>

<style scoped></style>
