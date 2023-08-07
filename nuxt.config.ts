// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
      css: ['~/assets/css/main.css'],
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
        },
      },
        modules: ['@nuxtjs/google-fonts'],





    },
    )

