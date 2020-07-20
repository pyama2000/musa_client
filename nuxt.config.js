export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Musa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['destyle.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Plugins to load before mounting the App
   */
  /*
  router: {
    middleware: 'authenticated'
  },
  */
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: process.env.BASE_URL || 'http://0.0.0.0:8000',
    prefix: '/api',
    proxy: true,
    credentials: true
  },
  proxy: {
    '/api/': {
      target: process.env.BASE_API_URL || 'http://musa.api:8000',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
