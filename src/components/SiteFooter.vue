<script setup lang="ts">
import { externalLinks } from '../data/links'
import ArrowIcon from './ArrowIcon.vue'
</script>

<template>
  <footer id="contact" class="border-t border-line bg-surface">
    <div class="page-shell grid gap-10 py-14 sm:grid-cols-[1fr_auto] sm:items-end sm:py-20">
      <div>
        <p class="section-kicker">Contact</p>
        <h2 class="text-balance mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Let’s talk about the next hard engineering problem.</h2>
        <a :href="externalLinks.email" class="mt-7 inline-block text-lg font-semibold text-accent underline decoration-blue-200 underline-offset-4 hover:decoration-accent">robmunson@gmail.com</a>
      </div>
      <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer" class="link-arrow flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent">LinkedIn <ArrowIcon /></a>
    </div>
    <div class="page-shell flex flex-col gap-2 border-t border-line py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ new Date().getFullYear() }} Robert Munson</p>
      <p>Engineering leadership · Product · Technology</p>
    </div>
  </footer>
</template>
