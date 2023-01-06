<template>
  <div class="flex flex-col">
    <Table :columns="columns" :data="data" :tools="tools" />
  </div>
</template>
<route lang="yaml">
meta:
  layout: admin
</route>
<script setup lang="ts">
// @ts-ignore
import IconTrashCan from '~icons/mdi/trash-can'
// @ts-ignore
import IconPencil from '~icons/mdi/pencil'
const columns = ref([
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'email',
    label: 'E-mail',
  },
])
const tools = ref([
  {
    action: 'edit',
    icon: IconPencil,
  },
  {
    action: 'delete',
    icon: IconTrashCan,
  },
])
const data = ref([
  {
    name: 'Antônio da Silva',
    email: 'antonio.silva@gmail.com',
  },
  {
    name: 'João dos Santos',
    email: 'joao.santos@gmail.com',
  },
])
</script>
<style scoped></style>
