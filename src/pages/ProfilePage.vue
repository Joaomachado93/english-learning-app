<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProgress } from '../composables/useProgress.js'
import { courses } from '../data/courses.js'
import { currentUser, logout, loginWithGoogle } from '../firebase.js'
import { isAndroid } from '../platform/isAndroid.js'

const router = useRouter()
const { streak, totalXP, totalLessonsCompleted, getCourseProgress, resetProgress, lessons } = useProgress()
const showReset = ref(false)

const level = computed(() => {
  const xp = totalXP.value
  if (xp >= 5000) return { name: 'Master', num: 5, next: null, progress: 100 }
  if (xp >= 2000) return { name: 'Expert', num: 4, next: 5000, progress: ((xp - 2000) / 3000) * 100 }
  if (xp >= 1000) return { name: 'Advanced', num: 3, next: 2000, progress: ((xp - 1000) / 1000) * 100 }
  if (xp >= 300) return { name: 'Learner', num: 2, next: 1000, progress: ((xp - 300) / 700) * 100 }
  return { name: 'Beginner', num: 1, next: 300, progress: (xp / 300) * 100 }
})

const totalExercises = computed(() =>
  Object.values(lessons).reduce((sum, l) => sum + (l.score || 0), 0)
)

const averageScore = computed(() => {
  const completed = Object.values(lessons).filter(l => l.completed)
  if (!completed.length) return 0
  const avg = completed.reduce((sum, l) => sum + (l.bestScore / l.total) * 100, 0) / completed.length
  return Math.round(avg)
})

async function handleLogout() {
  await logout()
  router.push('/login')
}

async function handleLogin() {
  try {
    await loginWithGoogle()
  } catch (err) {
    // ignore
  }
}

function confirmReset() {
  resetProgress()
  showReset.value = false
}
</script>

<template>
  <div class="safe-top">
    <div class="px-5 pt-6 pb-4">
      <h1 class="text-2xl font-extrabold">Profile</h1>
    </div>

    <!-- User Account -->
    <div class="px-5 mb-6">
      <!-- Android: progress is local-only, no login -->
      <div class="card" v-if="isAndroid">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <svg class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-sm font-semibold">Progress saved on this device</p>
            <p class="text-xs text-dark-400 mt-0.5">Your XP, streak and completed lessons are kept locally — no account needed.</p>
          </div>
        </div>
      </div>
      <!-- iOS / web: existing Google sign-in flow -->
      <div class="card" v-else-if="currentUser">
        <div class="flex items-center gap-4">
          <img
            :src="currentUser.photoURL"
            :alt="currentUser.displayName"
            class="w-14 h-14 rounded-full"
          />
          <div class="flex-1">
            <h2 class="font-bold text-lg">{{ currentUser.displayName }}</h2>
            <p class="text-sm text-dark-400">{{ currentUser.email }}</p>
            <p class="text-xs text-emerald-400 mt-0.5">Progress synced to cloud</p>
          </div>
        </div>
        <button @click="handleLogout" class="mt-3 text-sm text-dark-400 underline">
          Sign out
        </button>
      </div>
      <div class="card" v-else>
        <p class="text-sm text-dark-400 mb-3">Sign in to save your progress across devices</p>
        <button @click="handleLogin" class="btn-primary w-full flex items-center justify-center gap-2">
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>

    <!-- Level -->
    <div class="px-5 mb-6">
      <div class="card text-center py-6">
        <h2 class="text-xl font-bold">Level {{ level.num }} - {{ level.name }}</h2>
        <p class="text-primary-400 font-bold text-lg">{{ totalXP }} XP</p>
        <div v-if="level.next" class="mt-3 px-6">
          <div class="flex justify-between text-xs text-dark-400 mb-1">
            <span>{{ totalXP }} XP</span>
            <span>{{ level.next }} XP</span>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-fill" :style="{ width: level.progress + '%' }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="px-5 mb-6">
      <h2 class="text-lg font-bold mb-3">Statistics</h2>
      <div class="grid grid-cols-2 gap-3">
        <div class="card text-center">
          <div class="text-3xl font-bold text-orange-400">{{ streak }}</div>
          <div class="text-xs text-dark-400 mt-1">Day Streak</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-emerald-400">{{ totalLessonsCompleted }}</div>
          <div class="text-xs text-dark-400 mt-1">Lessons Done</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-blue-400">{{ totalExercises }}</div>
          <div class="text-xs text-dark-400 mt-1">Correct Answers</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-amber-400">{{ averageScore }}%</div>
          <div class="text-xs text-dark-400 mt-1">Avg. Score</div>
        </div>
      </div>
    </div>

    <!-- Course Progress -->
    <div class="px-5 mb-6">
      <h2 class="text-lg font-bold mb-3">Course Progress</h2>
      <div class="space-y-3">
        <div v-for="course in courses" :key="course.id" class="card">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-xl">{{ course.icon }}</span>
            <span class="font-bold">{{ course.level }} - {{ course.title }}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-fill" :style="{ width: getCourseProgress(course.modules).percentage + '%', backgroundColor: course.color }"></div>
          </div>
          <div class="text-xs mt-1" :style="{ color: course.color }">
            {{ getCourseProgress(course.modules).completed }}/{{ getCourseProgress(course.modules).total }} lessons
          </div>
        </div>
      </div>
    </div>

    <!-- Reset -->
    <div class="px-5 pb-10">
      <button v-if="!showReset" @click="showReset = true" class="text-sm text-dark-500 underline">
        Reset all progress
      </button>
      <div v-else class="card border-red-500/30">
        <p class="text-sm text-dark-300 mb-3">Are you sure? This will delete all your progress.</p>
        <div class="flex gap-3">
          <button @click="confirmReset" class="btn-danger flex-1 text-sm py-2">Yes, reset</button>
          <button @click="showReset = false" class="btn-secondary flex-1 text-sm py-2">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
