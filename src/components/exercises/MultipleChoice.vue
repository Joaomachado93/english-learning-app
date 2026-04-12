<script setup>
import { ref } from 'vue'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

const selectedIndex = ref(null)
const answered = ref(false)
const isCorrect = ref(false)

function select(index) {
  if (answered.value) return
  selectedIndex.value = index
  answered.value = true
  isCorrect.value = index === props.exercise.correct
  emit('answer', isCorrect.value)
}

function optionClass(index) {
  if (!answered.value) {
    return selectedIndex.value === index ? 'selected' : ''
  }
  if (index === props.exercise.correct) return 'correct'
  if (index === selectedIndex.value && !isCorrect.value) return 'incorrect'
  return 'opacity-50'
}
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-6 leading-relaxed">{{ exercise.question }}</h2>

    <div class="space-y-3 mb-6">
      <button
        v-for="(option, index) in exercise.options"
        :key="index"
        @click="select(index)"
        class="option-btn"
        :class="optionClass(index)"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            :class="answered && index === exercise.correct ? 'bg-emerald-500/20 text-emerald-400' :
                     answered && index === selectedIndex && !isCorrect ? 'bg-red-500/20 text-red-400' :
                     'bg-dark-700 text-dark-300'"
          >
            {{ String.fromCharCode(65 + index) }}
          </div>
          <span class="text-sm">{{ option }}</span>
        </div>
      </button>
    </div>

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
