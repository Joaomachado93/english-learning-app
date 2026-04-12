<script setup>
import { ref } from 'vue'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

const selected = ref(null)
const answered = ref(false)
const isCorrect = ref(false)

function select(value) {
  if (answered.value) return
  selected.value = value
  answered.value = true
  isCorrect.value = value === props.exercise.correct
  emit('answer', isCorrect.value)
}

function btnClass(value) {
  if (!answered.value) return ''
  if (value === props.exercise.correct) return 'correct'
  if (value === selected.value && !isCorrect.value) return 'incorrect'
  return 'opacity-50'
}
</script>

<template>
  <div>
    <!-- Statement -->
    <div class="mb-2 text-xs font-bold text-dark-400 uppercase tracking-wide">Is this correct?</div>
    <div class="card mb-6 border-amber-500/20">
      <p class="text-lg font-semibold leading-relaxed">{{ exercise.statement }}</p>
    </div>

    <!-- True / False buttons -->
    <div class="grid grid-cols-2 gap-3 mb-6">
      <button
        @click="select(true)"
        class="option-btn text-center py-5"
        :class="btnClass(true)"
      >
        <div class="text-2xl mb-1">✓</div>
        <div class="font-bold">True</div>
      </button>
      <button
        @click="select(false)"
        class="option-btn text-center py-5"
        :class="btnClass(false)"
      >
        <div class="text-2xl mb-1">✗</div>
        <div class="font-bold">False</div>
      </button>
    </div>

    <!-- Feedback -->
    <transition name="fade">
      <div v-if="answered" class="mb-6">
        <div
          class="rounded-2xl p-4"
          :class="isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'"
        >
          <div class="font-bold mb-1" :class="isCorrect ? 'text-emerald-400' : 'text-red-400'">
            {{ isCorrect ? 'Correct!' : 'Incorrect' }}
          </div>
          <p class="text-sm text-dark-300">{{ exercise.explanation }}</p>
        </div>
      </div>
    </transition>

    <button v-if="answered" @click="emit('next')" class="btn-primary w-full">
      Continue
    </button>
  </div>
</template>
