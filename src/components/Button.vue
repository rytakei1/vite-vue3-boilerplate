<template>
  <button
    @click="emits('click')"
    :style="{ backgroundColor, color: textColor, borderColor: textColor }"
    class="px-4 py-2 rounded-md filter transition-all flex items-center justify-center"
    :class="{
      'border-1': outlined,
      'brightness-80': disabled,
      'brightness-120': isButtonHovered,
    }"
    :disabled="disabled"
    ref="buttonRef"
  >
    <slot></slot>
    <Spinner class="ml-2" v-if="loading" />
  </button>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'primary',
  },
})
const { colors } = useTheme()
const emits = defineEmits(['click'])
const buttonRef = ref<HTMLButtonElement>()
const isButtonHovered = useElementHover(buttonRef)

const backgroundColor = computed<string>(() => {
  if (props.outlined) return 'transparent'
  if (Object.prototype.hasOwnProperty.call(colors, props.color)) {
    // @ts-ignore - This is validated by the line above
    return colors[props.color]
  }
  return colors.primary
})

const textColor = computed<string>(() => {
  if (!props.outlined) return '#ffffff'
  if (Object.prototype.hasOwnProperty.call(colors, props.color)) {
    // @ts-ignore - This is validated by the line above
    return colors[props.color]
  }
  return colors.primary
})
</script>

<style scoped></style>
