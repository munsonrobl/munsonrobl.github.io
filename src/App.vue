<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import Signal from './designs/Signal.vue'
import Nocturne from './designs/Nocturne.vue'
import Monument from './designs/Monument.vue'
import Folio from './designs/Folio.vue'

const designs = [
  { id: 'signal', name: 'Signal', component: Signal, color: '#244be5' },
  { id: 'nocturne', name: 'Nocturne', component: Nocturne, color: '#211b27' },
  { id: 'monument', name: 'Monument', component: Monument, color: '#eee9de' },
  { id: 'folio', name: 'Folio', component: Folio, color: '#fdfdfc' },
] as const
type Design = typeof designs[number]['id']
function requestedDesign(): Design {
  const value = new URLSearchParams(window.location.search).get('design')
  return designs.find(design => design.id === value)?.id ?? 'signal'
}
const selected = ref<Design>(requestedDesign())
const active = computed(() => designs.find(design => design.id === selected.value)!)
function syncFromLocation() { selected.value = requestedDesign() }
onMounted(() => window.addEventListener('popstate', syncFromLocation))
onUnmounted(() => window.removeEventListener('popstate', syncFromLocation))
watch(selected, () => {
  const url = new URL(window.location.href)
  url.searchParams.set('design', selected.value)
  url.searchParams.delete('style')
  url.hash = ''
  window.history.replaceState({}, '', url)
  window.scrollTo({ top: 0, behavior: 'instant' })
})
watch(active, design => {
  document.title = `Robert Munson — ${design.name}`
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', design.color)
}, { immediate: true })
</script>
<template>
  <a class="skip-link" href="#main-content">Skip to career</a>
  <nav class="design-picker" aria-label="Compare designs">
    <span>Design studies</span>
    <button v-for="(design, index) in designs" :key="design.id" type="button" :aria-pressed="selected === design.id" @click="selected = design.id"><span class="picker-number">0{{ index + 1 }}</span>{{ design.name }}</button>
  </nav>
  <component :is="active.component" :key="selected" />
</template>
