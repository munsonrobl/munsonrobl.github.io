<script setup lang="ts">
import { credibility } from '../data/profile'
</script>

<template>
  <section aria-label="Career overview" class="border-y border-line bg-surface">
    <div class="page-shell grid grid-cols-2 lg:grid-cols-4">
      <div v-for="(item, index) in credibility" :key="item.value" class="border-line px-0 py-6 odd:pr-4 even:border-l even:pl-4 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0">
        <p class="text-sm font-semibold leading-5 text-ink">{{ item.value }}</p>
        <p class="mt-1 text-xs leading-5 text-muted sm:text-sm">{{ item.label }}</p>
        <span class="sr-only">Item {{ index + 1 }} of {{ credibility.length }}</span>
      </div>
    </div>
  </section>
</template>
