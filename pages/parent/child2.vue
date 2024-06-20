<template>
  <div>我是 Parent 二级路由页面的子页面 child2</div>
</template>

<script setup>
definePageMeta({
  // 路由中间件( 监听路由 )
  middleware: ['home']
})
</script>

<style scoped></style>
