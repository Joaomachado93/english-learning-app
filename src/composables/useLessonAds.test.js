import { describe, it, expect, vi, beforeEach } from 'vitest'

const COUNTER_KEY = 'ads_lesson_count'

describe('useLessonAds', () => {
  let showInterstitial
  let millisSinceAppStart

  beforeEach(() => {
    localStorage.clear()
    showInterstitial = vi.fn()
    millisSinceAppStart = vi.fn(() => 120_000) // 2 minutes default

    vi.resetModules()
    vi.doMock('../ads/adManager.js', () => ({
      useAds: () => ({
        showInterstitial,
        millisSinceAppStart
      })
    }))
  })

  it('does not show on the first lesson completion', async () => {
    const { useLessonAds } = await import('./useLessonAds.js')
    const { recordLessonComplete } = useLessonAds()
    await recordLessonComplete()
    expect(showInterstitial).not.toHaveBeenCalled()
    expect(localStorage.getItem(COUNTER_KEY)).toBe('1')
  })

  it('shows on the third lesson completion', async () => {
    const { useLessonAds } = await import('./useLessonAds.js')
    const { recordLessonComplete } = useLessonAds()
    await recordLessonComplete()
    await recordLessonComplete()
    await recordLessonComplete()
    expect(showInterstitial).toHaveBeenCalledTimes(1)
  })

  it('shows again on the sixth and ninth lesson completions', async () => {
    const { useLessonAds } = await import('./useLessonAds.js')
    const { recordLessonComplete } = useLessonAds()
    for (let i = 0; i < 9; i++) await recordLessonComplete()
    expect(showInterstitial).toHaveBeenCalledTimes(3)
  })

  it('skips show when less than 60s since app start', async () => {
    millisSinceAppStart.mockReturnValue(30_000) // 30s
    const { useLessonAds } = await import('./useLessonAds.js')
    const { recordLessonComplete } = useLessonAds()
    await recordLessonComplete()
    await recordLessonComplete()
    await recordLessonComplete()
    expect(showInterstitial).not.toHaveBeenCalled()
  })

  it('persists counter across uses', async () => {
    localStorage.setItem(COUNTER_KEY, '2')
    const { useLessonAds } = await import('./useLessonAds.js')
    const { recordLessonComplete } = useLessonAds()
    await recordLessonComplete()
    expect(showInterstitial).toHaveBeenCalledTimes(1)
    expect(localStorage.getItem(COUNTER_KEY)).toBe('3')
  })
})
