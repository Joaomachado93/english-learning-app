<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { findModule } from '../data/courses.js'
import { useProgress } from '../composables/useProgress.js'

const route = useRoute()
const router = useRouter()
const { getLessonProgress, isLessonCompleted } = useProgress()

const data = computed(() => findModule(route.params.moduleId))
const mod = computed(() => data.value?.module)
const course = computed(() => data.value?.course)

function scoreLabel(lesson) {
  const p = getLessonProgress(lesson.id)
  if (!p) return null
  return `${p.bestScore}/${p.total}`
}

function scorePercentage(lesson) {
  const p = getLessonProgress(lesson.id)
  if (!p) return 0
  return Math.round((p.bestScore / p.total) * 100)
}
</script>

<template>
  <div class="safe-top" v-if="mod">
    <!-- Header -->
    <div class="px-5 pt-4 pb-4">
      <button @click="router.back()" class="flex items-center gap-1 text-dark-400 mb-3">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-dark-700 flex items-center justify-center text-xl">
          {{ mod.icon }}
        </div>
        <div>
          <span class="text-xs font-bold px-2 py-0.5 rounded-full"
            :style="{ backgroundColor: course.color + '30', color: course.color }">
            {{ course.level }}
          </span>
          <h1 class="text-xl font-bold mt-1">{{ mod.title }}</h1>
        </div>
      </div>
      <p class="text-dark-400 text-sm mt-2">{{ mod.description }}</p>
    </div>

    <!-- Lessons list -->
    <div class="px-5 pb-6">
      <h2 class="text-lg font-bold mb-3">Lessons</h2>
      <div class="space-y-3">
        <router-link
          v-for="(lesson, index) in mod.lessons"
          :key="lesson.id"
          :to="`/lesson/${lesson.id}`"
          class="card block active:scale-[0.98] transition-transform"
        >
          <div class="flex items-center gap-4">
            <!-- Lesson number / check -->
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
              :class="isLessonCompleted(lesson.id)
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-dark-700 text-dark-300'"
            >
              <svg v-if="isLessonCompleted(lesson.id)" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span v-else>{{ index + 1 }}</span>
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="font-semibold">{{ lesson.title }}</h3>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-xs px-2 py-0.5 rounded-full bg-dark-700 text-dark-300 capitalize">
                  {{ lesson.type }}
                </span>
                <span class="text-xs text-dark-400">{{ lesson.exercises.length }} exercises</span>
              </div>
              <!-- Score if completed -->
              <div v-if="scoreLabel(lesson)" class="flex items-center gap-2 mt-1.5">
                <div class="text-xs" :class="scorePercentage(lesson) >= 80 ? 'text-emerald-400' : scorePercentage(lesson) >= 50 ? 'text-amber-400' : 'text-red-400'">
                  Best: {{ scoreLabel(lesson) }} ({{ scorePercentage(lesson) }}%)
                </div>
              </div>
            </div>

            <svg class="w-5 h-5 text-dark-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
