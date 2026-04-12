<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

const isSupported = ref(false)
const isListening = ref(false)
const transcript = ref('')
const answered = ref(false)
const score = ref(0)
const feedback = ref([])
const attempts = ref(0)
const maxAttempts = 3
const showModel = ref(false)
let recognition = null

onMounted(() => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition
  if (SR) {
    isSupported.value = true
    recognition = new SR()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 3
    recognition.continuous = false

    recognition.onresult = (event) => {
      // Check all alternatives for best match
      let bestScore = 0
      let bestTranscript = ''
      for (let i = 0; i < event.results[0].length; i++) {
        const alt = event.results[0][i].transcript
        const s = calculateScore(alt, props.exercise.sentence)
        if (s > bestScore) {
          bestScore = s
          bestTranscript = alt
        }
      }
      transcript.value = bestTranscript
      score.value = bestScore
      isListening.value = false
    }

    recognition.onerror = (event) => {
      isListening.value = false
      if (event.error === 'no-speech') {
        transcript.value = '(No speech detected - try again)'
      } else if (event.error === 'not-allowed') {
        transcript.value = '(Microphone access denied - check settings)'
      }
    }

    recognition.onend = () => {
      isListening.value = false
    }
  }
})

onUnmounted(() => {
  if (recognition) {
    recognition.abort()
  }
})

function normalize(str) {
  return str.toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[.,!?;:\-"]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function calculateScore(spoken, target) {
  const spokenWords = normalize(spoken).split(' ')
  const targetWords = normalize(target).split(' ')

  let matchCount = 0
  const targetCopy = [...targetWords]

  for (const word of spokenWords) {
    const idx = targetCopy.indexOf(word)
    if (idx !== -1) {
      matchCount++
      targetCopy.splice(idx, 1)
    }
  }

  // Word match percentage
  const wordScore = targetWords.length > 0 ? matchCount / targetWords.length : 0

  // Order score - check sequential matches
  let orderScore = 0
  if (spokenWords.length > 0 && targetWords.length > 0) {
    let lastIdx = -1
    let orderMatches = 0
    for (const word of spokenWords) {
      const idx = targetWords.indexOf(word, lastIdx + 1)
      if (idx !== -1 && idx > lastIdx) {
        orderMatches++
        lastIdx = idx
      }
    }
    orderScore = orderMatches / targetWords.length
  }

  // Combined score (70% word match, 30% order)
  return Math.round((wordScore * 0.7 + orderScore * 0.3) * 100)
}

function getWordFeedback() {
  const spokenWords = normalize(transcript.value).split(' ')
  const targetWords = normalize(props.exercise.sentence).split(' ')
  const result = []

  for (const word of targetWords) {
    const found = spokenWords.includes(word)
    result.push({ word, correct: found })
  }
  return result
}

function startListening() {
  if (!recognition || isListening.value) return
  transcript.value = ''
  score.value = 0
  isListening.value = true
  recognition.start()
}

function stopListening() {
  if (recognition && isListening.value) {
    recognition.stop()
  }
}

function submitAnswer() {
  attempts.value++
  answered.value = true
  feedback.value = getWordFeedback()
  emit('answer', score.value >= 70)
}

function tryAgain() {
  answered.value = false
  transcript.value = ''
  score.value = 0
  feedback.value = []
}

function speakModel(rate = 1) {
  if (!('speechSynthesis' in window)) return
  const utterance = new SpeechSynthesisUtterance(props.exercise.sentence)
  utterance.lang = 'en-US'
  utterance.rate = rate
  const voices = speechSynthesis.getVoices()
  const voice = voices.find(v => v.lang.startsWith('en-US')) || voices.find(v => v.lang.startsWith('en'))
  if (voice) utterance.voice = voice
  speechSynthesis.cancel()
  speechSynthesis.speak(utterance)
}

const scoreColor = computed(() => {
  if (score.value >= 80) return 'text-emerald-400'
  if (score.value >= 50) return 'text-amber-400'
  return 'text-red-400'
})

const scoreLabel = computed(() => {
  if (score.value >= 90) return 'Excellent!'
  if (score.value >= 80) return 'Great job!'
  if (score.value >= 60) return 'Good, keep practicing!'
  if (score.value >= 40) return 'Getting there...'
  return 'Try again!'
})

const canRetry = computed(() => answered.value && score.value < 80 && attempts.value < maxAttempts)
</script>

<template>
  <div>
    <div class="mb-2 text-xs font-bold text-dark-400 uppercase tracking-wide">Speak &amp; Pronounce</div>

    <h2 v-if="exercise.question" class="text-lg font-bold mb-4 leading-relaxed">{{ exercise.question }}</h2>

    <!-- Target sentence card -->
    <div class="card mb-4 border-purple-500/20">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-purple-400 uppercase tracking-wide">Say this:</span>
        <div class="flex gap-2">
          <button @click="speakModel(1)" class="text-xs bg-dark-700 text-dark-300 px-2 py-1 rounded-lg active:scale-95 transition-transform">
            Listen
          </button>
          <button @click="speakModel(0.6)" class="text-xs bg-dark-700 text-dark-300 px-2 py-1 rounded-lg active:scale-95 transition-transform">
            Slow
          </button>
        </div>
      </div>
      <p class="text-xl font-semibold leading-relaxed">{{ exercise.sentence }}</p>
      <p v-if="exercise.phonetic" class="text-sm text-dark-400 mt-1">{{ exercise.phonetic }}</p>
    </div>

    <!-- Pronunciation tips -->
    <button
      v-if="exercise.tips && !showModel"
      @click="showModel = true"
      class="text-sm text-primary-400 mb-4 block"
    >
      Show pronunciation tips
    </button>
    <div v-if="showModel && exercise.tips" class="card mb-4 border-primary-500/20 text-sm text-dark-300">
      <p>{{ exercise.tips }}</p>
    </div>

    <!-- Not supported fallback -->
    <div v-if="!isSupported" class="card border-amber-500/20 mb-4">
      <p class="text-sm text-amber-400 mb-2">Speech recognition is not available in this browser.</p>
      <p class="text-sm text-dark-400">Try using Chrome or Safari on iOS. In the meantime, practice saying the sentence out loud and listen to the model pronunciation.</p>
      <button @click="emit('answer', true); emit('next')" class="btn-primary w-full mt-3 text-sm">
        I practiced - Continue
      </button>
    </div>

    <!-- Recording UI -->
    <template v-if="isSupported">
      <!-- Microphone button -->
      <div class="flex justify-center mb-6">
        <button
          @mousedown="startListening"
          @mouseup="stopListening"
          @touchstart.prevent="startListening"
          @touchend.prevent="stopListening"
          :disabled="answered"
          class="w-20 h-20 rounded-full flex items-center justify-center transition-all active:scale-90"
          :class="isListening
            ? 'bg-red-500 animate-pulse shadow-lg shadow-red-500/30'
            : answered ? 'bg-dark-700 opacity-50' : 'bg-primary-500 shadow-lg shadow-primary-500/30'"
        >
          <!-- Mic icon -->
          <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-14 0m7 7v4m-4 0h8m-4-12a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>

      <p v-if="!transcript && !isListening && !answered" class="text-sm text-dark-400 text-center mb-4">
        Hold the button and speak clearly
      </p>

      <p v-if="isListening" class="text-sm text-red-400 text-center mb-4 animate-pulse">
        Listening... speak now!
      </p>

      <!-- Transcript result -->
      <div v-if="transcript && !answered" class="mb-4">
        <div class="card border-dark-500">
          <div class="text-xs text-dark-400 mb-1">You said:</div>
          <p class="text-lg font-medium">{{ transcript }}</p>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-sm font-bold" :class="scoreColor">{{ score }}% match</span>
          </div>
        </div>
        <div class="flex gap-3 mt-3">
          <button @click="submitAnswer" class="btn-primary flex-1">Submit</button>
          <button @click="transcript = ''; score = 0" class="btn-secondary flex-1">Record Again</button>
        </div>
      </div>

      <!-- Feedback after submit -->
      <transition name="fade">
        <div v-if="answered" class="mb-6">
          <!-- Score display -->
          <div class="text-center mb-4">
            <div class="text-5xl font-extrabold mb-1" :class="scoreColor">{{ score }}%</div>
            <div class="text-sm font-medium" :class="scoreColor">{{ scoreLabel }}</div>
          </div>

          <!-- Word-by-word feedback -->
          <div class="card mb-4">
            <div class="text-xs text-dark-400 mb-2">Word-by-word:</div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="(item, i) in feedback"
                :key="i"
                class="px-2 py-1 rounded-lg text-sm font-medium"
                :class="item.correct
                  ? 'bg-emerald-500/15 text-emerald-400'
                  : 'bg-red-500/15 text-red-400 line-through'"
              >
                {{ item.word }}
              </span>
            </div>
          </div>

          <!-- What you said -->
          <div class="card mb-4 border-dark-600">
            <div class="text-xs text-dark-400 mb-1">You said:</div>
            <p class="text-sm">{{ transcript }}</p>
          </div>

          <!-- Explanation -->
          <div v-if="exercise.explanation" class="card mb-4 border-primary-500/20">
            <p class="text-sm text-dark-300">{{ exercise.explanation }}</p>
          </div>

          <!-- Actions -->
          <div class="space-y-3">
            <button v-if="canRetry" @click="tryAgain" class="btn-secondary w-full">
              Try Again ({{ maxAttempts - attempts }} left)
            </button>
            <button @click="emit('next')" class="btn-primary w-full">
              Continue
            </button>
          </div>
        </div>
      </transition>
    </template>
  </div>
</template>
