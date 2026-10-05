// Day helpers for the practice streak. Days are stored as Date#toDateString()
// values ("Mon Oct 05 2026"), which is what the app has always saved.

// The day `offset` days from now (0 = today, -1 = yesterday), in local time.
// Uses the calendar rather than 24-hour steps so daylight-saving changes don't skip a day.
export function dayKey(offset = 0, now = new Date()) {
  const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset)
  return day.toDateString()
}

// The streak is alive if the last practice was today or yesterday.
export function isStreakAlive(lastPracticeDate, now = new Date()) {
  if (!lastPracticeDate) return false
  return lastPracticeDate === dayKey(0, now) || lastPracticeDate === dayKey(-1, now)
}

// The more recent of two saved days; ignores empty or unreadable values.
export function latestDay(a, b) {
  const time = value => {
    const t = value ? new Date(value).getTime() : NaN
    return Number.isNaN(t) ? -Infinity : t
  }
  if (time(a) === -Infinity && time(b) === -Infinity) return a || b || null
  return time(b) > time(a) ? b : a
}
