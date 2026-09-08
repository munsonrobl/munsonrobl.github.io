<script setup lang="ts">
import { externalLinks } from '../data/links'
</script>
<template>
  <nav class="contact-links" aria-label="Contact">
    <a :href="externalLinks.email">Email <span aria-hidden="true">↗</span></a>
    <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
    <a v-if="externalLinks.resumeUrl" :href="externalLinks.resumeUrl" download>Résumé ↓</a>
  </nav>
</template>
