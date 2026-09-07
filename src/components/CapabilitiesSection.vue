<script setup lang="ts">
import { capabilityGroups, selectedTechnologies } from '../data/capabilities'
</script>

<template>
  <section class="page-shell capabilities-section" aria-labelledby="capabilities-heading">
    <div class="section-topline">
      <h2 id="capabilities-heading">Skills</h2>
    </div>

    <div class="capability-grid">
      <article v-for="group in capabilityGroups" :key="group.title" class="capability-card">
        <h3>{{ group.title }}</h3>
        <ul>
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>

    <div class="selected-tech" aria-labelledby="selected-tech-heading">
      <h3 id="selected-tech-heading">Technologies</h3>
      <p>{{ selectedTechnologies.join(' · ') }}</p>
    </div>
  </section>
</template>
