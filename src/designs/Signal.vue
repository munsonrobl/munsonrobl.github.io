<script setup lang="ts">
import { story } from '../data/story'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import ContactLinks from './ContactLinks.vue'
import CareerRecord from './CareerRecord.vue'
</script>
<template>
  <div class="signal design-surface">
    <header class="signal-identity">
      <div class="signal-location">Gainesville, Florida</div>
      <div class="signal-name"><h1>Robert<br />Munson<span aria-hidden="true">.</span></h1><p>Engineering Leader</p></div>
      <p class="signal-intro">{{ story.intro }}</p>
      <div class="signal-bottom"><img :src="profile.photo" alt="Robert Munson" width="64" height="76" /><ContactLinks /></div>
    </header>
    <main id="main-content" tabindex="-1" class="signal-content">
      <article>
        <div class="signal-company"><h2>Infotech</h2><span>2010 — Present</span></div>
        <p class="muted role">{{ experience[0]!.roles[0]!.title }}</p>
        <p class="signal-lead">{{ story.lead }}</p>
        <p>{{ story.growth }}</p>
        <div class="signal-work">
          <details v-for="(work, index) in story.work" :key="work.id" :open="index === 0">
            <summary><span class="work-index">0{{ index + 1 }}</span><h3>{{ work.title }}</h3><span class="plus" aria-hidden="true">+</span></summary>
            <div class="expanded-copy"><p>{{ work.text }}</p><p v-if="'note' in work" class="muted">{{ work.note }}</p></div>
          </details>
        </div>
        <CareerRecord />
      </article>
      <article class="signal-business">
        <div class="signal-company"><h2>Also, an owner.</h2><span>Since 2022</span></div>
        <p class="role muted">Co-founder · Private digital education business</p>
        <p v-for="paragraph in story.business" :key="paragraph">{{ paragraph }}</p>
      </article>
      <div class="signal-earlier" aria-label="Earlier career"><article v-for="entry in experience.slice(2)" :key="entry.company"><span class="muted small">{{ entry.period }}</span><h2>{{ entry.company }}</h2><p class="small muted">{{ entry.roles[0]!.title }}</p><p>{{ entry.summary }}</p></article></div>
      <footer>Robert Munson <span>Engineering · Product · Business</span></footer>
    </main>
  </div>
</template>
