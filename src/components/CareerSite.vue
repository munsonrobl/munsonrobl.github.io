<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { story } from '../data/story'
import { experience } from '../data/experience'
import { externalLinks } from '../data/links'
import ContactLinks from './ContactLinks.vue'
import CareerRecord from './CareerRecord.vue'
import Capabilities from './Capabilities.vue'

const headshot = new URL('../../assets/img/headshot-transparent.png', import.meta.url).href
const headshot320 = new URL('../../assets/img/headshot-320.webp', import.meta.url).href
const headshot640 = new URL('../../assets/img/headshot-640.webp', import.meta.url).href
const siteElement = ref<HTMLElement | null>(null)
const activeSection = ref({ title: 'Infotech', label: 'Current role' })
const sectionIndicatorVisible = ref(false)

let revealObserver: IntersectionObserver | undefined
let scrollFrame = 0

const updateScrollState = () => {
  cancelAnimationFrame(scrollFrame)
  scrollFrame = requestAnimationFrame(() => {
    const page = document.documentElement
    const scrollRange = page.scrollHeight - window.innerHeight
    const progress = scrollRange > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollRange)) : 0

    siteElement.value?.style.setProperty('--scroll-progress', progress.toString())

    const sections = Array.from(
      siteElement.value?.querySelectorAll<HTMLElement>('[data-section-label]') ?? [],
    )
    const marker = 56
    let currentSection = sections[0]

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) currentSection = section
      else break
    }

    if (currentSection?.dataset.sectionLabel && currentSection.dataset.sectionTitle) {
      activeSection.value = {
        title: currentSection.dataset.sectionTitle,
        label: currentSection.dataset.sectionLabel,
      }
    }
    sectionIndicatorVisible.value = window.scrollY > 48
  })
}

onMounted(() => {
  const revealElements = siteElement.value?.querySelectorAll<HTMLElement>('[data-reveal]') ?? []
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reduceMotion) {
    siteElement.value?.classList.add('motion-ready')
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          revealObserver?.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )
    revealElements.forEach((element) => revealObserver?.observe(element))
  }

  window.addEventListener('scroll', updateScrollState, { passive: true })
  window.addEventListener('resize', updateScrollState)
  updateScrollState()
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  cancelAnimationFrame(scrollFrame)
  window.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('resize', updateScrollState)
})
</script>

<template>
  <div ref="siteElement" class="site">
    <header class="identity">
      <div class="scroll-progress" aria-hidden="true"></div>
      <div class="name">
        <h1>Robert<br />Munson</h1>
        <p>Engineering Leader</p>
      </div>
      <p class="intro">{{ story.intro }}</p>
      <div class="profile">
        <div class="portrait">
          <picture>
            <source
              type="image/webp"
              :srcset="`${headshot320} 320w, ${headshot640} 640w`"
              sizes="(max-width: 740px) 115px, 272px"
            />
            <img :src="headshot" alt="Robert Munson" width="640" height="593" fetchpriority="high" decoding="async" />
          </picture>
        </div>
        <div class="resume-prompt">
          <span>Full career record</span>
          <p>Roles, dates, and additional detail.</p>
          <a :href="externalLinks.resumeUrl" download data-umami-event="resume-download" data-umami-event-placement="sidebar">
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
        <ContactLinks hide-resume />
      </div>
    </header>

    <main id="main-content" class="content" tabindex="-1">
      <div class="section-indicator" :class="{ 'is-visible': sectionIndicatorVisible }" aria-hidden="true">
        <Transition name="section-label" mode="out-in">
          <div :key="`${activeSection.title}-${activeSection.label}`" class="section-indicator-content">
            <strong>{{ activeSection.title }}</strong>
            <span>{{ activeSection.label }}</span>
          </div>
        </Transition>
      </div>

      <article aria-labelledby="current-company" data-section-title="Infotech" data-section-label="Current role" data-reveal>
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
        <CareerRecord data-section-title="Infotech" data-section-label="Previous roles" />
      </article>

      <div class="earlier-career" aria-label="Earlier career" data-section-title="Earlier career" data-section-label="Career history" data-reveal>
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

      <article class="business" aria-labelledby="business-title" data-section-title="A broader operating lens." data-section-label="Business perspective" data-reveal>
        <header class="company-heading">
          <h2 id="business-title">A broader operating lens.</h2>
          <span>Business &amp; operations</span>
        </header>
        <p class="role">Experience across product, growth &amp; operations</p>
        <p class="business-lead">{{ story.business[0] }}</p>
        <p>{{ story.business[1] }}</p>
        <details>
          <summary data-umami-event="content-toggle" data-umami-event-section="business-operations">Growth, economics &amp; operations <span class="disclosure-icon" aria-hidden="true"></span></summary>
          <div class="business-detail">
            <p>{{ story.business[2] }}</p>
            <p>{{ story.business[3] }}</p>
          </div>
        </details>
      </article>

      <Capabilities data-section-title="Demonstrated range." data-section-label="Capabilities" data-reveal />

      <footer><span>Robert Munson</span><ContactLinks /></footer>
    </main>
  </div>
</template>
