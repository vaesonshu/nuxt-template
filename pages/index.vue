<template>
  <div class="text-3xl text-center">{{ message }}</div>
  <div>测试 Nuxt 项目部署</div>
  <!-- <NuxtLink to="/detail/1">跳转</NuxtLink> -->
</template>

<script setup lang="ts">
const { message } = await $fetch('/api/hello')
</script>
