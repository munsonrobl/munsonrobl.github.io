<script setup lang="ts">
import { externalLinks } from '../data/links'
import { profile } from '../data/profile'
import ArrowIcon from './ArrowIcon.vue'
import AskRobert from './AskRobert.vue'
import type { AiResponse } from '../types/resume'

defineEmits<{ explore: [response: AiResponse] }>()
</script>

<template>
  <section id="top" class="page-shell grid gap-10 pb-12 pt-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-14 lg:pb-16 lg:pt-20">
    <div>
      <div class="grid grid-cols-[7rem_1fr] items-center gap-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
        <figure>
          <div class="relative aspect-[4/5] overflow-hidden bg-slate-200">
            <img :src="profile.photo" :alt="profile.name" class="h-full w-full object-cover object-center grayscale-[10%]" />
            <div class="absolute inset-x-0 bottom-0 h-1 bg-accent" />
          </div>
        </figure>
        <div>
          <h1 class="text-balance text-[clamp(2.7rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-ink">{{ profile.name }}</h1>
          <p class="mt-5 text-base font-medium leading-6 tracking-[-0.015em] text-accent sm:text-xl">{{ profile.positioning }}</p>
        </div>
      </div>
      <div>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-muted">{{ profile.summary }}</p>
        <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer" class="link-arrow inline-flex items-center gap-2 py-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent">
            LinkedIn <ArrowIcon />
          </a>
          <a href="#" aria-disabled="true" title="Curated resume coming soon" class="inline-flex cursor-default items-center gap-2 py-2 text-sm font-semibold text-muted underline decoration-line underline-offset-4" @click.prevent>
            Resume
            <svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4" fill="none"><path d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
          <a :href="externalLinks.email" class="inline-flex items-center gap-2 py-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent">
            Contact
            <svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4" fill="none"><path d="M2.5 4h11v8h-11V4Zm.5.5 5 4 5-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
        </div>
      </div>
    </div>
    <AskRobert @explore="$emit('explore', $event)" />
  </section>
</template>
