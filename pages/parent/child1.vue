<script setup>
definePageMeta({
  // 路由中间件( 监听路由 )
  middleware: [
    // 第一个中间件
    function (to, from) {
      console.log(from)
      console.log(to)
      console.log('child1 第一个中间件')

      // 如果返回的是 "" null, 或 没有返回语句,name就会执行下一个中间件
      // 如果返回的是 navigateTo, 直接导航到新的页面
      // return navigateTo("/detail02")
    },
    // 第二个中间件
    function (to, from) {
      // console.log(from);
      // console.log(to);
      console.log('child1 第二个中间件')
    },
    // 第三个中间件
    function (to, from) {
      console.log('child1 第三个中间件')
    },
  ],
  validate: (route) => {
    console.log(route.params.id)
    // return /^\d+$/.test(route.params.id as string);

    // return false  // 404 -> 500  401 ...
    return {
      statusCode: 401, // 路由验证失败
      statusMessage: 'validata router error',
    }
  },
})
</script>

<template>
  <div>我是 Parent 二级路由页面的子页面 child1</div>
</template>

<style scoped></style>
