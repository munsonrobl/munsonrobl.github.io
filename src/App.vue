<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { profile } from './data/profile'
import HeroSection from './components/HeroSection.vue'
import PerspectiveTabs from './components/PerspectiveTabs.vue'
import SelectedImpact from './components/SelectedImpact.vue'
import CapabilitiesSection from './components/CapabilitiesSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import SiteFooter from './components/SiteFooter.vue'
import type { Perspective } from './types/resume'

type DesignStyle = 'framework' | 'field' | 'nightshift'

const styles: { id: DesignStyle; number: string; name: string; note: string }[] = [
  { id: 'framework', number: '01', name: 'Framework', note: 'Precision grid' },
  { id: 'field', number: '02', name: 'Field', note: 'Spatial studio' },
  { id: 'nightshift', number: '03', name: 'Nightshift', note: 'Dark technical' },
]

const activePerspective = ref<Perspective>('leadership')
const activeStyle = ref<DesignStyle>('framework')

onMounted(() => {
  const requested = new URLSearchParams(window.location.search).get('style') as DesignStyle | null
  if (requested && styles.some(style => style.id === requested)) activeStyle.value = requested
})

watch(activeStyle, (value) => {
  const url = new URL(window.location.href)
  url.searchParams.set('style', value)
  window.history.replaceState({}, '', url)
  document.title = `Robert Munson — ${styles.find(style => style.id === value)?.name}`
})
</script>

<template>
  <div :class="['site', `style-${activeStyle}`]">
    <a href="#main-content" class="skip-link">Skip to content</a>

    <aside class="style-switcher" aria-label="Compare design styles">
      <span class="switcher-label">Design round 03</span>
      <button v-for="style in styles" :key="style.id" type="button" :aria-pressed="activeStyle === style.id"
        @click="activeStyle = style.id">
        <b>{{ style.number }}</b><span>{{ style.name }}</span><small>{{ style.note }}</small>
      </button>
    </aside>

    <header class="site-header page-shell">
      <a class="profile-logo" href="#top" aria-label="Robert Munson, home">
        <img :src="profile.photo" alt="" width="38" height="38" />
        <span><b>Robert Munson</b><small>Engineering leadership</small></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a><a href="#experience">Career</a><a href="#skills">Capabilities</a><a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="main-content" tabindex="-1">
      <HeroSection />

      <section id="work" class="work-section" aria-labelledby="work-heading">
        <div class="page-shell">
          <header class="section-heading work-heading">
            <p>Selected work</p>
            <h2 id="work-heading">Three views of the same career.</h2>
            <span>Leadership, engineering, and business experience—organized by the outcome it supports.</span>
          </header>
          <div class="work-layout">
            <PerspectiveTabs v-model="activePerspective" />
            <div id="perspective-panel" role="tabpanel" :aria-labelledby="`tab-${activePerspective}`" tabindex="0">
              <SelectedImpact :perspective="activePerspective" />
            </div>
          </div>
        </div>
      </section>

      <ExperienceTimeline />
      <CapabilitiesSection />
    </main>

    <SiteFooter />
  </div>
</template>
