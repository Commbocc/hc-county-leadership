const baseURL = "/hc-county-leadership";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],

  app: {
    baseURL,
    head: {
      script: [
        {
          src: `${baseURL}/iframeResizer.contentWindow.min.js`,
          async: true,
        },
      ],
    },
  },

  ui: {
    colorMode: false,
  },
});
