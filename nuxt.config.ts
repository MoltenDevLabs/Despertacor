// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icons",
    "@nuxtjs/supabase",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
  ],
  app: {
    head: {
      title: "Coral Solidària Reus",
      meta: [
        {
          name: "Coral Solidària Reus",
          content: "Cançons, membres i algunes coses més",
          charset: "UTF-8",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com/",
          crossorigin: "anonymous",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  googleFonts: {
    families: {
      Lato: {
        wght: [200, 300, 400, 500, 600, 700, 800],
      },
      "Open Sans": {
        wght: [200, 300, 400, 500, 600, 700, 800],
      },
    },
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    preconnect: true,
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },
  tailwindcss: {
    cssPath: "@/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  device: {
    refreshOnResize: true,
  },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pages: true,
  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
    },
    private: {
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
});
