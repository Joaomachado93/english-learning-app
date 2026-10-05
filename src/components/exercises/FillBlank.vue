<script setup>
import { ref, computed } from 'vue'
import { sameAnswer, splitBlankAnswers } from '../../utils/answers.js'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

const BLANK = '___'

// The sentence cut at every blank: "___ they playing? No, they ___." -> ['', ' they playing? No, they ', '.']
const segments = computed(() => props.exercise.question.split(BLANK))

// One expected answer per blank. An answer such as "Are, aren't" fills two blanks;
// anything that doesn't line up with the number of blanks is a single answer.
const expected = computed(() => splitBlankAnswers(props.exercise.answer, segments.value.length - 1))
const isMulti = computed(() => expected.value.length > 1)

// Text shown around the blanks. With a single answer only the first blank is an
// input and any other "___" in the sentence stays as written.
const displayParts = computed(() =>
  isMulti.value ? segments.value : [segments.value[0], segments.value.slice(1).join(BLANK)]
)

const inputs = ref(expected.value.map(() => ''))
const inputEls = ref([])
const answered = ref(false)
const isCorrect = ref(false)
const showHint = ref(false)

const canCheck = computed(() => inputs.value.every(value => value.trim()))

function isBlankCorrect(index) {
  return sameAnswer(inputs.value[index], expected.value[index])
}

function checkAnswer() {
  if (!canCheck.value || answered.value) return
  answered.value = true
  isCorrect.value = expected.value.every((_, index) => isBlankCorrect(index))
  emit('answer', isCorrect.value)
}

function handleKeydown(e, index) {
  if (e.key !== 'Enter') return
  if (answered.value) {
    emit('next')
  } else if (canCheck.value) {
    checkAnswer()
  } else {
    // Jump to the next blank that is still empty
    const next = inputs.value.findIndex((value, i) => i !== index && !value.trim())
    inputEls.value[next]?.focus()
  }
}

function blankText(index) {
  if (!answered.value) return inputs.value[index] || '...'
  return isBlankCorrect(index) ? inputs.value[index] : expected.value[index]
}

function blankClass(index) {
  if (!answered.value) return 'border-primary-400 text-primary-300'
  return isBlankCorrect(index) ? 'border-emerald-400 text-emerald-400' : 'border-red-400 text-red-400'
}

function placeholder(index) {
  if (isMulti.value) return `Blank ${index + 1}`
  return showHint.value ? props.exercise.hint : 'Type your answer...'
}
</script>

<template>
  <div>
    <!-- Question with blank(s) -->
    <div class="text-xl font-bold mb-6 leading-relaxed">
      <template v-for="(part, index) in displayParts" :key="index">
        <span>{{ part }}</span>
        <span
          v-if="index < displayParts.length - 1"
          class="inline-block min-w-[80px] border-b-2 mx-1 px-1 text-center"
          :class="blankClass(index)"
        >
          {{ blankText(index) }}
        </span>
      </template>
    </div>

    <!-- Input(s): one per blank -->
    <div class="mb-4 space-y-3">
      <input
        v-for="(_, index) in inputs"
        :key="index"
        :ref="el => { inputEls[index] = el }"
        v-model="inputs[index]"
        @keydown="handleKeydown($event, index)"
        :disabled="answered"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
        :placeholder="placeholder(index)"
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
      :disabled="!canCheck"
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
