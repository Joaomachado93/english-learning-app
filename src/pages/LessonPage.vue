<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { findLesson } from '../data/courses.js'
import { useProgress } from '../composables/useProgress.js'
import { useLessonAds } from '../composables/useLessonAds.js'
import MultipleChoice from '../components/exercises/MultipleChoice.vue'
import FillBlank from '../components/exercises/FillBlank.vue'
import Matching from '../components/exercises/Matching.vue'
import Reorder from '../components/exercises/Reorder.vue'
import Translation from '../components/exercises/Translation.vue'
import TrueFalse from '../components/exercises/TrueFalse.vue'
import Listening from '../components/exercises/Listening.vue'
import Pronunciation from '../components/exercises/Pronunciation.vue'

const route = useRoute()
const router = useRouter()
const { completeLesson } = useProgress()
const { recordLessonComplete } = useLessonAds()

const data = computed(() => findLesson(route.params.lessonId))
const lesson = computed(() => data.value?.lesson)
const exercises = computed(() => lesson.value?.exercises || [])

const currentIndex = ref(0)
const score = ref(0)
const answers = ref([]) // track answered state
const isFinished = ref(false)
const xpGained = ref(0)

const currentExercise = computed(() => exercises.value[currentIndex.value])
const progress = computed(() => exercises.value.length ? ((currentIndex.value) / exercises.value.length) * 100 : 0)

function onAnswer(isCorrect) {
  if (isCorrect) score.value++
  answers.value.push(isCorrect)
}

async function nextExercise() {
  if (currentIndex.value < exercises.value.length - 1) {
    currentIndex.value++
  } else {
    // Lesson complete
    isFinished.value = true
    xpGained.value = completeLesson(lesson.value.id, score.value, exercises.value.length)
    await recordLessonComplete()
  }
}

function restartLesson() {
  currentIndex.value = 0
  score.value = 0
  answers.value = []
  isFinished.value = false
  xpGained.value = 0
}

function goBack() {
  // Opened directly (daily challenge link, reload): there is no page to go back to.
  if (window.history.state?.back) {
    router.back()
  } else {
    router.replace(data.value ? `/module/${data.value.module.id}` : '/')
  }
}

const scorePercentage = computed(() => Math.round((score.value / exercises.value.length) * 100))
const scoreColor = computed(() => {
  if (scorePercentage.value >= 80) return 'text-emerald-400'
  if (scorePercentage.value >= 50) return 'text-amber-400'
  return 'text-red-400'
})
</script>

<template>
  <div class="min-h-screen bg-dark-900 flex flex-col safe-top" v-if="lesson">
    <!-- Finished screen -->
    <div v-if="isFinished" class="flex-1 flex flex-col items-center justify-center px-5 text-center">
      <div class="text-6xl mb-4">
        {{ scorePercentage >= 80 ? '🎉' : scorePercentage >= 50 ? '👍' : '💪' }}
      </div>
      <h1 class="text-2xl font-extrabold mb-2">
        {{ scorePercentage >= 80 ? 'Excellent!' : scorePercentage >= 50 ? 'Good job!' : 'Keep practicing!' }}
      </h1>
      <p class="text-dark-400 mb-6">{{ lesson.title }}</p>

      <div class="card w-full max-w-sm mb-6">
        <div class="flex justify-around">
          <div class="text-center">
            <div class="text-3xl font-bold" :class="scoreColor">{{ score }}/{{ exercises.length }}</div>
            <div class="text-xs text-dark-400 mt-1">Correct</div>
          </div>
          <div class="w-px bg-dark-600"></div>
          <div class="text-center">
            <div class="text-3xl font-bold" :class="scoreColor">{{ scorePercentage }}%</div>
            <div class="text-xs text-dark-400 mt-1">Score</div>
          </div>
          <div class="w-px bg-dark-600"></div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-400">+{{ xpGained }}</div>
            <div class="text-xs text-dark-400 mt-1">XP</div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-sm space-y-3">
        <button @click="restartLesson" class="btn-primary w-full">Try Again</button>
        <button @click="goBack" class="btn-secondary w-full">Back to Module</button>
      </div>
    </div>

    <!-- Exercise screen -->
    <template v-else>
      <!-- Top bar -->
      <div class="px-5 pt-4 pb-2">
        <div class="flex items-center gap-3 mb-3">
          <button @click="goBack" class="text-dark-400">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex-1 progress-bar">
            <div class="progress-bar-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <span class="text-sm text-dark-400 font-medium">{{ currentIndex + 1 }}/{{ exercises.length }}</span>
        </div>
      </div>

      <!-- Exercise content -->
      <div class="flex-1 px-5 pb-6">
        <transition name="fade" mode="out-in">
          <div :key="currentIndex">
            <MultipleChoice
              v-if="currentExercise.type === 'multiple-choice'"
              :exercise="currentExercise"
              @answer="onAnswer"
              @next="nextExercise"
            />
            <FillBlank
              v-else-if="currentExercise.type === 'fill-blank'"
              :exercise="currentExercise"
              @answer="onAnswer"
              @next="nextExercise"
            />
            <Matching
              v-else-if="currentExercise.type === 'matching'"
              :exercise="currentExercise"
              @answer="onAnswer"
              @next="nextExercise"
            />
            <Reorder
              v-else-if="currentExercise.type === 'reorder'"
              :exercise="currentExercise"
              @answer="onAnswer"
              @next="nextExercise"
            />
            <Translation
              v-else-if="currentExercise.type === 'translation'"
              :exercise="currentExercise"
              @answer="onAnswer"
              @next="nextExercise"
            />
            <TrueFalse
              v-else-if="currentExercise.type === 'true-false'"
              :exercise="currentExercise"
              @answer="onAnswer"
              @next="nextExercise"
            />
            <Listening
              v-else-if="currentExercise.type === 'listening'"
              :exercise="currentExercise"
              @answer="onAnswer"
              @next="nextExercise"
            />
            <Pronunciation
              v-else-if="currentExercise.type === 'pronunciation'"
              :exercise="currentExercise"
              @answer="onAnswer"
              @next="nextExercise"
            />
          </div>
        </transition>
      </div>
    </template>
  </div>

  <!-- Unknown lesson id (old link, removed lesson) -->
  <div v-else class="min-h-screen bg-dark-900 flex flex-col items-center justify-center px-5 text-center safe-top">
    <div class="text-5xl mb-4">🔎</div>
    <h1 class="text-xl font-extrabold mb-2">Lesson not found</h1>
    <p class="text-dark-400 mb-6">This lesson is no longer available.</p>
    <router-link to="/" replace class="btn-primary">Back to home</router-link>
  </div>
</template>
