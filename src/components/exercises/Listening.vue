<script setup>
import { ref, onMounted } from 'vue'
import { sameAnswer } from '../../utils/answers.js'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

const userInput = ref('')
const answered = ref(false)
const isCorrect = ref(false)
const isPlaying = ref(false)
const playCount = ref(0)
const showHint = ref(false)
const speechSupported = ref(false)

onMounted(() => {
  speechSupported.value = 'speechSynthesis' in window
})

function speak(rate = 1) {
  if (!speechSupported.value || isPlaying.value) return
  isPlaying.value = true
  playCount.value++

  const utterance = new SpeechSynthesisUtterance(props.exercise.sentence)
  utterance.lang = 'en-US'
  utterance.rate = rate
  utterance.pitch = 1

  // Try to pick a good English voice
  const voices = speechSynthesis.getVoices()
  const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Samantha')) ||
    voices.find(v => v.lang.startsWith('en-US')) ||
    voices.find(v => v.lang.startsWith('en'))
  if (englishVoice) utterance.voice = englishVoice

  utterance.onend = () => { isPlaying.value = false }
  utterance.onerror = () => { isPlaying.value = false }

  speechSynthesis.cancel()
  speechSynthesis.speak(utterance)
}

function checkAnswer() {
  if (!userInput.value.trim() || answered.value) return
  answered.value = true

  const acceptedAnswers = Array.isArray(props.exercise.answer)
    ? props.exercise.answer
    : [props.exercise.answer || props.exercise.sentence]

  isCorrect.value = acceptedAnswers.some(a => sameAnswer(userInput.value, a))
  emit('answer', isCorrect.value)
}

function handleKeydown(e) {
  if (e.key === 'Enter') {
    if (answered.value) emit('next')
    else checkAnswer()
  }
}
</script>

<template>
  <div>
    <div class="mb-2 text-xs font-bold text-dark-400 uppercase tracking-wide">Listen &amp; Type</div>

    <h2 class="text-xl font-bold mb-6 leading-relaxed">{{ exercise.question || 'Listen and write what you hear' }}</h2>

    <!-- Play buttons -->
    <div class="flex gap-3 mb-6">
      <button
        @click="speak(1)"
        :disabled="isPlaying || !speechSupported"
        class="btn-primary flex-1 flex items-center justify-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
        <span>{{ isPlaying ? 'Playing...' : 'Play' }}</span>
      </button>
      <button
        @click="speak(0.6)"
        :disabled="isPlaying || !speechSupported"
        class="btn-secondary flex items-center justify-center gap-2 px-4"
        title="Play slowly"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
        Slow
      </button>
    </div>

    <div v-if="!speechSupported" class="text-sm text-amber-400 mb-4">
      Speech not available on this browser. The sentence is: "{{ exercise.sentence }}"
    </div>

    <!-- Input -->
    <div class="mb-4">
      <input
        v-model="userInput"
        @keydown="handleKeydown"
        :disabled="answered"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
        placeholder="Type what you hear..."
        class="w-full bg-dark-800 border-2 border-dark-600 rounded-2xl px-4 py-3 text-white
               focus:border-primary-500 focus:outline-none transition-colors
               disabled:opacity-60"
      />
    </div>

    <!-- Hint -->
    <button
      v-if="!answered && !showHint && exercise.hint"
      @click="showHint = true"
      class="text-sm text-primary-400 mb-4 block"
    >
      Need a hint?
    </button>
    <div v-if="showHint && !answered" class="text-sm text-dark-400 mb-4 italic">
      Hint: {{ exercise.hint }}
    </div>

    <!-- Check -->
    <button
      v-if="!answered"
      @click="checkAnswer"
      :disabled="!userInput.trim()"
      class="btn-primary w-full mb-4"
    >
      Check
    </button>

    <!-- Feedback -->
    <transition name="fade">
      <div v-if="answered" class="mb-6">
        <div
          class="rounded-2xl p-4"
          :class="isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'"
        >
          <div class="font-bold mb-1" :class="isCorrect ? 'text-emerald-400' : 'text-red-400'">
            {{ isCorrect ? 'Correct!' : 'Not quite right' }}
          </div>
          <p v-if="!isCorrect" class="text-sm text-dark-300 mb-1">
            Correct: <strong class="text-emerald-400">{{ exercise.sentence }}</strong>
          </p>
          <p v-if="exercise.explanation" class="text-sm text-dark-300">{{ exercise.explanation }}</p>
        </div>
      </div>
    </transition>

    <button v-if="answered" @click="emit('next')" class="btn-primary w-full">
      Continue
    </button>
  </div>
</template>
