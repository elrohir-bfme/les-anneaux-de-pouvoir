import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'Le Seigneur des Anneaux : Les Anneaux de Pouvoir 💍',
      titleTemplate: 'Le Seigneur des Anneaux : Les Anneaux de Pouvoir 💍',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Commençant à une époque de paix relative, la série suit un ensemble de personnages, à la fois familiers et nouveaux, alors qu’ils affrontent la réémergence tant redoutée du mal sur la Terre du Milieu. Des profondeurs les plus sombres des Monts Brumeux, aux forêts majestueuses de la capitale des elfes de Lindon, au royaume insulaire à couper le souffle de Númenor, jusqu’aux confins de la carte, ces royaumes et personnages se tailleront des héritages qui perdureront longtemps après qu’ils soient partis.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // css
  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss',
  ],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // modules
  modules: [
    'nuxt-windicss',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
  ],

  // build modules
  buildModules: ['@nuxtjs/eslint-module', 'unplugin-icons/nuxt', '@nuxtjs/svg'],

  // experimental features
  experimental: {
    reactivityTransform: true,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      availableLocales: ['fr', 'en'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  content: {
    documentDriven: true,
    navigation: {
      fields: ['date'],
    },
  },
})
