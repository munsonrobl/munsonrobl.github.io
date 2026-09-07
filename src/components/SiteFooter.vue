<script setup lang="ts">
import { externalLinks } from '../data/links'
import ArrowIcon from './ArrowIcon.vue'
</script>

<template>
  <footer id="contact" class="contact-surface" aria-labelledby="contact-heading">
    <div class="page-shell contact-section">
      <h2 id="contact-heading">Contact</h2>
      <div class="contact-links">
        <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
        <a :href="externalLinks.email">robmunson@gmail.com <ArrowIcon /></a>
        <a v-if="externalLinks.resumeUrl" :href="externalLinks.resumeUrl" download>Download résumé <ArrowIcon /></a>
        <span v-else class="resume-placeholder" role="link" aria-disabled="true">Download résumé <span class="resume-status">Coming soon</span></span>
      </div>
      <p class="copyright">© {{ new Date().getFullYear() }} Robert Munson</p>
    </div>
  </footer>
</template>
