<template>
  <div class="text-xl text-center">
    <!-- <div>{{ message }}</div>
    <div class="text-sm">一款开箱即用的 Nuxt 项目模板，您无需在项目初始化时进行各种配置，我们已经帮您进行必要的配置</div> -->
  </div>
</template>
<script setup lang="ts">
const { message } = await $fetch('/api/hello')
</script>

<style scoped lang="scss">
</style>
