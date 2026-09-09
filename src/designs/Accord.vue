<script setup lang="ts">
import { story } from '../data/story'
import { experience } from '../data/experience'
import ContactLinks from './ContactLinks.vue'
import CareerRecord from './CareerRecord.vue'
import AccordCapabilities from '../components/AccordCapabilities.vue'

const headshot = new URL('../../assets/img/headshot-transparent.png', import.meta.url).href
</script>

<template>
  <div class="accord design-surface">
    <header class="accord-identity">
      <div class="accord-name">
        <h1>Robert<br />Munson</h1>
        <p>Engineering Leader</p>
      </div>
      <p class="accord-intro">{{ story.intro }}</p>
      <div class="accord-profile">
        <div class="accord-portrait">
          <img :src="headshot" alt="Robert Munson" width="1303" height="1207" fetchpriority="high" />
        </div>
        <ContactLinks />
      </div>
    </header>

    <main id="main-content" class="accord-content" tabindex="-1">
      <article aria-labelledby="accord-infotech">
        <header class="accord-company">
          <h2 id="accord-infotech">Infotech</h2>
          <span>2010 — Present</span>
        </header>
        <p class="accord-role">{{ experience[0]!.roles[0]!.title }}</p>
        <p class="accord-lead">{{ story.lead }}</p>
        <p class="accord-growth">{{ story.growth }}</p>

        <div class="accord-index">
          <details v-for="(work, index) in story.work" :key="work.id" :open="index === 0">
            <summary>
              <span class="accord-number">0{{ index + 1 }}</span>
              <h3>{{ work.title }}</h3>
              <span class="accord-toggle" aria-hidden="true"></span>
            </summary>
            <div class="accord-evidence">
              <p>{{ work.text }}</p>
              <p v-if="'note' in work" class="accord-note">{{ work.note }}</p>
            </div>
          </details>
        </div>
        <CareerRecord />
      </article>

      <article class="accord-business" aria-labelledby="accord-business-title">
        <header class="accord-company">
          <h2 id="accord-business-title">An owner’s perspective.</h2>
          <span>Since 2022</span>
        </header>
        <p class="accord-role">Co-founder &amp; co-owner · Digital education</p>
        <p class="accord-business-lead">{{ story.business[0] }}</p>
        <p>{{ story.business[1] }}</p>
        <details>
          <summary>Product, economics &amp; operations <span class="accord-toggle" aria-hidden="true"></span></summary>
          <div class="accord-business-detail">
            <p>{{ story.business[2] }}</p>
            <p>{{ story.business[3] }}</p>
          </div>
        </details>
      </article>

      <div class="accord-earlier" aria-label="Earlier career">
        <details v-for="entry in experience.slice(2)" :key="entry.company">
          <summary>
            <span class="accord-dates">{{ entry.period }}</span>
            <h2>{{ entry.company }}</h2>
            <span class="accord-toggle" aria-hidden="true"></span>
          </summary>
          <div class="accord-earlier-detail">
            <p class="accord-role">{{ entry.roles[0]!.title }}</p>
            <p>{{ entry.summary }}</p>
          </div>
        </details>
      </div>

      <AccordCapabilities />

      <footer><span>Robert Munson</span><ContactLinks /></footer>
    </main>
  </div>
</template>
