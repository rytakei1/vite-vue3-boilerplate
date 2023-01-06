<template>
  <div class="flex flex-col items-center justify-center w-full">
    <div class="border-primary border-1 p-10 flex flex-col">
      <Input label="Username" v-model="username" class="mb-4" />
      <Input label="Password" type="password" v-model="password" class="mb-6" />
      <Button @click="handleLogin" :loading="loading">Login</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const username = ref('')
const password = ref('')
const loading = ref(false)
const handleLogin = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<style scoped></style>
