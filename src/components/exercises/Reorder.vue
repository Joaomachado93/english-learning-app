<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['answer', 'next'])

const shuffledWords = ref([...props.exercise.words].sort(() => Math.random() - 0.5))
const selectedWords = ref([])
const answered = ref(false)
const isCorrect = ref(false)

const availableWords = computed(() =>
  shuffledWords.value.filter((_, i) => !selectedWords.value.includes(i))
)

function addWord(originalIndex) {
  if (answered.value) return
  selectedWords.value.push(originalIndex)
}

function removeWord(posIndex) {
  if (answered.value) return
  selectedWords.value.splice(posIndex, 1)
}

function checkAnswer() {
  answered.value = true
  const userSentence = selectedWords.value.map(i => shuffledWords.value[i]).join(' ')
  isCorrect.value = userSentence === props.exercise.correct
  emit('answer', isCorrect.value)
}

const currentSentence = computed(() =>
  selectedWords.value.map(i => shuffledWords.value[i]).join(' ')
)

const canCheck = computed(() => selectedWords.value.length === shuffledWords.value.length)
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-6 leading-relaxed">{{ exercise.question }}</h2>

    <!-- Answer area -->
    <div
      class="min-h-[60px] bg-dark-800 border-2 border-dark-600 rounded-2xl p-3 mb-4 flex flex-wrap gap-2"
      :class="{ 'border-primary-500/30': selectedWords.length > 0 }"
    >
      <button
        v-for="(originalIndex, posIndex) in selectedWords"
        :key="'s-' + posIndex"
        @click="removeWord(posIndex)"
        class="px-3 py-1.5 rounded-xl text-sm font-medium transition-all active:scale-95"
        :class="!answered ? 'bg-primary-500/20 text-primary-300 border border-primary-500/40' :
                isCorrect ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' :
                'bg-red-500/20 text-red-400 border border-red-500/40'"
      >
        {{ shuffledWords[originalIndex] }}
      </button>
      <span v-if="selectedWords.length === 0" class="text-dark-500 text-sm self-center">
        Tap words below to build the sentence
      </span>
    </div>

    <!-- Available words -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="(word, index) in shuffledWords"
        :key="'w-' + index"
        @click="addWord(index)"
        :disabled="selectedWords.includes(index) || answered"
        class="px-3 py-1.5 rounded-xl text-sm font-medium border transition-all active:scale-95"
        :class="selectedWords.includes(index)
          ? 'bg-dark-800/50 text-dark-600 border-dark-700/50'
          : 'bg-dark-700 text-dark-200 border-dark-600 hover:border-primary-500'"
      >
        {{ word }}
      </button>
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
              {{ isCorrect ? 'Correct!' : 'Not quite right' }}
            </span>
          </div>
          <p v-if="!isCorrect" class="text-sm text-dark-300 mb-1">
            Correct order: <strong class="text-emerald-400">{{ exercise.correct }}</strong>
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
