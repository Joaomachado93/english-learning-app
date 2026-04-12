import { reactive, computed, watchEffect, watch } from 'vue'
import { currentUser, saveProgressToCloud, loadProgressFromCloud } from '../firebase.js'

const STORAGE_KEY = 'english-app-progress'

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

const state = reactive({
  lessons: loadProgress(),
  streak: parseInt(localStorage.getItem('english-app-streak') || '0'),
  lastPracticeDate: localStorage.getItem('english-app-last-date') || null,
  totalXP: parseInt(localStorage.getItem('english-app-xp') || '0')
})

let saveTimeout = null

// Auto-save to localStorage
watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lessons))
  localStorage.setItem('english-app-streak', state.streak.toString())
  localStorage.setItem('english-app-last-date', state.lastPracticeDate || '')
  localStorage.setItem('english-app-xp', state.totalXP.toString())
})

// Debounced save to cloud
function saveToCloud() {
  if (saveTimeout) clearTimeout(saveTimeout)
  saveTimeout = setTimeout(() => {
    if (currentUser.value) {
      saveProgressToCloud({
        lessons: JSON.parse(JSON.stringify(state.lessons)),
        streak: state.streak,
        lastPracticeDate: state.lastPracticeDate,
        totalXP: state.totalXP
      }).catch(err => console.error('Cloud save error:', err))
    }
  }, 2000)
}

// When user logs in, load their progress from cloud
watch(currentUser, async (user) => {
  if (user) {
    try {
      const cloudData = await loadProgressFromCloud()
      if (cloudData) {
        // Merge: keep the best progress from local and cloud
        const cloudLessons = cloudData.lessons || {}
        const localLessons = state.lessons

        for (const [id, cloudLesson] of Object.entries(cloudLessons)) {
          const local = localLessons[id]
          if (!local || (cloudLesson.bestScore || 0) > (local.bestScore || 0)) {
            state.lessons[id] = cloudLesson
          }
        }

        // Take the higher values
        state.streak = Math.max(state.streak, cloudData.streak || 0)
        state.totalXP = Math.max(state.totalXP, cloudData.totalXP || 0)
        state.lastPracticeDate = cloudData.lastPracticeDate || state.lastPracticeDate
      }
      // Save merged state back to cloud
      saveToCloud()
    } catch (err) {
      console.error('Cloud load error:', err)
    }
  }
})

export function useProgress() {
  function completeLesson(lessonId, score, total) {
    const existing = state.lessons[lessonId]
    const bestScore = existing ? Math.max(existing.bestScore || 0, score) : score
    const attempts = existing ? (existing.attempts || 0) + 1 : 1

    state.lessons[lessonId] = {
      completed: true,
      score,
      total,
      bestScore,
      attempts,
      lastAttempt: new Date().toISOString()
    }

    const xpGained = score * 10 + (score === total ? 50 : 0)
    state.totalXP += xpGained

    const today = new Date().toDateString()
    if (state.lastPracticeDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      if (state.lastPracticeDate === yesterday) {
        state.streak++
      } else if (state.lastPracticeDate !== today) {
        state.streak = 1
      }
      state.lastPracticeDate = today
    }

    // Save to cloud
    saveToCloud()

    return xpGained
  }

  function getLessonProgress(lessonId) {
    return state.lessons[lessonId] || null
  }

  function isLessonCompleted(lessonId) {
    return state.lessons[lessonId]?.completed || false
  }

  function getModuleProgress(moduleId, lessons) {
    const moduleLessons = lessons.filter(l => l.id.startsWith(moduleId))
    const completed = moduleLessons.filter(l => state.lessons[l.id]?.completed).length
    return {
      completed,
      total: moduleLessons.length,
      percentage: moduleLessons.length ? Math.round((completed / moduleLessons.length) * 100) : 0
    }
  }

  function getCourseProgress(courseModules) {
    let totalLessons = 0
    let completedLessons = 0
    for (const mod of courseModules) {
      for (const lesson of mod.lessons) {
        totalLessons++
        if (state.lessons[lesson.id]?.completed) completedLessons++
      }
    }
    return {
      completed: completedLessons,
      total: totalLessons,
      percentage: totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0
    }
  }

  function resetProgress() {
    Object.keys(state.lessons).forEach(key => delete state.lessons[key])
    state.streak = 0
    state.lastPracticeDate = null
    state.totalXP = 0
    saveToCloud()
  }

  const streak = computed(() => state.streak)
  const totalXP = computed(() => state.totalXP)
  const totalLessonsCompleted = computed(() =>
    Object.values(state.lessons).filter(l => l.completed).length
  )

  return {
    completeLesson,
    getLessonProgress,
    isLessonCompleted,
    getModuleProgress,
    getCourseProgress,
    resetProgress,
    streak,
    totalXP,
    totalLessonsCompleted,
    lessons: state.lessons
  }
}
