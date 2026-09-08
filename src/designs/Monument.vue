<script setup lang="ts">
import { story } from '../data/story'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import ContactLinks from './ContactLinks.vue'
import CareerRecord from './CareerRecord.vue'
</script>
<template>
  <div class="monument design-surface">
    <header class="monument-header"><span>Robert Munson / Gainesville, FL</span><ContactLinks /></header>
    <main id="main-content" tabindex="-1">
      <div class="monument-intro"><h1>ROBERT<br />MUNSON</h1><div class="monument-profile"><img :src="profile.photo" alt="Robert Munson" width="130" height="150" /><h2>Engineering Leader</h2><p>{{ story.intro }}</p></div></div>
      <div class="monument-present"><span>NOW</span><p>{{ story.lead }}</p></div>
      <article class="monument-chapter"><div class="monument-date"><span>2010</span><small>— Present</small></div><div class="monument-chapter-body"><h2>Infotech</h2><p class="role">{{ experience[0]!.roles[0]!.title }}</p><p>{{ story.growth }}</p><CareerRecord /><div class="monument-work"><p v-for="work in story.work" :key="work.id"><strong>{{ work.title }}.</strong> {{ work.text }}<span v-if="'note' in work" class="monument-note">{{ work.note }}</span></p></div></div></article>
      <article class="monument-chapter monument-business"><div class="monument-date"><span>2022</span><small>— Present</small></div><div class="monument-chapter-body"><h2>Business owner.</h2><p class="role">Co-founder &amp; co-owner · Private digital education business</p><p v-for="paragraph in story.business" :key="paragraph">{{ paragraph }}</p></div></article>
      <div class="monument-origins" aria-label="Earlier career"><article v-for="entry in experience.slice(2)" :key="entry.company"><span>{{ entry.period }}</span><h2>{{ entry.company }}</h2><p class="role">{{ entry.roles[0]!.title }}</p><p>{{ entry.summary }}</p></article></div>
    </main>
    <footer><span>Engineering. Product. Business.</span><ContactLinks /></footer>
  </div>
</template>
