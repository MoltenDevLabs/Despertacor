<template>
  <div class="relative z-0">
    <transition name="pop">
      <div v-if="showModal" class="modal">
        <h1>Modal Content</h1>
        <p>Some text for the modal</p>
        <button @click="toggleModal()" class="btn">Close Modal</button>
      </div>
    </transition>
    <div :class="showModal ? 'bg-modal' : ''">
      <h2>Try the modal functionality</h2>
      <button @click="toggleModal()" class="btn">Pop modal</button>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<style></style>
