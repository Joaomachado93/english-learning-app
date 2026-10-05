import test from 'node:test'
import assert from 'node:assert/strict'
import { dayKey, isStreakAlive, latestDay } from '../src/utils/streak.js'

const noon = new Date(2026, 9, 5, 12, 0, 0) // Mon 5 Oct 2026, local time

test('dayKey returns calendar days around a date', () => {
  assert.equal(dayKey(0, noon), 'Mon Oct 05 2026')
  assert.equal(dayKey(-1, noon), 'Sun Oct 04 2026')
  assert.equal(dayKey(1, noon), 'Tue Oct 06 2026')
  // month boundary
  assert.equal(dayKey(-1, new Date(2026, 9, 1, 0, 30)), 'Wed Sep 30 2026')
})

test('dayKey steps one calendar day across a daylight-saving change', () => {
  // Clocks go back on 25 Oct 2026 in Portugal: that day lasts 25 hours.
  const justAfterMidnight = new Date(2026, 9, 26, 0, 30)
  assert.equal(dayKey(-1, justAfterMidnight), 'Sun Oct 25 2026')
  assert.equal(dayKey(-2, justAfterMidnight), 'Sat Oct 24 2026')
})

test('a streak is alive today and yesterday, and over after a missed day', () => {
  assert.ok(isStreakAlive('Mon Oct 05 2026', noon))
  assert.ok(isStreakAlive('Sun Oct 04 2026', noon))
  assert.ok(!isStreakAlive('Sat Oct 03 2026', noon))
  assert.ok(!isStreakAlive(null, noon))
  assert.ok(!isStreakAlive('', noon))
})

test('latestDay keeps the most recent practice day', () => {
  assert.equal(latestDay('Mon Oct 05 2026', 'Sat Oct 03 2026'), 'Mon Oct 05 2026')
  assert.equal(latestDay('Sat Oct 03 2026', 'Mon Oct 05 2026'), 'Mon Oct 05 2026')
  assert.equal(latestDay(null, 'Mon Oct 05 2026'), 'Mon Oct 05 2026')
  assert.equal(latestDay('Mon Oct 05 2026', null), 'Mon Oct 05 2026')
  assert.equal(latestDay('Mon Oct 05 2026', ''), 'Mon Oct 05 2026')
  assert.equal(latestDay(null, null), null)
})
