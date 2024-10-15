<template>
  <div class="">
    {{  route.params.id }}
  </div>
  <a href="">{{ data }}</a>
</template>

<script setup lang="ts">
const route = useRoute()
const data = await $fetch(`/api/detail/${route.params.id}`)
</script> 