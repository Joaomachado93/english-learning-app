<script setup>
import { ref } from 'vue'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

const userInput = ref('')
const answered = ref(false)
const isCorrect = ref(false)
const showHint = ref(false)

function normalize(str) {
  return str.trim().toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[""]/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/[.,!?;:]+$/, '')
}

function checkAnswer() {
  if (!userInput.value.trim() || answered.value) return
  answered.value = true

  const userNorm = normalize(userInput.value)
  const acceptedAnswers = Array.isArray(props.exercise.answer)
    ? props.exercise.answer
    : [props.exercise.answer]

  isCorrect.value = acceptedAnswers.some(a => normalize(a) === userNorm)
  emit('answer', isCorrect.value)
}

function handleKeydown(e) {
  if (e.key === 'Enter') {
    if (answered.value) emit('next')
    else checkAnswer()
  }
}

const displayAnswer = Array.isArray(props.exercise.answer)
  ? props.exercise.answer[0]
  : props.exercise.answer

const fromLang = props.exercise.from || 'PT'
const toLang = props.exercise.to || 'EN'
</script>

<template>
  <div>
    <!-- Direction badge -->
    <div class="flex items-center gap-2 mb-3">
      <span class="text-xs font-bold px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
        {{ fromLang }} → {{ toLang }}
      </span>
      <span class="text-xs text-dark-400">Translate</span>
    </div>

    <!-- Source sentence -->
    <div class="card mb-6 border-blue-500/20">
      <p class="text-lg font-semibold leading-relaxed">{{ exercise.question }}</p>
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
        :placeholder="showHint ? exercise.hint : `Type the translation in ${toLang === 'EN' ? 'English' : 'Portuguese'}...`"
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
      Check Translation
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
            Correct: <strong class="text-emerald-400">{{ displayAnswer }}</strong>
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
