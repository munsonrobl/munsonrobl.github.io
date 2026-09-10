<script setup lang="ts">
import { capabilityGroups, currentPractice, selectedTechnologies } from '../data/capabilities'
</script>

<template>
  <section class="capabilities" aria-labelledby="capabilities-heading">
    <header class="capabilities-heading">
      <h2 id="capabilities-heading">Demonstrated range.</h2>
      <p>Leadership grounded in technical practice and direct business ownership.</p>
    </header>

    <div class="capability-grid">
      <article v-for="group in capabilityGroups" :key="group.title" class="capability-group">
        <h3>{{ group.title }}</h3>
        <div class="capability-items">
          <div v-for="item in group.items" :key="item.name" class="capability-item">
            <h4>{{ item.name }}</h4>
            <p>{{ item.proof }}</p>
          </div>
        </div>
      </article>
    </div>

    <div class="technology-record">
      <div>
        <h3>Selected technologies</h3>
        <p>{{ selectedTechnologies.join(' · ') }}</p>
      </div>
      <div>
        <h3>Current practice</h3>
        <p>{{ currentPractice.join(' · ') }}</p>
      </div>
    </div>
  </section>
</template>
