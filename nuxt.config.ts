// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "/hc-county-leadership/",
    head: {
      script: [
        {
          src: "/iframeResizer.contentWindow.min.js",
          async: true,
        },
      ],
    },
  },

  ui: {
    colorMode: false,
  },
});
