// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icons",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
  ],
  app: {
    head: {
      title: "Coral Despertacor",
      meta: [
        {
          name: "Coral Despertacor",
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
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },
  tailwindcss: {
    cssPath: ["@/assets/css/tailwind.css", { injectPosition: 0 }],
    configPath: "tailwind.config.js",
    exposeConfig: false,
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
});
