<script setup lang="ts">
import { experience } from '../data/experience'
import type { Perspective } from '../types/resume'

defineProps<{ perspective: Perspective }>()
</script>

<template>
  <section id="experience" class="bg-ink py-16 text-white sm:py-24" aria-labelledby="experience-heading">
    <div class="page-shell">
      <div class="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <div>
          <p class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-300">Experience</p>
          <h2 id="experience-heading" class="text-balance mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">A career built from the code outward.</h2>
        </div>
        <div>
          <article v-for="(entry, index) in experience" :key="entry.company" class="grid gap-5 border-t border-slate-700 py-9 sm:grid-cols-[9rem_1fr]" :class="index === experience.length - 1 ? 'border-b' : ''">
            <div>
              <p class="text-lg font-semibold">{{ entry.company }}</p>
              <p class="mt-1 font-mono text-xs text-slate-400">{{ entry.period }}</p>
            </div>
            <div>
              <p class="max-w-3xl leading-7 text-slate-300">{{ entry.summaries[perspective] }}</p>
              <div class="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                <div v-for="role in entry.roles" :key="`${entry.company}-${role.title}`" class="flex items-start justify-between gap-4 border-l border-slate-600 pl-3">
                  <p class="text-sm font-medium text-slate-100">{{ role.title }}</p>
                  <p class="shrink-0 font-mono text-[0.65rem] leading-5 text-slate-400">{{ role.period }}</p>
                </div>
              </div>
              <details v-if="entry.details && perspective === 'technical'" class="group mt-7 border-t border-slate-700 pt-5">
                <summary class="cursor-pointer list-none text-sm font-semibold text-blue-200 hover:text-white">
                  Technical record <span class="ml-1 inline-block transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <ul class="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                  <li v-for="detail in entry.details" :key="detail" class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 bg-blue-400" />{{ detail }}</li>
                </ul>
              </details>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
