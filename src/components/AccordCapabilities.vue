<script setup lang="ts">
import { capabilityGroups, currentPractice, selectedTechnologies } from '../data/capabilities'
</script>

<template>
  <section class="accord-capabilities" aria-labelledby="accord-capabilities-heading">
    <header class="accord-capabilities-heading">
      <h2 id="accord-capabilities-heading">Demonstrated range.</h2>
      <p>Leadership grounded in technical practice and direct business ownership.</p>
    </header>

    <div class="accord-capability-grid">
      <article v-for="group in capabilityGroups" :key="group.title" class="accord-capability-group">
        <h3>{{ group.title }}</h3>
        <div class="accord-capability-items">
          <div v-for="item in group.items" :key="item.name" class="accord-capability-item">
            <h4>{{ item.name }}</h4>
            <p>{{ item.proof }}</p>
          </div>
        </div>
      </article>
    </div>

    <div class="accord-technology-record">
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
