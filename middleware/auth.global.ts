// 这个优先级别是比较高的
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('auth.global.ts 全局路由中间件')
  if (to.fullPath !== '/login') {
    // return navigateTo('/login')
  }
})
