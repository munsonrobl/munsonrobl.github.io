<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { perspectives } from '../data/perspectives'
import type { Perspective } from '../types/resume'

const props = defineProps<{ modelValue: Perspective }>()
const emit = defineEmits<{ 'update:modelValue': [value: Perspective] }>()
const tabRefs = ref<HTMLButtonElement[]>([])

function select(index: number) {
  const normalized = (index + perspectives.length) % perspectives.length
  emit('update:modelValue', perspectives[normalized].id)
  nextTick(() => tabRefs.value[normalized]?.focus())
}

function onKeydown(event: KeyboardEvent, index: number) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault()
    select(index + 1)
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault()
    select(index - 1)
  } else if (event.key === 'Home') {
    event.preventDefault()
    select(0)
  } else if (event.key === 'End') {
    event.preventDefault()
    select(perspectives.length - 1)
  }
}
</script>

<template>
  <div class="sticky top-0 z-10 border-y border-line bg-paper/95 backdrop-blur-sm">
    <div class="page-shell overflow-x-auto">
      <div role="tablist" aria-label="Career perspectives" class="flex min-w-max">
        <button
          v-for="(item, index) in perspectives"
          :id="`tab-${item.id}`"
          :key="item.id"
          :ref="(element) => { if (element) tabRefs[index] = element as HTMLButtonElement }"
          type="button"
          role="tab"
          :aria-selected="props.modelValue === item.id"
          aria-controls="perspective-panel"
          :tabindex="props.modelValue === item.id ? 0 : -1"
          class="group relative px-5 py-5 text-left text-sm font-semibold transition-colors first:pl-0 sm:px-8"
          :class="props.modelValue === item.id ? 'text-accent' : 'text-muted hover:text-ink'"
          @click="emit('update:modelValue', item.id)"
          @keydown="onKeydown($event, index)"
        >
          {{ item.label }}
          <span class="absolute inset-x-5 bottom-0 h-0.5 bg-accent transition-transform first:left-0" :class="props.modelValue === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'" />
        </button>
      </div>
    </div>
  </div>
</template>
