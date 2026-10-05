import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('isAndroid', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('is true when Capacitor.getPlatform() returns "android"', async () => {
    vi.doMock('@capacitor/core', () => ({
      Capacitor: { getPlatform: () => 'android' }
    }))
    const { isAndroid } = await import('./isAndroid.js')
    expect(isAndroid).toBe(true)
  })

  it('is false when Capacitor.getPlatform() returns "ios"', async () => {
    vi.doMock('@capacitor/core', () => ({
      Capacitor: { getPlatform: () => 'ios' }
    }))
    const { isAndroid } = await import('./isAndroid.js')
    expect(isAndroid).toBe(false)
  })

  it('is false when Capacitor.getPlatform() returns "web"', async () => {
    vi.doMock('@capacitor/core', () => ({
      Capacitor: { getPlatform: () => 'web' }
    }))
    const { isAndroid } = await import('./isAndroid.js')
    expect(isAndroid).toBe(false)
  })
})
