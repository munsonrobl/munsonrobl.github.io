<script setup lang="ts">
import { story } from '../data/story'
import { experience } from '../data/experience'
import ContactLinks from './ContactLinks.vue'
import CareerRecord from './CareerRecord.vue'
import Capabilities from './Capabilities.vue'

const headshot = new URL('../../assets/img/headshot-transparent.png', import.meta.url).href
</script>

<template>
  <div class="site">
    <header class="identity">
      <div class="name">
        <h1>Robert<br />Munson</h1>
        <p>Engineering Leader</p>
      </div>
      <p class="intro">{{ story.intro }}</p>
      <div class="profile">
        <div class="portrait">
          <img :src="headshot" alt="Robert Munson" width="1303" height="1207" fetchpriority="high" />
        </div>
        <ContactLinks />
      </div>
    </header>

    <main id="main-content" class="content" tabindex="-1">
      <article aria-labelledby="current-company">
        <header class="company-heading">
          <h2 id="current-company">Infotech</h2>
          <span>2010 — Present</span>
        </header>
        <p class="role">{{ experience[0]!.roles[0]!.title }}</p>
        <p class="lead">{{ story.lead }}</p>
        <p class="growth">{{ story.growth }}</p>

        <div class="work-index">
          <details v-for="(work, index) in story.work" :key="work.id" :open="index === 0">
            <summary data-umami-event="content-toggle" :data-umami-event-section="work.id">
              <span class="work-number">0{{ index + 1 }}</span>
              <h3>{{ work.title }}</h3>
              <span class="disclosure-icon" aria-hidden="true"></span>
            </summary>
            <div class="evidence">
              <p>{{ work.text }}</p>
              <p v-if="'note' in work" class="note">{{ work.note }}</p>
            </div>
          </details>
        </div>
        <CareerRecord />
      </article>

      <article class="business" aria-labelledby="business-title">
        <header class="company-heading">
          <h2 id="business-title">An owner’s perspective.</h2>
          <span>Since 2022</span>
        </header>
        <p class="role">Co-founder &amp; co-owner · Digital education</p>
        <p class="business-lead">{{ story.business[0] }}</p>
        <p>{{ story.business[1] }}</p>
        <details>
          <summary data-umami-event="content-toggle" data-umami-event-section="business-operations">Product, economics &amp; operations <span class="disclosure-icon" aria-hidden="true"></span></summary>
          <div class="business-detail">
            <p>{{ story.business[2] }}</p>
            <p>{{ story.business[3] }}</p>
          </div>
        </details>
      </article>

      <div class="earlier-career" aria-label="Earlier career">
        <details v-for="entry in experience.slice(2)" :key="entry.company">
          <summary data-umami-event="content-toggle" :data-umami-event-section="`earlier-career-${entry.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`">
            <span class="dates">{{ entry.period }}</span>
            <h2>{{ entry.company }}</h2>
            <span class="disclosure-icon" aria-hidden="true"></span>
          </summary>
          <div class="earlier-detail">
            <p class="role">{{ entry.roles[0]!.title }}</p>
            <p>{{ entry.summary }}</p>
          </div>
        </details>
      </div>

      <Capabilities />

      <footer><span>Robert Munson</span><ContactLinks /></footer>
    </main>
  </div>
</template>
