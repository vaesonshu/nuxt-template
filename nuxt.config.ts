// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/tailwind.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    authOrigin: process.env.AUTH_ORIGIN
  },
  app: { baseURL: '/' },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs'
        ]
      }
    ],
    '@element-plus/nuxt',
    '@nuxthub/core'
  ],
  imports: {
    dirs: [
      // 扫描顶层目录中模块
      'composables',
      // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
      'composables/*/index.{ts,js,mjs,mts}',
      // 扫描给定目录中所有模块
      'composables/**'
    ]
  },
  compatibilityDate: '2024-10-15'
})
