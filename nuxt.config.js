module.exports = {
  rootDir: './',
  srcDir: 'public/', // define the source directory of your nuxt.js application
  cache: true, // allow cached components for better render performances
  dev: true,//(process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Feathers Chat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0' },
      { hid: 'description', content: "Feathers Chat Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  build: {
    devtool: 'eval-source-map', //'inline-source-map', 'eval-source-map'
    vendor: [
      'moment',
      'feathers-client'
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/animate.css'],//'~assets/css/style.css',
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** The router property lets you customize nuxt.js router (vue-router)
  */
  router: {
    // Run the middleware/user-agent.js on every pages
    middleware: 'user-agent',
  }
}
