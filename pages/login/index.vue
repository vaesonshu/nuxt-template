<script setup lang="ts">
const email = ref('')
const onLogin = () => {
  $fetch('/api/login', {
    method: 'post',
    body: {
      email: email.value,
    },
  }).then((user) => {
    console.log(user)
  }).catch((err) => {
    console.log(err)
  })
}
</script>

<template>
  <div>
    <UInput v-model="email" />
    <UButton @click="onLogin">
      登录
    </UButton>
  </div>
</template>
