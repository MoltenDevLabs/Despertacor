<template>
  <div class="relative">
    <div>
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
      <h3>I Have a Dream</h3>
      <p>
        I Have a Dream, a song to sing <br />
        To help me cope, with anything <br />
        If you see the wonder, of a fairy tale <br />
        You can take the future, even if you fail <br />
        <br />
        I believe in angels <br />
        Something good in everything I see <br />
        I believe in angels <br />
        When I know the time is right for me <br />
        I'll cross the stream, I Have a Dream <br />
        <br />
        I Have a Dream, a fantasy <br />
        To help me through, reality <br />
        And my destination, makes it worth the while <br />
        Pushin' through the darkness, still another mile <br />
        <br />
        I believe in angels <br />
        Something good in everything I see <br />
        I believe in angels <br />
        When I know the time is right for me <br />
        I'll cross the stream, I Have a Dream <br />
        I'll cross the stream, I Have a Dream <br />
        <br />
        I Have a Dream, a song to sing <br />
        To help me cope, with anything <br />
        If you see the wonder, of a fairy tale <br />
        You can take the future, even if you fail <br />
        <br />
        I believe in angels <br />
        Something good in everything I see <br />
        I believe in angels <br />
        When I know the time is right for me <br />
        I'll cross the stream, I Have a Dream <br />
        I'll cross the stream, I Have a Dream
      </p>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/themeStore";
const themeStore = useThemeStore();
</script>

<style scoped></style>
