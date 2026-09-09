<script setup lang="ts">
import { story } from '../data/story'
import { experience } from '../data/experience'
import ContactLinks from './ContactLinks.vue'
import CareerRecord from './CareerRecord.vue'
</script>
<template>
  <div class="nocturne design-surface">
    <header class="nocturne-header"><a href="#main-content">Robert Munson</a><ContactLinks /></header>
    <main id="main-content" tabindex="-1">
      <div class="nocturne-intro"><h1>Engineering<br /><em>Leader.</em></h1><div><p>{{ story.intro }}</p><span class="muted small">Gainesville, Florida</span></div></div>
      <div class="nocturne-current"><span>Infotech / 2010 — Present</span><p>{{ experience[0]!.roles[0]!.title }}</p></div>
      <p class="nocturne-lead">{{ story.lead }}</p>
      <div class="nocturne-index">
        <details open>
          <summary><span class="index-date">01</span><h2>People &amp; direction</h2><span class="index-topic">Leadership</span><span aria-hidden="true">+</span></summary>
          <div class="index-body"><p>{{ story.growth }}</p><CareerRecord /></div>
        </details>
        <details v-for="(work, index) in story.work" :key="work.id">
          <summary><span class="index-date">0{{ index + 2 }}</span><h2>{{ work.title }}</h2><span class="index-topic">{{ index === 3 ? 'Business' : 'Engineering' }}</span><span aria-hidden="true">+</span></summary>
          <div class="index-body"><p>{{ work.text }}</p><p v-if="'note' in work" class="muted">{{ work.note }}</p></div>
        </details>
      </div>
      <article class="nocturne-venture">
        <div><span class="small">Co-founder &amp; co-owner / Since 2022</span><h2>Software.<br />With a stake<br />in the outcome.</h2></div>
        <div><p v-for="paragraph in story.business" :key="paragraph">{{ paragraph }}</p></div>
      </article>
      <div class="nocturne-earlier" aria-label="Earlier career"><details v-for="entry in experience.slice(2)" :key="entry.company"><summary><span>{{ entry.period }}</span><h2>{{ entry.company }}</h2><span aria-hidden="true">+</span></summary><div class="expanded-copy"><p class="muted">{{ entry.roles[0]!.title }}</p><p>{{ entry.summary }}</p></div></details></div>
    </main>
    <footer><span>Robert Munson</span><ContactLinks /><span class="muted small">Gainesville, Florida</span></footer>
  </div>
</template>
