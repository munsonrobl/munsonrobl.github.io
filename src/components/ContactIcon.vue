<script setup lang="ts">
defineProps<{ type: 'email' | 'website' }>()
</script>

<template>
  <svg v-if="type === 'email'" class="contact-icon" viewBox="0 0 16 16" aria-hidden="true" fill="none">
    <rect x="2.25" y="3.5" width="11.5" height="9" rx="1.5" stroke="currentColor" stroke-width="1.25" />
    <path d="m3.25 5 4.75 3.75L12.75 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <svg v-else class="contact-icon" viewBox="0 0 16 16" aria-hidden="true" fill="none">
    <circle cx="8" cy="8" r="5.75" stroke="currentColor" stroke-width="1.25" />
    <path d="M2.5 8h11M8 2.25c1.45 1.55 2.2 3.46 2.2 5.75S9.45 12.2 8 13.75C6.55 12.2 5.8 10.29 5.8 8S6.55 3.8 8 2.25Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
