<template>
  <div
    class="flex flex-col min-h-full min-w-30 relative max-h-full overflow-hidden"
  >
    <div
      ref="topBox"
      class="border-r-2 border-b-2 rounded-br border-primary absolute top-0 left-0 w-full transition-all duration-300 pointer-events-none bg-secondary"
      :style="{ height: `${selectedEntryRef?.offsetTop}px` }"
    ></div>
    <div
      ref="bottomBox"
      class="border-r-2 border-t-2 rounded-tr border-primary absolute left-0 w-full h-full transition-all duration-300 pointer-events-none bg-secondary"
      :style="{
        top: `${
          selectedEntryRef
            ? selectedEntryRef.offsetTop + selectedEntryRef.clientHeight
            : 0
        }px`,
      }"
    ></div>
    <div class="flex px-2 justify-center z-1">
      <h2 class="uppercase text-primary py-8">Admin</h2>
    </div>
    <div id="entries" class="flex flex-col z-1">
      <div
        v-for="entry in menuEntries"
        :class="{
          selected: entry.path === route.path,
          'bg-transparent': entry.path === route.path,
        }"
        ref="entriesRef"
      >
        <router-link
          :to="entry.path"
          class="flex flex-col justify-center items-center w-full h-full py-6 text-primary"
        >
          <component :is="entry.icon" />
          {{ entry.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { menuEntries } = useAdminNav()
const bottomBox = ref<HTMLDivElement>()
const route = useRoute()
const entriesRef = ref<HTMLDivElement[]>()
const selectedEntryRef = ref<HTMLDivElement>()
watch(
  route,
  async () => {
    await nextTick()
    selectedEntryRef.value = entriesRef.value?.find((entry) =>
      entry.classList.contains('selected')
    )
  },
  { immediate: true }
)
</script>

<style scoped></style>
