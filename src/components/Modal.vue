<template>
  <div
    v-if="modelValue"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center pt-16"
    @click.self="handleClose()"
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
              <Button outlined class="mr-4" @click="handleClose()"
                >Cancel</Button
              >
              <Button @click="emits('submit')">Save</Button>
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
const emits = defineEmits(['update:modelValue', 'submit'])
const handleClose = () => {
  emits('update:modelValue', false)
}
</script>

<style scoped></style>
