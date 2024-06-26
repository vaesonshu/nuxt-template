module.exports = {
  apps: [
    {
      name: 'nuxt-template',
      port: '8888',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
