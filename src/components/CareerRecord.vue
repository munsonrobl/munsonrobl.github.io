<script setup lang="ts">
import { experience } from '../data/experience'
import { story } from '../data/story'
</script>
<template>
  <div class="career-record">
    <aside class="technical-practice" aria-labelledby="technical-practice-title">
      <h3 id="technical-practice-title">Technical practice</h3>
      <p>{{ story.technical }}</p>
    </aside>
    <details class="role-progression">
      <summary data-umami-event="content-toggle" data-umami-event-section="infotech-role-history">
        View role progression
        <span class="role-progression-action">Seven roles&nbsp; <span class="role-progression-arrow" aria-hidden="true">→</span></span>
      </summary>
      <ol class="role-list">
        <li v-for="role in experience[0]!.roles" :key="role.title"><span>{{ role.period }}</span><strong>{{ role.title }}</strong></li>
      </ol>
    </details>
  </div>
</template>
