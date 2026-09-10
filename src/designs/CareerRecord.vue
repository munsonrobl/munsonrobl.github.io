<script setup lang="ts">
import { experience } from '../data/experience'
import { story } from '../data/story'
</script>
<template>
  <div class="career-record">
    <details>
      <summary data-umami-event="content-toggle" data-umami-event-section="infotech-role-history">Seven roles at Infotech <span aria-hidden="true">+</span></summary>
      <ol class="role-list">
        <li v-for="role in experience[0]!.roles" :key="role.title"><span>{{ role.period }}</span><strong>{{ role.title }}</strong></li>
      </ol>
    </details>
    <details>
      <summary data-umami-event="content-toggle" data-umami-event-section="architecture-delivery">Architecture &amp; delivery <span aria-hidden="true">+</span></summary>
      <div class="expanded-copy"><p v-for="detail in experience[0]!.details" :key="detail">{{ detail }}</p><p>{{ story.technical }}</p></div>
    </details>
  </div>
</template>
