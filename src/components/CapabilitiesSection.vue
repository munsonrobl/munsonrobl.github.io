<script setup lang="ts">
import { capabilityGroups, selectedTechnologies } from '../data/capabilities'
</script>

<template>
  <section id="skills" class="page-shell capabilities-section" aria-labelledby="capabilities-heading">
    <div class="section-divider"><span>Capabilities</span></div>
    <div class="section-heading compact-heading">
      <p class="section-kicker">Working range</p>
      <h2 id="capabilities-heading">Depth where it matters. Range where it helps.</h2>
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
