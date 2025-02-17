<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto lg:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full lg:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th
                  v-for="column in columns"
                  scope="col"
                  class="text-sm font-medium text-dark px-6 py-4 text-left cursor-pointer"
                  @click="handleColumnClick(column.name)"
                >
                  <div class="flex items-center">
                    {{ column.label }}
                    <div
                      class="flex items-center ml-1"
                      :class="{ 'opacity-0': column.name !== orderColumn }"
                    >
                      <ArrowUp v-if="ascendingOrder" />
                      <ArrowDown v-else />
                    </div>
                  </div>
                </th>
                <th
                  v-if="tools?.length > 0"
                  scope="col"
                  class="text-sm font-medium text-dark pr-6 py-4 text-left w-20"
                >
                  <div class="flex w-full justify-end relative">
                    <input
                      class="border-1 pr-2 pl-8 py-2"
                      placeholder="Busca"
                      v-model="search"
                    />
                    <IconSearch
                      class="absolute left-2 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="entry in orderedData"
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td
                  v-for="column in columns"
                  class="text-sm text-dark font-light px-6 py-4 whitespace-nowrap"
                >
                  <div class="flex w-full items-center">
                    {{
                      column.type === 'string'
                        ? column.format
                          ? column.format(entry[column.name])
                          : entry[column.name]
                        : null
                    }}
                  </div>
                </td>
                <td
                  v-if="tools?.length > 0"
                  class="text-sm text-dark font-light px-6 py-4"
                >
                  <div class="flex justify-center">
                    <Tooltip :title="tool.tooltip" v-for="tool in tools">
                      <component
                        :is="{ ...tool.icon }"
                        class="cursor-pointer mx-1"
                        @click="handleToolClick(tool.action, entry)"
                      />
                    </Tooltip>
                  </div>
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
import { Tooltip } from '@programic/vue3-tooltip'
import ArrowUp from '~icons/mdi/arrow-up'
import ArrowDown from '~icons/mdi/arrow-down'
import IconSearch from '~icons/material-symbols/search'
interface ITableColumn {
  name: string
  label: string
  type: string
  format?: Function
}
interface ITableDataEntry {
  [columnName: string]: any
}
interface ITableTool {
  action: string
  icon: any
  tooltip: string
}
const props = defineProps({
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
const orderColumn = ref('')
const ascendingOrder = ref(true)
onMounted(() => {
  orderColumn.value = props.columns[0].name
  ascendingOrder.value = true
})
const emits = defineEmits(['tool-click'])
const handleToolClick = (action: string, entry: ITableDataEntry) => {
  emits('tool-click', { action, entry })
}
const handleColumnClick = (columnName: string) => {
  if (orderColumn.value === columnName) {
    ascendingOrder.value = !ascendingOrder.value
  } else {
    orderColumn.value = columnName
    ascendingOrder.value = true
  }
}
const orderedData = computed(() => {
  const sortedData = props.data.sort(
    (entry1: ITableDataEntry, entry2: ITableDataEntry) => {
      const entry1Value =
        typeof entry1[orderColumn.value] === 'string'
          ? entry1[orderColumn.value].toLowerCase()
          : entry1[orderColumn.value]
      const entry2Value =
        typeof entry2[orderColumn.value] === 'string'
          ? entry2[orderColumn.value].toLowerCase()
          : entry2[orderColumn.value]
      if (entry1Value > entry2Value) return 1
      if (entry1Value < entry2Value) return -1
      return 0
    }
  )
  const filteredData = ascendingOrder.value ? sortedData : sortedData.reverse()
  if (!search.value) return filteredData
  const columnsToConsider = props.columns.map((column) => column.name)
  return filteredData.filter((entry) => {
    for (const [key, val] of Object.entries(entry)) {
      if (columnsToConsider.includes(key)) {
        const column = props.columns.find((column) => column.name === key)
        if (column?.format) {
          if (
            column
              .format(val)
              .toLowerCase()
              .includes(search.value.toLowerCase())
          ) {
            return true
          }
        } else if (typeof val === 'string') {
          if (val.toLowerCase().includes(search.value.toLowerCase())) {
            return true
          }
        }
      }
    }
    return false
  })
})
const search = ref('')
</script>

<style>
.tooltip {
  position: absolute !important;
  left: 12px !important;
}
</style>
