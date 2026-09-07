<script setup lang="ts">
import { computed, ref } from 'vue'
import { aiResponses } from '../data/aiResponses'
import type { AiResponse } from '../types/resume'

const emit = defineEmits<{ explore: [response: AiResponse] }>()
const selectedId = ref<string | null>(null)
const interactionCount = ref(0)
const query = ref('')

const regularResponses = aiResponses.filter((item) => item.id !== 'real-ai')
const selected = computed(() => aiResponses.find((item) => item.id === selectedId.value))
const chipLabels: Record<string, string> = {
  lead: 'Leadership',
  technical: 'Technical depth',
  products: 'Product building',
  ai: 'AI practice',
  business: 'Business',
}

function choose(id: string) {
  selectedId.value = id
  query.value = aiResponses.find((item) => item.id === id)?.prompt ?? query.value
  interactionCount.value += 1
}

function ask() {
  const normalized = query.value.toLowerCase().trim()
  if (!normalized) return

  const id = normalized.includes('actually ai') || normalized.includes('real ai')
    ? 'real-ai'
    : normalized.includes('product')
      ? 'products'
      : normalized.includes('business') || normalized.includes('operator')
        ? 'business'
        : normalized.includes('technical') || normalized.includes('architecture') || normalized.includes('code')
          ? 'technical'
          : normalized.includes(' ai') || normalized.startsWith('ai') || normalized.includes('copilot') || normalized.includes('agent')
            ? 'ai'
            : normalized.includes('unusual') || normalized.includes('background')
              ? 'unusual'
              : 'lead'

  choose(id)
}
</script>

<template>
  <aside class="border border-line bg-surface p-5 shadow-panel sm:p-6" aria-labelledby="ask-robert-title">
    <h2 id="ask-robert-title" class="text-lg font-semibold tracking-[-0.02em] text-ink">Ask about me</h2>

    <form class="mt-4 flex overflow-hidden rounded-lg border border-line bg-paper focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15" role="search" @submit.prevent="ask">
      <svg viewBox="0 0 20 20" aria-hidden="true" class="ml-4 mt-3.5 h-4 w-4 shrink-0 text-muted" fill="none"><path d="m14.5 14.5 3 3m-1.5-8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>
      <label for="ask-query" class="sr-only">Ask a question about Robert</label>
      <input id="ask-query" v-model="query" type="search" autocomplete="off" placeholder="Ask about leadership, products, or AI…" class="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-ink outline-none placeholder:text-muted" />
      <button type="submit" class="m-1.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-ink text-white hover:bg-accent" aria-label="Ask question">
        <span aria-hidden="true">→</span>
      </button>
    </form>

    <div class="mt-3 flex flex-wrap gap-2" aria-label="Suggested questions">
        <button
          v-for="item in regularResponses.slice(0, 5)"
          :key="item.id"
          type="button"
          class="rounded-full border px-3 py-1.5 text-left text-xs leading-tight transition-colors"
          :class="selectedId === item.id ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-white text-muted hover:border-slate-400 hover:text-ink'"
          @click="choose(item.id)"
        >
          {{ chipLabels[item.id] }}
        </button>
    </div>

    <div v-if="selected" class="mt-5 border-t border-line pt-5" aria-live="polite">
        <p class="text-sm font-medium text-accent">{{ selected.prompt }}</p>
        <p class="mt-2 text-sm leading-6 text-muted">{{ selected.answer }}</p>
        <button
          v-if="selected.exploreLabel"
          type="button"
          class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
          @click="emit('explore', selected)"
        >
          {{ selected.exploreLabel }} <span aria-hidden="true">→</span>
        </button>
    </div>

    <button
      v-if="interactionCount >= 3 && selectedId !== 'real-ai'"
      type="button"
      class="mt-4 text-xs text-muted underline decoration-line underline-offset-4 hover:text-ink"
      @click="choose('real-ai')"
    >
      Are you actually AI?
    </button>
  </aside>
</template>
