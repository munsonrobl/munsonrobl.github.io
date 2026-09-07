<script setup lang="ts">
import { computed } from 'vue'
import { achievements } from '../data/achievements'
import type { Perspective } from '../types/resume'

const props = defineProps<{ perspective: Perspective }>()

const selected = computed(() =>
  achievements
    .filter((item) => item.perspectives[props.perspective])
    .sort((a, b) => (b.perspectives[props.perspective]?.weight ?? 0) - (a.perspectives[props.perspective]?.weight ?? 0))
    .slice(0, 3),
)
</script>

<template>
  <section id="selected-impact" class="page-shell py-16 sm:py-24" aria-labelledby="impact-heading">
    <div class="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-16">
      <div>
        <p class="section-kicker">Selected impact</p>
        <h2 id="impact-heading" class="section-heading text-balance">Where strategy becomes operating reality.</h2>
      </div>
      <div class="border-t border-line">
        <article v-for="item in selected" :key="`${props.perspective}-${item.id}`" class="border-b border-line py-8 sm:py-10">
          <div>
            <p class="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{{ item.context }}</p>
            <h3 class="mt-3 text-balance text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">{{ item.perspectives[props.perspective]?.title }}</h3>
            <p class="mt-4 max-w-3xl text-lg leading-8 text-ink">{{ item.perspectives[props.perspective]?.summary }}</p>
            <p class="mt-3 max-w-3xl leading-7 text-muted">{{ item.perspectives[props.perspective]?.detail }}</p>
            <ol v-if="item.perspectives[props.perspective]?.path" class="mt-6 grid gap-3 sm:grid-cols-4" aria-label="Product progression">
              <li v-for="step in item.perspectives[props.perspective]?.path" :key="step" class="relative border-t-2 border-accent pt-3 text-sm font-medium text-ink">
                {{ step }}
              </li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
