// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    "@/assets/style.css",
    '@/assets/css/main.css',
  ],

  plugins: [
    '~/plugins/smoothScroll.client.ts' // ✅ plugin déclaré correctement ici
  ],

  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [300, 400, 600, 700]
      }
    }]
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap'
        }
      ]
    }
  },

  devtools: { enabled: true }
})
