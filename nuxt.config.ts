// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
  ],
  css: ["~/assets/css/main.css"],
  supabase: {
    redirect: false,
  },
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "vi",
        name: "Vietnamese",
      },
      {
        code: "en",
        name: "English",
      },
    ],
    bundle: {},
  },
});
