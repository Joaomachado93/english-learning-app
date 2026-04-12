import { computed } from 'vue'
import { courses, getAllLessons } from '../data/courses.js'
import { useProgress } from './useProgress.js'

export function useDailyChallenge() {
  const { isLessonCompleted } = useProgress()

  // Deterministic pseudo-random based on date
  function seededRandom(seed) {
    let x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  const todaysSeed = computed(() => {
    const d = new Date()
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate()
  })

  const dailyLesson = computed(() => {
    const allLessons = getAllLessons()
    // Prefer lessons not yet completed
    const incomplete = allLessons.filter(l => !isLessonCompleted(l.id))
    const pool = incomplete.length > 0 ? incomplete : allLessons
    const index = Math.floor(seededRandom(todaysSeed.value) * pool.length)
    return pool[index]
  })

  const dailyWord = computed(() => {
    const words = [
      { word: 'Serendipity', phonetic: '/ˌser.ənˈdɪp.ə.ti/', definition: 'Finding something good by chance', example: 'It was pure serendipity that we met at that café.' },
      { word: 'Procrastinate', phonetic: '/prəˈkræs.tɪ.neɪt/', definition: 'To delay doing something', example: 'Stop procrastinating and start studying!' },
      { word: 'Resilience', phonetic: '/rɪˈzɪl.i.əns/', definition: 'Ability to recover from difficulties', example: 'Her resilience after the setback was admirable.' },
      { word: 'Eloquent', phonetic: '/ˈel.ə.kwənt/', definition: 'Fluent and persuasive in speech', example: 'She gave an eloquent speech at the conference.' },
      { word: 'Ambiguous', phonetic: '/æmˈbɪɡ.ju.əs/', definition: 'Open to more than one interpretation', example: 'The instructions were ambiguous and confusing.' },
      { word: 'Genuine', phonetic: '/ˈdʒen.ju.ɪn/', definition: 'Truly what it is said to be; authentic', example: 'He seems like a very genuine person.' },
      { word: 'Thorough', phonetic: '/ˈθʌr.ə/', definition: 'Complete with attention to detail', example: 'She did a thorough review of the document.' },
      { word: 'Subtle', phonetic: '/ˈsʌt.əl/', definition: 'So delicate as to be difficult to notice', example: 'There was a subtle difference between the two colours.' },
      { word: 'Acknowledge', phonetic: '/əkˈnɒl.ɪdʒ/', definition: 'Accept or recognize as true', example: 'He acknowledged his mistake and apologized.' },
      { word: 'Overwhelming', phonetic: '/ˌəʊ.vəˈwel.mɪŋ/', definition: 'Very great in amount; overpowering', example: 'The support from the community was overwhelming.' },
      { word: 'Inevitable', phonetic: '/ɪnˈev.ɪ.tə.bəl/', definition: 'Certain to happen; unavoidable', example: 'Change is inevitable in any growing company.' },
      { word: 'Compromise', phonetic: '/ˈkɒm.prə.maɪz/', definition: 'An agreement where each side gives up something', example: 'They reached a compromise on the budget.' },
      { word: 'Leverage', phonetic: '/ˈlev.ər.ɪdʒ/', definition: 'Use something to maximum advantage', example: 'We can leverage our experience to win the contract.' },
      { word: 'Consistent', phonetic: '/kənˈsɪs.tənt/', definition: 'Acting the same way over time', example: 'Consistent practice is the key to improvement.' },
      { word: 'Empathy', phonetic: '/ˈem.pə.θi/', definition: 'The ability to understand others\' feelings', example: 'Good leaders show empathy towards their team.' },
      { word: 'Notorious', phonetic: '/nəʊˈtɔː.ri.əs/', definition: 'Famous for something bad', example: 'The restaurant is notorious for its slow service.' },
      { word: 'Feasible', phonetic: '/ˈfiː.zə.bəl/', definition: 'Possible and practical to do', example: 'Is this plan actually feasible within our budget?' },
      { word: 'Vague', phonetic: '/veɪɡ/', definition: 'Not clear or definite', example: 'His answer was very vague and didn\'t help at all.' },
      { word: 'Reluctant', phonetic: '/rɪˈlʌk.tənt/', definition: 'Unwilling and hesitant', example: 'She was reluctant to share her opinion.' },
      { word: 'Undermine', phonetic: '/ˌʌn.dəˈmaɪn/', definition: 'Gradually weaken or damage', example: 'Constant criticism can undermine someone\'s confidence.' },
      { word: 'Accountable', phonetic: '/əˈkaʊn.tə.bəl/', definition: 'Required to explain actions; responsible', example: 'Managers should be accountable for their team\'s performance.' },
      { word: 'Benchmark', phonetic: '/ˈbentʃ.mɑːrk/', definition: 'A standard to compare against', example: 'This score sets the benchmark for future applicants.' },
      { word: 'Concise', phonetic: '/kənˈsaɪs/', definition: 'Giving information clearly and briefly', example: 'Keep your emails concise and to the point.' },
      { word: 'Pragmatic', phonetic: '/præɡˈmæt.ɪk/', definition: 'Dealing with things in a practical way', example: 'We need a pragmatic approach to solve this problem.' },
      { word: 'Scrutinize', phonetic: '/ˈskruː.tɪ.naɪz/', definition: 'Examine carefully and thoroughly', example: 'The auditor will scrutinize every transaction.' },
      { word: 'Hindsight', phonetic: '/ˈhaɪnd.saɪt/', definition: 'Understanding after something has happened', example: 'In hindsight, I should have accepted that offer.' },
      { word: 'Nuance', phonetic: '/ˈnjuː.ɑːns/', definition: 'A subtle difference in meaning', example: 'There\'s a nuance between "house" and "home" in English.' },
      { word: 'Paradigm', phonetic: '/ˈpær.ə.daɪm/', definition: 'A typical pattern or model', example: 'Remote work represents a paradigm shift in business.' },
      { word: 'Diligent', phonetic: '/ˈdɪl.ɪ.dʒənt/', definition: 'Careful and persistent in work', example: 'She is a diligent student who never misses a deadline.' },
      { word: 'Mitigate', phonetic: '/ˈmɪt.ɪ.ɡeɪt/', definition: 'Make less severe or serious', example: 'We need to mitigate the risks before launching.' }
    ]

    const index = Math.floor(seededRandom(todaysSeed.value + 0.5) * words.length)
    return words[index]
  })

  return { dailyLesson, dailyWord }
}
