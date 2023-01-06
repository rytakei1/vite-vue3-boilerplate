<template>
  <div
    v-if="modelValue"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center pt-16"
  >
    <div
      class="w-1/2 h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="modal-label"
      :aria-hidden="modelValue ? 'false' : 'true'"
    >
      <div class="relative w-auto pointer-events-none">
        <div
          class="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        >
          <div
            class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          >
            <slot name="header">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="modal-label"
              >
                {{ title }}
              </h5>
            </slot>
            <IconClose class="cursor-pointer" @click="handleClose()" />
          </div>
          <slot></slot>
          <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <slot name="footer">
              <button
                type="button"
                class="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Save changes
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import IconClose from '~icons/mdi/close'
defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: 'Title',
  },
})
const emits = defineEmits(['update:modelValue'])
const handleClose = () => {
  emits('update:modelValue', false)
}
</script>

<style scoped></style>
