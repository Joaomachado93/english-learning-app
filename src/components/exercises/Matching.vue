<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

// Shuffle right side
const shuffledRight = ref(
  [...props.exercise.pairs.map(p => p.right)].sort(() => Math.random() - 0.5)
)

const selectedLeft = ref(null)
const selectedRight = ref(null)
const matches = ref({}) // leftIndex -> rightValue
const answered = ref(false)
const isCorrect = ref(false)

const matchedLeftIndices = computed(() => new Set(Object.keys(matches.value).map(Number)))
const matchedRightValues = computed(() => new Set(Object.values(matches.value)))

function selectLeft(index) {
  if (answered.value || matchedLeftIndices.value.has(index)) return
  selectedLeft.value = index
  tryMatch()
}

function selectRight(value) {
  if (answered.value || matchedRightValues.value.has(value)) return
  selectedRight.value = value
  tryMatch()
}

function tryMatch() {
  if (selectedLeft.value !== null && selectedRight.value !== null) {
    matches.value[selectedLeft.value] = selectedRight.value
    selectedLeft.value = null
    selectedRight.value = null

    // Check if all matched
    if (Object.keys(matches.value).length === props.exercise.pairs.length) {
      checkAnswer()
    }
  }
}

function checkAnswer() {
  answered.value = true
  let correct = true
  for (const [leftIdx, rightVal] of Object.entries(matches.value)) {
    if (props.exercise.pairs[leftIdx].right !== rightVal) {
      correct = false
      break
    }
  }
  isCorrect.value = correct
  emit('answer', isCorrect.value)
}

function isMatchCorrect(leftIdx) {
  if (!answered.value) return null
  return props.exercise.pairs[leftIdx].right === matches.value[leftIdx]
}

function removeMatch(leftIdx) {
  if (answered.value) return
  const rightVal = matches.value[leftIdx]
  delete matches.value[leftIdx]
}
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-6 leading-relaxed">{{ exercise.question }}</h2>

    <div class="grid grid-cols-2 gap-3 mb-6">
      <!-- Left column -->
      <div class="space-y-2">
        <button
          v-for="(pair, index) in exercise.pairs"
          :key="'l-' + index"
          @click="matchedLeftIndices.has(index) ? removeMatch(index) : selectLeft(index)"
          class="w-full text-left p-3 rounded-xl text-sm transition-all border-2"
          :class="[
            selectedLeft === index ? 'border-primary-500 bg-primary-500/10' :
            matchedLeftIndices.has(index) && answered && isMatchCorrect(index) ? 'border-emerald-500 bg-emerald-500/10' :
            matchedLeftIndices.has(index) && answered && !isMatchCorrect(index) ? 'border-red-500 bg-red-500/10' :
            matchedLeftIndices.has(index) ? 'border-primary-500/50 bg-primary-500/5' :
            'border-dark-600 bg-dark-800'
          ]"
        >
          {{ pair.left }}
        </button>
      </div>

      <!-- Right column -->
      <div class="space-y-2">
        <button
          v-for="(value, index) in shuffledRight"
          :key="'r-' + index"
          @click="selectRight(value)"
          class="w-full text-left p-3 rounded-xl text-sm transition-all border-2"
          :class="[
            selectedRight === value ? 'border-primary-500 bg-primary-500/10' :
            matchedRightValues.has(value) ? 'border-dark-600/50 bg-dark-800/50 opacity-50' :
            'border-dark-600 bg-dark-800'
          ]"
          :disabled="matchedRightValues.has(value)"
        >
          {{ value }}
        </button>
      </div>
    </div>

    <p v-if="!answered" class="text-sm text-dark-400 text-center mb-4">
      Tap one item from each column to match them
    </p>

    <!-- Feedback -->
    <transition name="fade">
      <div v-if="answered" class="mb-6">
        <div
          class="rounded-2xl p-4"
          :class="isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'"
        >
          <div class="font-bold mb-2" :class="isCorrect ? 'text-emerald-400' : 'text-red-400'">
            {{ isCorrect ? 'All correct!' : 'Some matches were wrong' }}
          </div>
          <div v-if="!isCorrect" class="space-y-1">
            <div v-for="(pair, index) in exercise.pairs" :key="index" class="text-sm text-dark-300">
              {{ pair.left }} → <strong class="text-emerald-400">{{ pair.right }}</strong>
            </div>
          </div>
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
