// Cross-platform speech recognition wrapper.
//   - On Android (Capacitor WebView): bridges to native via
//     @capacitor-community/speech-recognition (Web Speech API is unavailable
//     in WebView). Requests RECORD_AUDIO at first use.
//   - On iOS/web: uses the browser Web Speech API.
//
// The returned recognizer exposes a uniform interface so callers don't need
// platform branches: start({ onResult, onError, onEnd }), stop(), abort().
import { isAndroid } from '../platform/isAndroid.js'
// Static import. Capacitor's plugin proxy is created at module load time;
// dynamic `import()` from inside a Capacitor WebView has been observed to
// hang on some Android devices when the bundler-split chunk can't be
// fetched. Static import sidesteps that entirely — the plugin is always
// available without awaiting any chunk.
import { SpeechRecognition } from '@capacitor-community/speech-recognition'

export async function checkSpeechAvailable() {
  if (isAndroid) {
    try {
      const result = await SpeechRecognition.available()
      return result.available
    } catch {
      return false
    }
  }
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition)
}

export async function requestSpeechPermission() {
  if (!isAndroid) return true
  try {
    const current = await SpeechRecognition.checkPermissions()
    if (current.speechRecognition === 'granted') return true
    const status = await SpeechRecognition.requestPermissions()
    return status.speechRecognition === 'granted'
  } catch (err) {
    console.warn('[speech] requestPermission failed:', err?.message || err)
    return false
  }
}

export function createSpeechRecognizer({ lang = 'en-US', maxResults = 3 } = {}) {
  if (isAndroid) return createAndroidRecognizer({ lang, maxResults })
  return createWebRecognizer({ lang, maxResults })
}

function createWebRecognizer({ lang, maxResults }) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SR) return null

  const rec = new SR()
  rec.lang = lang
  rec.maxAlternatives = maxResults
  rec.interimResults = false
  rec.continuous = false

  let handlers = {}
  rec.onresult = (event) => {
    const alternatives = []
    for (let i = 0; i < event.results[0].length; i++) {
      alternatives.push(event.results[0][i].transcript)
    }
    handlers.onResult?.(alternatives)
  }
  rec.onerror = (event) => handlers.onError?.(event.error || 'unknown')
  rec.onend = () => handlers.onEnd?.()

  return {
    start: (h) => {
      handlers = h || {}
      try { rec.start() } catch { handlers.onError?.('start_failed') }
    },
    stop: () => { try { rec.stop() } catch { /* noop */ } },
    abort: () => { try { rec.abort() } catch { /* noop */ } }
  }
}

function createAndroidRecognizer({ lang, maxResults }) {
  let listening = false
  let currentHandlers = null
  let endedAlready = false

  function notifyEnd() {
    if (endedAlready) return
    endedAlready = true
    listening = false
    const h = currentHandlers
    currentHandlers = null
    h?.onEnd?.()
  }

  return {
    async start(handlers = {}) {
      currentHandlers = handlers
      endedAlready = false
      try {
        const status = await SpeechRecognition.requestPermissions()
        if (status.speechRecognition !== 'granted') {
          handlers.onError?.('not-allowed')
          notifyEnd()
          return
        }
        listening = true
        const result = await SpeechRecognition.start({
          language: lang,
          maxResults,
          popup: true,
          partialResults: false
        })
        const matches = result?.matches || []
        if (matches.length === 0) {
          handlers.onError?.('no-speech')
        } else {
          handlers.onResult?.(matches)
        }
        notifyEnd()
      } catch (err) {
        const msg = err?.message || err?.errorMessage || String(err)
        let normalized = 'unknown'
        if (/permission|denied/i.test(msg)) normalized = 'not-allowed'
        else if (/no.?match|no.?speech/i.test(msg)) normalized = 'no-speech'
        handlers.onError?.(normalized)
        notifyEnd()
      }
    },
    async stop() {
      try { await SpeechRecognition.stop() } catch { /* noop */ }
      notifyEnd()
    },
    async abort() {
      try { await SpeechRecognition.stop() } catch { /* noop */ }
      notifyEnd()
    }
  }
}
