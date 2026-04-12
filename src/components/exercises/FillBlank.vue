<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

const userInput = ref('')
const answered = ref(false)
const isCorrect = ref(false)
const showHint = ref(false)

function checkAnswer() {
  if (!userInput.value.trim() || answered.value) return
  answered.value = true
  isCorrect.value = userInput.value.trim().toLowerCase() === props.exercise.answer.toLowerCase()
  emit('answer', isCorrect.value)
}

function handleKeydown(e) {
  if (e.key === 'Enter') {
    if (answered.value) {
      emit('next')
    } else {
      checkAnswer()
    }
  }
}

// Build display sentence with blank
const parts = computed(() => {
  const q = props.exercise.question
  const idx = q.indexOf('___')
  if (idx === -1) return { before: q, after: '' }
  return { before: q.substring(0, idx), after: q.substring(idx + 3) }
})
</script>

<template>
  <div>
    <!-- Question with blank -->
    <div class="text-xl font-bold mb-6 leading-relaxed">
      <span>{{ parts.before }}</span>
      <span
        class="inline-block min-w-[80px] border-b-2 mx-1 px-1 text-center"
        :class="!answered ? 'border-primary-400 text-primary-300' :
                isCorrect ? 'border-emerald-400 text-emerald-400' : 'border-red-400 text-red-400'"
      >
        {{ answered ? (isCorrect ? userInput : exercise.answer) : userInput || '...' }}
      </span>
      <span>{{ parts.after }}</span>
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
        :placeholder="showHint ? exercise.hint : 'Type your answer...'"
        class="w-full bg-dark-800 border-2 border-dark-600 rounded-2xl px-4 py-3 text-white
               focus:border-primary-500 focus:outline-none transition-colors
               disabled:opacity-60"
      />
    </div>

    <!-- Hint button -->
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

    <!-- Check button -->
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
          <div class="flex items-center gap-2 mb-1">
            <span class="font-bold" :class="isCorrect ? 'text-emerald-400' : 'text-red-400'">
              {{ isCorrect ? 'Correct!' : 'Incorrect' }}
            </span>
          </div>
          <p v-if="!isCorrect" class="text-sm text-dark-300 mb-1">
            The answer is: <strong class="text-emerald-400">{{ exercise.answer }}</strong>
          </p>
          <p class="text-sm text-dark-300">{{ exercise.explanation }}</p>
        </div>
      </div>
    </transition>

    <button
      v-if="answered"
      @click="emit('next')"
      class="btn-primary w-full"
    >
      Continue
    </button>
  </div>
</template>
