<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { courses } from '../data/courses.js'
import { useProgress } from '../composables/useProgress.js'
import { useAds } from '../ads/adManager.js'

const route = useRoute()
const router = useRouter()
const { getCourseProgress, isLessonCompleted } = useProgress()
const { showBanner, hideBanner } = useAds()

onMounted(() => { showBanner() })
onUnmounted(() => { hideBanner() })

const course = computed(() => courses.find(c => c.id === route.params.courseId))
const progress = computed(() => course.value ? getCourseProgress(course.value.modules) : null)

function getModuleLessonProgress(mod) {
  const completed = mod.lessons.filter(l => isLessonCompleted(l.id)).length
  return { completed, total: mod.lessons.length, pct: mod.lessons.length ? Math.round((completed / mod.lessons.length) * 100) : 0 }
}
</script>

<template>
  <div class="safe-top" v-if="course">
    <!-- Header -->
    <div class="px-5 pt-4 pb-4">
      <button @click="router.back()" class="flex items-center gap-1 text-dark-400 mb-3">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <div class="flex items-center gap-3 mb-2">
        <div
          class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
          :style="{ backgroundColor: course.color + '20' }"
        >
          {{ course.icon }}
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full"
              :style="{ backgroundColor: course.color + '30', color: course.color }">
              {{ course.level }}
            </span>
          </div>
          <h1 class="text-xl font-bold">{{ course.title }}</h1>
        </div>
      </div>

      <p class="text-dark-400 text-sm">{{ course.subtitle }}</p>

      <!-- Overall progress -->
      <div v-if="progress && progress.percentage > 0" class="mt-3">
        <div class="flex justify-between text-sm mb-1">
          <span class="text-dark-400">Progress</span>
          <span :style="{ color: course.color }">{{ progress.completed }}/{{ progress.total }} lessons</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" :style="{ width: progress.percentage + '%', backgroundColor: course.color }"></div>
        </div>
      </div>
    </div>

    <!-- Modules -->
    <div class="px-5 pb-6">
      <h2 class="text-lg font-bold mb-3">Modules</h2>
      <div class="space-y-3">
        <router-link
          v-for="(mod, index) in course.modules"
          :key="mod.id"
          :to="`/module/${mod.id}`"
          class="card block active:scale-[0.98] transition-transform"
        >
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-dark-700 flex items-center justify-center text-xl flex-shrink-0">
              {{ mod.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-xs text-dark-400 font-medium">Module {{ index + 1 }}</span>
                <span v-if="getModuleLessonProgress(mod).pct === 100" class="text-xs text-emerald-400 font-medium">Complete</span>
              </div>
              <h3 class="font-bold">{{ mod.title }}</h3>
              <p class="text-dark-400 text-sm">{{ mod.description }}</p>
              <div class="text-xs text-dark-500 mt-1">{{ mod.lessons.length }} lessons</div>

              <div v-if="getModuleLessonProgress(mod).completed > 0" class="mt-2">
                <div class="progress-bar">
                  <div class="progress-bar-fill" :style="{ width: getModuleLessonProgress(mod).pct + '%' }"></div>
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
