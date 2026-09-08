<script setup lang="ts">
import { capabilityGroups, selectedTechnologies } from '../data/capabilities'
</script>

<template>
  <section id="skills" class="page-shell capabilities-section" aria-labelledby="capabilities-heading">
    <div class="section-heading capabilities-heading">
      <p>Capabilities</p>
      <h2 id="capabilities-heading">Working range</h2>
      <span>Organizational leadership grounded in technical practice and direct business ownership.</span>
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
      <h3 id="selected-tech-heading">Selected technology record</h3>
      <p>{{ selectedTechnologies.join(' · ') }}</p>
    </div>
  </section>
</template>
