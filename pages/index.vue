<script setup lang="ts">
const { message } = await $fetch('/api/hello')
</script>

<template>
  <div class="text-3xl text-center">
    {{ message }}
  </div>
  <!-- <NuxtLink to="/detail/1">跳转</NuxtLink> -->
</template>
