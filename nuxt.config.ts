// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/iframe-resizer-content.client"],

  ui: {
    colorMode: false,
  },
});
