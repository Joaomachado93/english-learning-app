import { useAds } from '../ads/adManager.js'

const COUNTER_KEY = 'ads_lesson_count'
const SHOW_EVERY_N = 3
const MIN_MS_SINCE_APP_START = 60 * 1000

function readCount() {
  return parseInt(localStorage.getItem(COUNTER_KEY) || '0', 10)
}

function writeCount(n) {
  localStorage.setItem(COUNTER_KEY, String(n))
}

export function useLessonAds() {
  const { showInterstitial, millisSinceAppStart } = useAds()

  async function recordLessonComplete() {
    const next = readCount() + 1
    writeCount(next)

    if (next === 1) return
    if (next % SHOW_EVERY_N !== 0) return
    if (millisSinceAppStart() < MIN_MS_SINCE_APP_START) return

    await showInterstitial()
  }

  return { recordLessonComplete }
}
