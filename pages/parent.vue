<template>
  <div>
    <div>Parent 一级路由页面 - 公共页面</div>
    <div>
      <NuxtLink to="/parent">
        <UButton variant="solid">导航至 parent 二级路由页面</UButton>
      </NuxtLink>
      <NuxtLink to="/parent/child1">
        <UButton color="yellow" variant="solid">导航至 parent 二级路由页面的子页面 child1</UButton>
      </NuxtLink>
      <NuxtLink to="/parent/child2">
        <UButton color="blue" variant="solid">导航至 parent 二级路由页面的子页面 child2</UButton>
      </NuxtLink>
    </div>
    <!-- 嵌套二级路由 -->
    <NuxtPage></NuxtPage>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
