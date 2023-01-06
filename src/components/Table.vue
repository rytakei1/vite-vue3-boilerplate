<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th
                  v-for="column in columns"
                  scope="col"
                  class="text-sm font-medium text-dark px-6 py-4 text-left"
                >
                  {{ column.label }}
                </th>
                <th
                  v-if="tools?.length > 0"
                  scope="col"
                  class="text-sm font-medium text-dark px-6 py-4 text-left"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="entry in data"
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td
                  v-for="column in columns"
                  class="text-sm text-dark font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ entry[column.name] }}
                </td>
                <td
                  v-if="tools?.length > 0"
                  class="text-sm text-dark font-light px-6 py-4 whitespace-nowrap flex"
                >
                  <component
                    v-for="tool in tools"
                    :is="{ ...tool.icon }"
                    class="cursor-pointer mx-1"
                    @click="handleToolClick(tool.action, entry)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
interface ITableColumn {
  name: string
  label: string
}
interface ITableDataEntry {
  [columnName: string]: string | number
}
interface ITableTool {
  action: string
  icon: any
}
defineProps({
  columns: {
    type: Array as PropType<ITableColumn[]>,
    default: [],
  },
  data: {
    type: Array as PropType<ITableDataEntry[]>,
    default: [],
  },
  tools: {
    type: Array as PropType<ITableTool[]>,
    default: [],
  },
})
const emits = defineEmits(['tool-click'])
const handleToolClick = (action: string, entry: ITableDataEntry) => {
  emits('tool-click', { action, entry })
}
</script>

<style scoped></style>
