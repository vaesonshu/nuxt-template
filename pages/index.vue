<template>
  <div class="text-3xl">{{ message }}</div>
  <NuxtLink to="/detail/1">跳转</NuxtLink>
</template>

<script setup lang="ts">
const { message } = await $fetch('/api/hello')
</script>
