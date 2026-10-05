<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { courses, getCourseStats } from '../data/courses.js'
import { useProgress } from '../composables/useProgress.js'
import { useDailyChallenge } from '../composables/useDailyChallenge.js'
import { useAds } from '../ads/adManager.js'

const { streak, totalXP, totalLessonsCompleted, getCourseProgress } = useProgress()
const { dailyLesson, dailyWord } = useDailyChallenge()
const { showBanner, hideBanner } = useAds()

onMounted(() => { showBanner() })
onUnmounted(() => { hideBanner() })

const coursesWithProgress = computed(() =>
  courses.map(course => ({
    ...course,
    stats: getCourseStats(course.id),
    progress: getCourseProgress(course.modules)
  }))
)

const level = computed(() => {
  const xp = totalXP.value
  if (xp >= 5000) return { name: 'Master', num: 5 }
  if (xp >= 2000) return { name: 'Expert', num: 4 }
  if (xp >= 1000) return { name: 'Advanced', num: 3 }
  if (xp >= 300) return { name: 'Learner', num: 2 }
  return { name: 'Beginner', num: 1 }
})

// Collect all pronunciation lessons for quick access
const pronunciationLessons = computed(() => {
  const result = []
  for (const course of courses) {
    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        const hasPronunciation = lesson.exercises.some(e => e.type === 'pronunciation')
        if (hasPronunciation) {
          result.push({ ...lesson, level: course.level, color: course.color, moduleName: mod.title })
        }
      }
    }
  }
  return result
})
</script>

<template>
  <div class="safe-top">
    <!-- Header -->
    <div class="px-5 pt-6 pb-4">
      <h1 class="text-2xl font-extrabold">English Practice</h1>
      <p class="text-dark-400 text-sm mt-1">Your personal English tutor</p>
    </div>

    <!-- Stats bar -->
    <div class="px-5 mb-6">
      <div class="card flex items-center justify-between">
        <div class="text-center">
          <div class="text-2xl font-bold text-orange-400">{{ streak }}</div>
          <div class="text-xs text-dark-400">Day streak</div>
        </div>
        <div class="w-px h-10 bg-dark-600"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-primary-400">{{ totalXP }}</div>
          <div class="text-xs text-dark-400">Total XP</div>
        </div>
        <div class="w-px h-10 bg-dark-600"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-emerald-400">{{ totalLessonsCompleted }}</div>
          <div class="text-xs text-dark-400">Lessons</div>
        </div>
        <div class="w-px h-10 bg-dark-600"></div>
        <div class="text-center">
          <div class="text-lg font-bold text-amber-400">Lv.{{ level.num }}</div>
          <div class="text-xs text-dark-400">{{ level.name }}</div>
        </div>
      </div>
    </div>

    <!-- Daily Challenge -->
    <div v-if="dailyLesson" class="px-5 mb-6">
      <h2 class="text-lg font-bold mb-3">Daily Challenge</h2>
      <router-link
        :to="`/lesson/${dailyLesson.id}`"
        class="block rounded-2xl p-4 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10 active:scale-[0.98] transition-transform"
      >
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-2xl flex-shrink-0">
            🎯
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-xs font-bold text-amber-400 uppercase tracking-wide mb-0.5">Today's challenge</div>
            <h3 class="font-bold">{{ dailyLesson.title }}</h3>
            <p class="text-dark-400 text-sm">{{ dailyLesson.exercises?.length || 0 }} exercises</p>
          </div>
          <svg class="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </router-link>
    </div>

    <!-- Word of the Day -->
    <div v-if="dailyWord" class="px-5 mb-6">
      <h2 class="text-lg font-bold mb-3">Word of the Day</h2>
      <div class="card border-primary-500/20">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-lg flex-shrink-0">
            📖
          </div>
          <div class="flex-1">
            <div class="flex items-baseline gap-2 mb-1">
              <h3 class="text-lg font-bold text-primary-300">{{ dailyWord.word }}</h3>
              <span class="text-xs text-dark-400">{{ dailyWord.phonetic }}</span>
            </div>
            <p class="text-sm text-dark-300 mb-2">{{ dailyWord.definition }}</p>
            <p class="text-sm text-dark-400 italic">"{{ dailyWord.example }}"</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pronunciation / Speaking -->
    <div v-if="pronunciationLessons.length" class="px-5 mb-6">
      <h2 class="text-lg font-bold mb-3">Pronunciation &amp; Speaking</h2>
      <div class="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
        <router-link
          v-for="lesson in pronunciationLessons"
          :key="lesson.id"
          :to="`/lesson/${lesson.id}`"
          class="flex-shrink-0 w-56 rounded-2xl p-4 border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/5 active:scale-[0.97] transition-transform"
        >
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🗣️</span>
            <span
              class="text-xs font-bold px-2 py-0.5 rounded-full"
              :style="{ backgroundColor: lesson.color + '30', color: lesson.color }"
            >
              {{ lesson.level }}
            </span>
          </div>
          <h3 class="font-bold text-sm mb-1">{{ lesson.title }}</h3>
          <p class="text-xs text-dark-400">{{ lesson.moduleName }}</p>
          <div class="flex items-center gap-1 mt-2">
            <svg class="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-14 0m7 7v4m-4 0h8m-4-12a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <span class="text-xs text-purple-400">{{ lesson.exercises.length }} exercises</span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Courses -->
    <div class="px-5 mb-6">
      <h2 class="text-lg font-bold mb-3">Courses</h2>
      <div class="space-y-3">
        <router-link
          v-for="course in coursesWithProgress"
          :key="course.id"
          :to="`/course/${course.id}`"
          class="card block active:scale-[0.98] transition-transform"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              :style="{ backgroundColor: course.color + '20' }"
            >
              {{ course.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <span
                  class="text-xs font-bold px-2 py-0.5 rounded-full"
                  :style="{ backgroundColor: course.color + '30', color: course.color }"
                >
                  {{ course.level }}
                </span>
                <span class="font-bold">{{ course.title }}</span>
              </div>
              <p class="text-dark-400 text-sm mt-0.5">{{ course.subtitle }}</p>
              <div class="flex items-center gap-3 mt-2 text-xs text-dark-400">
                <span>{{ course.stats.modules }} modules</span>
                <span>{{ course.stats.lessons }} lessons</span>
                <span>{{ course.stats.exercises }} exercises</span>
              </div>
              <!-- Progress bar -->
              <div v-if="course.progress.percentage > 0" class="mt-2">
                <div class="progress-bar">
                  <div
                    class="progress-bar-fill"
                    :style="{ width: course.progress.percentage + '%', backgroundColor: course.color }"
                  ></div>
                </div>
                <div class="text-xs mt-1" :style="{ color: course.color }">
                  {{ course.progress.percentage }}% complete
                </div>
              </div>
            </div>
            <!-- Arrow -->
            <svg class="w-5 h-5 text-dark-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
