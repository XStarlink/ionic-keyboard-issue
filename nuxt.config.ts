// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  modules: ['@nuxtjs/ionic'],

  // Ionic https://ionic.nuxtjs.org/getting-started#options
  ionic: {
    integrations: {},
    css: {
      core: true,
      basic: true,
      utilities: true
    },
    config: {}
  },

  // App
  app: {
    head: {
      // title,
      // titleTemplate: '%s',
      viewport:
        'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover',
      meta: []
    }
  }
})
