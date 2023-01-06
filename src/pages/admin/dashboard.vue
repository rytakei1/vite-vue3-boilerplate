<template>
  <Modal v-model="showModal" />
</template>
<route lang="yaml">
meta:
  layout: admin
</route>
<script setup lang="ts">
const showModal = ref(true)
</script>
<style scoped></style>
