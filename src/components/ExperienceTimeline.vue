<script setup lang="ts">
import { experience } from '../data/experience'
</script>

<template>
  <section id="experience" class="experience-section" aria-labelledby="experience-heading">
    <div class="page-shell">
      <div class="section-divider"><span>Professional experience</span></div>
      <div class="section-heading compact-heading">
        <p class="section-kicker">2002 — Present</p>
        <h2 id="experience-heading">A career built through the work.</h2>
      </div>
      <div class="experience-list">
        <article v-for="entry in experience" :key="entry.company" class="experience-entry">
          <div class="experience-company"><p class="experience-period">{{ entry.period }}</p><h3>{{ entry.company }}</h3></div>
          <div class="experience-copy">
            <h4>{{ entry.roles[0].title }}</h4>
            <p v-if="entry.roles.length > 1" class="role-period">{{ entry.roles[0].period }}</p>
            <p class="body-copy">{{ entry.summary }}</p>
            <details v-if="entry.roles.length > 1" class="career-details">
              <summary>Career progression & selected engineering work</summary>
              <ul class="role-history"><li v-for="role in entry.roles.slice(1)" :key="role.title"><span>{{ role.title }}</span><span>{{ role.period }}</span></li></ul>
              <ul class="technical-record"><li v-for="detail in entry.details" :key="detail">{{ detail }}</li></ul>
            </details>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
