<script setup lang="ts">
import { computed } from 'vue'
import { achievements } from '../data/achievements'
import { perspectives } from '../data/perspectives'
import type { Perspective } from '../types/resume'
const props = defineProps<{ perspective: Perspective }>()
const selected = computed(() => achievements
  .filter(item => item.perspectives[props.perspective])
  .sort((a, b) => (b.perspectives[props.perspective]?.weight ?? 0) - (a.perspectives[props.perspective]?.weight ?? 0)))
const activePerspective = computed(() => perspectives.find(item => item.id === props.perspective))
</script>

<template>
  <div class="work-list">
    <div v-if="activePerspective" class="perspective-intro">
      <h2>{{ activePerspective.heading }}</h2>
      <div class="perspective-copy">
        <p v-for="paragraph in activePerspective.intro" :key="paragraph" class="body-copy">{{ paragraph }}</p>
      </div>
    </div>
    <article v-for="(item, index) in selected" :key="item.id" class="work-entry">
      <div class="work-entry-heading">
        <span class="work-number">{{ String(index + 1).padStart(2, '0') }}</span>
        <p>{{ item.context }}</p>
        <h3>{{ item.perspectives[perspective]?.title }}</h3>
      </div>
      <div class="work-copy">
        <p class="work-summary">{{ item.perspectives[perspective]?.summary }}</p>
        <p class="body-copy">{{ item.perspectives[perspective]?.detail }}</p>
      </div>
    </article>
  </div>
</template>
