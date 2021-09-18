import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;900&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/app.scss'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/ui.js',
    '~/plugins/i18n.js'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend: function (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty',
      }
    },
  },

  env: {
    BASE_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://2020.odesign.pw'
        : 'http://localhost:4000',
    IMAGE_BASE_URL: 'https://static.odesign.ru/uploads',
    API_URL: 'https://odma.odesign.ru',
  },
  server: {
    port: 4000,
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'route-art',
        path: '/art-:id',
        component: resolve(__dirname, '~/pages/route-art.vue')
      })
    }
  },
}
