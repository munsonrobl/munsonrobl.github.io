<script setup lang="ts">
import { externalLinks } from '../data/links'
import ContactIcon from './ContactIcon.vue'

defineProps<{ hideResume?: boolean }>()
</script>
<template>
  <nav class="contact-links" aria-label="Contact">
    <a :href="externalLinks.email" data-umami-event="contact-click" data-umami-event-channel="email">Email <ContactIcon type="email" /></a>
    <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer" data-umami-event="contact-click" data-umami-event-channel="linkedin">LinkedIn <ContactIcon type="website" /></a>
    <a v-if="!hideResume && externalLinks.resumeUrl" :href="externalLinks.resumeUrl" download data-umami-event="resume-download">Full résumé ↓</a>
    <span v-else-if="!hideResume" class="resume-link-placeholder" role="link" aria-disabled="true" aria-label="Résumé download coming soon">Full résumé <span aria-hidden="true">↓</span></span>
  </nav>
</template>
