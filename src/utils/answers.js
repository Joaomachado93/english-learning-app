// Shared answer-matching helpers for the exercise components.
// Kept free of Vue imports so they can be unit-tested with plain Node.

// Apostrophes and quotes that phone keyboards insert instead of the plain ones.
const APOSTROPHES = /[‘’‛ʼ`´]/g // ‘ ’ ‛ ʼ ` ´
const DOUBLE_QUOTES = /[“”„«»]/g // “ ” „ « »

function straightenQuotes(str) {
  return String(str ?? '')
    .normalize('NFC')
    .replace(APOSTROPHES, "'")
    .replace(DOUBLE_QUOTES, '"')
}

// Typed answers: ignores capitals, "smart" quotes, repeated spaces and trailing punctuation.
export function normalizeAnswer(str) {
  return straightenQuotes(str)
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:]+$/, '')
    .trim()
}

export function sameAnswer(given, expected) {
  return normalizeAnswer(given) === normalizeAnswer(expected)
}

// Word-order exercises: only the order of the words matters, so capitals and
// punctuation are ignored ("What are you doing ?" equals "What are you doing?").
export function normalizeWordOrder(str) {
  return straightenQuotes(str)
    .toLowerCase()
    .replace(/[.,!?;:"]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function sameWordOrder(given, expected) {
  return normalizeWordOrder(given) === normalizeWordOrder(expected)
}

// Spoken answers: like word order, but hyphens are dropped too ("well-known" is heard as "well known").
export function normalizeSpeech(str) {
  return straightenQuotes(str)
    .toLowerCase()
    .replace(/[.,!?;:\-"]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Expected answer for each blank of a fill-in-the-blank question.
// - "Are, aren't" for "___ they playing? No, they ___."  -> one part per blank
// - "turn down"   for "Please ___ it ___."               -> one word per blank
// Anything that doesn't line up with the number of blanks is one single answer.
export function splitBlankAnswers(answer, blankCount) {
  const text = String(answer ?? '').trim()
  if (blankCount <= 1) return [text]
  const parts = text.split(',').map(part => part.trim())
  if (parts.length === blankCount && parts.every(Boolean)) return parts
  const words = text.split(/\s+/)
  if (!text.includes(',') && words.length === blankCount && words.every(Boolean)) return words
  return [text]
}
