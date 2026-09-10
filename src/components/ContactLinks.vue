<script setup lang="ts">
import { externalLinks } from '../data/links'
import ContactIcon from './ContactIcon.vue'
</script>
<template>
  <nav class="contact-links" aria-label="Contact">
    <a :href="externalLinks.email" data-umami-event="contact-click" data-umami-event-channel="email">Email <ContactIcon type="email" /></a>
    <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer" data-umami-event="contact-click" data-umami-event-channel="linkedin">LinkedIn <ContactIcon type="website" /></a>
    <a v-if="externalLinks.resumeUrl" :href="externalLinks.resumeUrl" download data-umami-event="resume-download">Résumé ↓</a>
    <span v-else class="resume-link-placeholder" role="link" aria-disabled="true" aria-label="Résumé download coming soon">Résumé <span aria-hidden="true">↓</span></span>
  </nav>
</template>
