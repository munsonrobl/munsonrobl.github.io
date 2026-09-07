<script setup lang="ts">
import type { PerspectiveMeta } from '../types/resume'

defineProps<{ content: PerspectiveMeta }>()
</script>

<template>
  <section id="capabilities" class="page-shell py-16 sm:py-24" aria-labelledby="capabilities-heading">
    <div class="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-16">
      <div>
        <p class="section-kicker">Capabilities</p>
        <h2 id="capabilities-heading" class="section-heading">What Robert brings to the table.</h2>
      </div>
      <div>
        <ul class="grid border-t border-line sm:grid-cols-2">
          <li v-for="capability in content.capabilities" :key="capability" class="flex items-center border-b border-line py-5 sm:even:pl-8 sm:odd:border-r sm:odd:pr-8">
            <span class="text-base font-semibold text-ink">{{ capability }}</span>
          </li>
        </ul>
        <p v-if="content.technologyLine" class="mt-8 max-w-3xl font-mono text-xs leading-6 tracking-wide text-muted">{{ content.technologyLine }}</p>
      </div>
    </div>
  </section>
</template>
