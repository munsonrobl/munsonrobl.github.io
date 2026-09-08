<script setup lang="ts">
import { externalLinks } from '../data/links'
import ArrowIcon from './ArrowIcon.vue'
</script>

<template>
  <footer id="contact" class="contact-section page-shell" aria-labelledby="contact-heading">
      <div class="contact-grid">
        <div>
          <p>Gainesville, Florida</p>
          <h2 id="contact-heading">Contact</h2>
        </div>
      <div class="contact-links">
        <a :href="externalLinks.linkedin" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
        <a :href="externalLinks.email">robmunson@gmail.com <ArrowIcon /></a>
        <a v-if="externalLinks.resumeUrl" :href="externalLinks.resumeUrl" download>Download résumé <ArrowIcon /></a>
        <span v-else class="resume-placeholder" role="link" aria-disabled="true">Download résumé <span class="resume-status">Coming soon</span></span>
      </div>
      </div>
      <p class="copyright">© {{ new Date().getFullYear() }} Robert Munson</p>
  </footer>
</template>
