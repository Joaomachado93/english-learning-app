// Checks that every exercise in src/data can actually be answered in the app.
// Run with: npm run validate
//
// It uses the same matching helpers as the exercise components, so an exercise
// that passes here can be marked correct on screen.
import { courses } from '../src/data/courses.js'
import { normalizeWordOrder, splitBlankAnswers } from '../src/utils/answers.js'

const issues = []
const report = (where, message) => issues.push(`${where}: ${message}`)

const stats = { courses: courses.length, modules: 0, lessons: 0, exercises: 0, byType: {} }
const moduleIds = new Map()
const lessonIds = new Map()

const isText = value => typeof value === 'string' && value.trim() !== ''
const sortedWords = text => normalizeWordOrder(text).split(' ').filter(Boolean).sort().join(' ')

function checkExercise(where, ex) {
  switch (ex.type) {
    case 'multiple-choice': {
      if (!isText(ex.question)) report(where, 'missing question')
      if (!Array.isArray(ex.options) || ex.options.length < 2) {
        report(where, 'needs at least 2 options')
        break
      }
      if (!Number.isInteger(ex.correct) || ex.correct < 0 || ex.correct >= ex.options.length) {
        report(where, `"correct" (${ex.correct}) is not the position of an option`)
      }
      const unique = new Set(ex.options.map(option => String(option).trim().toLowerCase()))
      if (unique.size !== ex.options.length) report(where, 'the same option appears twice')
      break
    }
    case 'true-false': {
      if (!isText(ex.statement)) report(where, 'missing statement')
      if (typeof ex.correct !== 'boolean') report(where, '"correct" must be true or false')
      break
    }
    case 'fill-blank': {
      if (!isText(ex.question)) {
        report(where, 'missing question')
        break
      }
      if (typeof ex.answer !== 'string') {
        report(where, '"answer" must be text (several blanks: "first, second")')
        break
      }
      const blanks = ex.question.split('___').length - 1
      if (blanks === 0) report(where, 'the question has no ___ blank')
      const parts = splitBlankAnswers(ex.answer, blanks)
      if (parts.some(part => !isText(part))) report(where, 'empty answer: nothing can be typed to get it right')
      break
    }
    case 'matching': {
      if (!Array.isArray(ex.pairs) || ex.pairs.length < 2) {
        report(where, 'needs at least 2 pairs')
        break
      }
      if (ex.pairs.some(pair => !isText(pair.left) || !isText(pair.right))) report(where, 'a pair has an empty side')
      break
    }
    case 'reorder': {
      if (!Array.isArray(ex.words) || ex.words.length < 2) {
        report(where, 'needs at least 2 word tiles')
        break
      }
      if (!isText(ex.correct)) {
        report(where, 'missing "correct" sentence')
        break
      }
      if (sortedWords(ex.words.join(' ')) !== sortedWords(ex.correct)) {
        report(where, `the tiles [${ex.words.join(' | ')}] cannot build "${ex.correct}"`)
      }
      break
    }
    case 'translation': {
      if (!isText(ex.question)) report(where, 'missing sentence to translate')
      const answers = Array.isArray(ex.answer) ? ex.answer : [ex.answer]
      if (!answers.length || answers.some(answer => !isText(answer))) report(where, 'missing or empty answer')
      break
    }
    case 'listening':
    case 'pronunciation': {
      if (!isText(ex.sentence)) report(where, 'missing sentence')
      break
    }
    default:
      report(where, `unknown exercise type "${ex.type}" (nothing is shown and the lesson cannot continue)`)
  }
}

for (const course of courses) {
  for (const mod of course.modules) {
    stats.modules++
    if (moduleIds.has(mod.id)) report(mod.id, `module id used twice (also in course ${moduleIds.get(mod.id)})`)
    moduleIds.set(mod.id, course.id)
    if (!Array.isArray(mod.lessons) || mod.lessons.length === 0) report(mod.id, 'module has no lessons')

    for (const lesson of mod.lessons || []) {
      stats.lessons++
      // Progress is stored per lesson id, so a repeated id would share progress between two lessons.
      if (lessonIds.has(lesson.id)) report(lesson.id, `lesson id used twice (also in module ${lessonIds.get(lesson.id)})`)
      lessonIds.set(lesson.id, mod.id)
      if (!Array.isArray(lesson.exercises) || lesson.exercises.length === 0) report(lesson.id, 'lesson has no exercises')

      ;(lesson.exercises || []).forEach((ex, index) => {
        stats.exercises++
        stats.byType[ex.type] = (stats.byType[ex.type] || 0) + 1
        checkExercise(`${lesson.id} #${index + 1} (${ex.type})`, ex)
      })
    }
  }
}

console.log(`${stats.courses} courses, ${stats.modules} modules, ${stats.lessons} lessons, ${stats.exercises} exercises`)
console.log(Object.entries(stats.byType).map(([type, count]) => `${type}: ${count}`).join(', '))

if (issues.length) {
  console.error(`\n${issues.length} problem(s) found:`)
  for (const issue of issues) console.error(' - ' + issue)
  process.exit(1)
}
console.log('\nAll exercises can be answered.')
