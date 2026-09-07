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
  <div role="tablist" aria-label="Selected work" class="work-tabs">
    <button v-for="(item, index) in perspectives" :id="`tab-${item.id}`" :key="item.id"
      :ref="(element) => { if (element) tabRefs[index] = element as HTMLButtonElement }"
      type="button" role="tab" :aria-selected="props.modelValue === item.id"
      aria-controls="perspective-panel" :tabindex="props.modelValue === item.id ? 0 : -1"
      @click="emit('update:modelValue', item.id)" @keydown="onKeydown($event, index)">
      {{ item.label }}
    </button>
  </div>
</template>
