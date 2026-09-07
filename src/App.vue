<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import CredibilityStrip from './components/CredibilityStrip.vue'
import PerspectiveTabs from './components/PerspectiveTabs.vue'
import SelectedImpact from './components/SelectedImpact.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import CapabilityList from './components/CapabilityList.vue'
import SiteFooter from './components/SiteFooter.vue'
import { perspectives } from './data/perspectives'
import type { AiResponse, Perspective } from './types/resume'

const activePerspective = ref<Perspective>('leadership')
const activeContent = computed(() => perspectives.find((item) => item.id === activePerspective.value) ?? perspectives[0])

async function explore(response: AiResponse) {
  if (response.perspective) activePerspective.value = response.perspective
  await nextTick()
  if (response.target) document.getElementById(response.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div>
    <a href="#main-content" class="fixed left-4 top-3 z-50 -translate-y-20 bg-ink px-4 py-3 text-sm font-semibold text-white focus:translate-y-0">Skip to content</a>
    <main id="main-content">
      <HeroSection @explore="explore" />
      <CredibilityStrip />
      <section class="pt-16 sm:pt-24" aria-labelledby="perspective-heading">
        <div class="page-shell pb-10 sm:pb-14">
          <p class="section-kicker">One career, three perspectives</p>
          <h2 id="perspective-heading" class="section-heading text-balance">View the work through the lens that matters most.</h2>
        </div>
        <PerspectiveTabs v-model="activePerspective" />
        <div id="perspective-panel" role="tabpanel" :aria-labelledby="`tab-${activePerspective}`" tabindex="0">
          <Transition name="perspective" mode="out-in">
            <div :key="activePerspective">
              <section class="page-shell py-14 sm:py-20" aria-labelledby="perspective-intro-heading">
                <div class="grid gap-6 lg:grid-cols-[16rem_1fr] lg:gap-16">
                  <p class="section-kicker">{{ activeContent.eyebrow }}</p>
                  <div>
                    <h2 id="perspective-intro-heading" class="text-balance max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">{{ activeContent.title }}</h2>
                    <p class="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">{{ activeContent.description }}</p>
                  </div>
                </div>
              </section>
              <SelectedImpact :perspective="activePerspective" />
              <ExperienceTimeline :perspective="activePerspective" />
              <CapabilityList :content="activeContent" />
            </div>
          </Transition>
        </div>
      </section>
      <section class="page-shell border-t border-line py-12 sm:py-16" aria-labelledby="education-heading">
        <div class="grid gap-4 sm:grid-cols-[16rem_1fr] sm:gap-16">
          <p class="section-kicker">Education</p>
          <div>
            <h2 id="education-heading" class="text-2xl font-semibold tracking-[-0.03em] text-ink">Education details forthcoming</h2>
            <p class="mt-2 max-w-xl leading-7 text-muted">This section is intentionally reserved until the exact degree and institution wording are confirmed.</p>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.perspective-enter-active,
.perspective-leave-active { transition: opacity 150ms ease, transform 150ms ease; }
.perspective-enter-from { opacity: 0; transform: translateY(8px); }
.perspective-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
