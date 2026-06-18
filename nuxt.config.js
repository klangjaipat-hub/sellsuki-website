import en from './locales/en.json'
import th from './locales/th.json'
require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  loading: {
    color: '#F35B1F',
    height: '3px'
  },
  //mode: 'spa',
  ssr: true,
  //ssr: false,
  //target: 'static',
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Sellsuki',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Sellsuki' },
      { name: 'google-site-verification', content: 'y3SPcUi4BBJcORn-mg0hoeh7213idJCbHcjJI6PY7QE' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        hid: 'gtag-js',
        src: 'https://www.googletagmanager.com/gtag/js?id=AW-10857407868',
        async: true,
        type: 'text/javascript'
      },
      {
        hid: 'gtag-init',
        innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-819937056');
        gtag('config', 'AW-10857407868');
        gtag('config', 'AW-847077456');
      `,
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
        async: true,
        crossorigin: "anonymous",
        type: 'text/javascript'
      },
      {
        src: 'https://static.line-scdn.net/liff/edge/2/sdk.js',
        type: 'text/javascript'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtag-init': ['innerHTML']
    }
  },

  //render: {
  //  csp: true
  //},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/css/customV2.css',
    '~/assets/styles/css/custom.css',
    '~/assets/styles/css/bootstrap.min.css',
    '~/assets/styles/css/hover.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'animate.css/animate.min.css',
    'hooper/dist/hooper.css'
  ],

  server: {
    port: process.env.PORT || 3000
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //{ src: './plugins/splide.js', mode: 'client' },
    { src: './plugins/vue-carousel.js', mode: 'client' },
    '~/plugins/head-util.js',
    '~/plugins/jsonLd.js',
    { src: '~/plugins/intersect.js', ssr: false },
    { src: '~/plugins/keen-slider.client.js', mode: 'client' },
    '~/plugins/saveAds.client.js',
    '~/plugins/countup.js',
    { src: '~/plugins/lpwm-animate-on-scroll.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-compress',
    '@nuxtjs/dotenv',
    'vue-ssr-carousel/nuxt',
    // With options
    ['@nuxtjs/dotenv', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'nuxt-compress',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    ['vue-social-sharing/nuxt', {
      networks: {
        fakeblock: 'https://fakeblock.com/share?url=@url&title=@title'
      }
    }],
    '@nuxtjs/markdownit',
    '@nuxtjs/gtm',
    'nuxt-facebook-pixel-module',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap',
    'nuxt-brotli',
    //'nuxt-helmet',
    'nuxt-ssr-cache',
    //'@nuxtjs/robots',

    //['nuxt-lazy-load', {
    // Your options
    //}],

    // With options
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    '@nuxtjs/component-cache',

    // With options
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],

  cache: {
    useHostPrefix: false,
    pages: [
      // ตัวอย่าง: cache หน้าหลัก 60 วินาที
      {
        path: '/', // หรือใช้ regex
        ttl: 60
      },
      {
        path: '/blog',
        ttl: 120
      },
      {
        path: '/blog/:id',
        ttl: 120
      }
    ],
    store: {
      type: 'memory', // หรือ redis
      max: 100,
      ttl: 60
    }
  },

  //helmet: {
  //   frameguard: { 
  //     action: "deny",
  //  },
  //},

  'nuxt-compress': {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },

  // // robots: {
  //   UserAgent: '*',
  //   Disallow: '/search/',
  //   Disallow: '/?utm_source=',
  //   Allow: '/'
  // },

  sitemap: {
    hostname: process.env.MAIN_URL,
    exclude: [
      '/en/thank-you-job',
      '/thank-you-job',
      '/lineoa/getquote',
      '/en/lineoa/getquote'
    ],
    i18n: true,
    gzip: true,
    routes: () => []
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '320126622270975',
    autoPageView: true,
    disabled: false
  },

  gtm: {
    enabled: true, /* see below */
    debug: false,

    id: 'GTM-MPPDKR2',
    layer: 'dataLayer',
    variables: {},

    pageTracking: true,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },

  i18n: {
    reloadOnLanguageChange: false,
    locales: ['en', 'th-TH'],
    defaultLocale: 'th-TH',
    vueI18n: {
      fallbackLocale: 'th-TH',
      messages: {
        'en': en,
        'th-TH': th
      }
    }
  },

  markdownit: {
    runtime: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //baseURL: process.env.API_URL || 'https://staging-sellsukiadmin.bearyweb.com/'
    baseURL: process.env.API_URL,
    //timeout: 10000  // 10 วินาที
  },

  serverMiddleware: [
    { path: '/api', handler: '~/server/index.js' },
    //'~/server-middleware/headers.js',
    '~/server-middleware/logger',
    '~/server-middleware/redirect',
    '~/server-middleware/health',
    //'~/server-middleware/axioscaching'
  ],

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: 'https://login.sellsuki.co.th/'
  //   }
  // },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: 'https://login.sellsuki.co.th/'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //publicPath: '/nuxt/',
    postcss: {
      preset: {
        stage: 2, // ตั้งค่าขั้นตอนของ CSS
      },
      plugins: {
        autoprefixer: { overrideBrowserslist: ['> 1%', 'last 2 versions'] },
        'postcss-preset-env': {},
      },
      postcssOptions: {
        plugins: {
          autoprefixer: {},
        },
      },
    },
    transpile: ["swiper"],
    splitChunks: {
      layouts: true
    },
    maxChunkSize: 300000,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 } // โหลดหน้าใหม่แล้วเริ่มบนสุดทันที
    }
  }

  // router: {
  //    extendRoutes(routes) {
  //      for (const key in routes) {
  //        routes[key].caseSensitive = true
  //      }
  //    }
  // }

  //buildDir: 'dist',

  //generate: {
  //  fallback: '404.html'
  //}
}
