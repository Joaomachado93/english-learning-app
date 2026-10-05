# Android Target with Local-Only Storage and AdMob Monetization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Capacitor Android target to `english-learning-app` that runs without Firebase / login, stores everything in the device's `localStorage`, and monetizes with AdMob (banner + interstitial + app open).

**Architecture:** Same Vue 3 bundle as iOS/web. A single `isAndroid` helper gates three behaviors at runtime: Firebase init is skipped, the `/login` route redirects to `/`, and AdMob initializes. All lesson logic, exercises, and course data stay untouched.

**Tech Stack:** Vue 3 + Vite + Tailwind, Capacitor 8, `@capacitor-community/admob`, Vitest for unit tests on pure-logic helpers, Gradle for Android build.

**Spec:** `docs/superpowers/specs/2026-05-22-android-target-monetization-design.md`

---

## File Map

### New files
- `src/platform/isAndroid.js` — `Capacitor.getPlatform() === 'android'` constant
- `src/ads/adManager.js` — wrapper around `@capacitor-community/admob`, exposes `useAds()`
- `src/composables/useLessonAds.js` — interstitial frequency-cap (every 3rd lesson)
- `src/platform/isAndroid.test.js` — unit test for the helper
- `src/composables/useLessonAds.test.js` — unit tests for the counter
- `vitest.config.js` — minimal Vitest config

### Modified files
- `src/firebase.js` — gate `initializeApp` and the auth-state chain behind `!isAndroid`; immediately mark `isAuthReady = true` on Android so `App.vue` doesn't hang on the loading screen
- `src/router.js` — `beforeEach` guard: redirect `/login` → `/` when `isAndroid`
- `src/App.vue` — neuter the auth-redirect watcher on Android; register Capacitor App lifecycle listener for App Open ad
- `src/main.js` — call `useAds().init()` at boot (no-op outside Android)
- `src/pages/LessonPage.vue` — call `useLessonAds().recordLessonComplete()` on "Concluir"
- `src/pages/HomePage.vue`, `src/pages/CoursePage.vue`, `src/pages/ModulePage.vue` — show banner on mount, hide on unmount
- `package.json` — add deps: `@capacitor/android`, `@capacitor/app`, `@capacitor-community/admob`; devDep: `vitest`, `jsdom`
- `capacitor.config.json` — add `plugins.AdMob` section with initial settings

### Generated files (committed)
- `android/` — full native Android project from `npx cap add android`
- `android/app/src/main/AndroidManifest.xml` — gets AdMob `APPLICATION_ID` meta-data appended

### Not committed
- `android/local.properties` — already in default `.gitignore`
- `android/app/google-services.json` — n/a, no Firebase on Android
- `*.jks` keystore — kept outside repo

---

## Task 1 — Install dependencies and set up Vitest

**Files:**
- Modify: `package.json`
- Create: `vitest.config.js`

- [ ] **Step 1: Install runtime deps**

```bash
cd ~/Desktop/english-learning-app
npm install @capacitor/android @capacitor/app @capacitor-community/admob
```

Expected: 3 packages added under `dependencies` in `package.json`. The Capacitor CLI may print a notice about upgrading to v8 to match `@capacitor/core`; ignore for now unless `cap add android` fails later.

- [ ] **Step 2: Install dev deps**

```bash
npm install -D vitest@^1 jsdom
```

Expected: both added under `devDependencies`. Vitest is pinned to v1 because newer majors require Vite 5+, and this project uses Vite 4. (Verified against `package.json` — `vite: ^4.5.0`.)

- [ ] **Step 3: Add test scripts to `package.json`**

Open `package.json`. Replace the `"scripts"` block with:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

- [ ] **Step 4: Create `vitest.config.js`**

```js
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.js']
  }
})
```

- [ ] **Step 5: Sanity-run Vitest with zero tests**

```bash
npm test
```

Expected: exit 0 with "No test files found, exiting with code 0" (or similar) — confirms Vitest is installed correctly.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json vitest.config.js
git commit -m "chore: add Capacitor Android, AdMob plugin, and Vitest"
```

---

## Task 2 — Create the `isAndroid` platform helper (TDD)

**Files:**
- Create: `src/platform/isAndroid.js`
- Test: `src/platform/isAndroid.test.js`

- [ ] **Step 1: Write the failing test**

Create `src/platform/isAndroid.test.js`:

```js
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
```

- [ ] **Step 2: Verify the test fails**

```bash
npm test -- src/platform/isAndroid.test.js
```

Expected: FAIL with "Cannot find module './isAndroid.js'" or similar.

- [ ] **Step 3: Create the helper**

Create `src/platform/isAndroid.js`:

```js
import { Capacitor } from '@capacitor/core'

export const isAndroid = Capacitor.getPlatform() === 'android'
```

- [ ] **Step 4: Verify all 3 tests pass**

```bash
npm test -- src/platform/isAndroid.test.js
```

Expected: PASS, 3 tests.

- [ ] **Step 5: Commit**

```bash
git add src/platform/isAndroid.js src/platform/isAndroid.test.js
git commit -m "feat: add isAndroid platform helper with unit tests"
```

---

## Task 3 — Gate Firebase init on `!isAndroid`

**Files:**
- Modify: `src/firebase.js`

This is the most subtle change: on Android, Firebase must not initialize, but `App.vue` waits for `isAuthReady === true` before rendering content. So when `isAndroid`, we must set `isAuthReady.value = true` immediately and leave `currentUser.value` as `null`.

- [ ] **Step 1: Edit `src/firebase.js`**

Replace the top-of-file block (the imports through the `getRedirectResult(...)` chain) with this:

```js
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { ref, shallowRef } from 'vue'
import { isAndroid } from './platform/isAndroid.js'

const firebaseConfig = {
  apiKey: "AIzaSyCWmxykGWteQsaTumy7vtOowhT7RDH3G8k",
  authDomain: "english-practice-ca296.firebaseapp.com",
  projectId: "english-practice-ca296",
  storageBucket: "english-practice-ca296.firebasestorage.app",
  messagingSenderId: "137679463553",
  appId: "1:137679463553:web:fe1abad8a5f5169d1e9980",
  measurementId: "G-SNNMGQB9XX"
}

const currentUser = shallowRef(null)
const isAuthReady = ref(false)
const isLoading = ref(true)

let auth = null
let db = null
let googleProvider = null

if (!isAndroid) {
  const app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  setPersistence(auth, browserLocalPersistence)
  db = getFirestore(app)
  googleProvider = new GoogleAuthProvider()

  getRedirectResult(auth).catch(() => {}).finally(() => {
    onAuthStateChanged(auth, (user) => {
      currentUser.value = user
      isAuthReady.value = true
      isLoading.value = false
    })
  })
} else {
  // Android: no Firebase, no login. Mark auth as ready immediately so App.vue
  // exits the loading state and proceeds to HomePage.
  isAuthReady.value = true
  isLoading.value = false
}
```

Then update the four exported functions to early-return on Android:

```js
async function loginWithGoogle() {
  if (isAndroid) return null
  isLoading.value = true
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    if (
      error.code === 'auth/popup-blocked' ||
      error.code === 'auth/popup-closed-by-user' ||
      error.code === 'auth/cancelled-popup-request'
    ) {
      try {
        await signInWithRedirect(auth, googleProvider)
      } catch (redirectError) {
        console.error('Redirect error:', redirectError)
        isLoading.value = false
        throw redirectError
      }
    } else {
      console.error('Login error:', error)
      isLoading.value = false
      throw error
    }
  }
}

async function logout() {
  if (isAndroid) return
  await signOut(auth)
}

async function saveProgressToCloud(progressData) {
  if (isAndroid || !currentUser.value) return
  try {
    const userDoc = doc(db, 'users', currentUser.value.uid)
    await setDoc(userDoc, {
      email: currentUser.value.email,
      displayName: currentUser.value.displayName,
      photoURL: currentUser.value.photoURL,
      progress: progressData,
      lastUpdated: new Date().toISOString()
    }, { merge: true })
  } catch (err) {
    console.error('Cloud save error:', err)
  }
}

async function loadProgressFromCloud() {
  if (isAndroid || !currentUser.value) return null
  try {
    const userDoc = doc(db, 'users', currentUser.value.uid)
    const snapshot = await getDoc(userDoc)
    if (snapshot.exists()) {
      return snapshot.data().progress || null
    }
  } catch (err) {
    console.error('Cloud load error:', err)
  }
  return null
}
```

The `export { ... }` block at the bottom stays as-is.

- [ ] **Step 2: Run the web dev server to confirm iOS/web still work**

```bash
npm run dev
```

Open the printed URL. Expected: the loading spinner shows briefly, then either the login page (if not logged in) or HomePage (if cached session). No console errors about Firebase or `isAndroid`. Stop the dev server (`Ctrl+C`).

- [ ] **Step 3: Commit**

```bash
git add src/firebase.js
git commit -m "feat: skip Firebase init on Android, mark auth ready immediately"
```

---

## Task 4 — Add router guard to bypass `/login` on Android

**Files:**
- Modify: `src/router.js`

- [ ] **Step 1: Edit `src/router.js`**

Add the `isAndroid` import at the top, then add a `beforeEach` guard before `export default router`:

```js
import { createRouter, createWebHashHistory } from 'vue-router'
import { isAndroid } from './platform/isAndroid.js'

const routes = [
  // ... unchanged ...
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (isAndroid && to.name === 'Login') {
    return { name: 'Home' }
  }
})

export default router
```

- [ ] **Step 2: Confirm web still loads**

```bash
npm run dev
```

Visit the dev URL. Expected: same behavior as before — login on web is unchanged (because `isAndroid` is false on web). Stop the server.

- [ ] **Step 3: Commit**

```bash
git add src/router.js
git commit -m "feat: redirect /login to / on Android via router guard"
```

---

## Task 5 — Neuter the auth-redirect watcher in `App.vue`

**Files:**
- Modify: `src/App.vue`

The current watcher pushes to `/login` whenever `currentUser` is null. On Android `currentUser` is always null, so without this fix the watcher would fight the router guard from Task 4 and bounce the user around.

- [ ] **Step 1: Edit `src/App.vue` `<script setup>`**

Add the `isAndroid` import and guard the watcher body. Replace this block:

```js
// Redirect to login if not authenticated
watch([isAuthReady, () => route.name], ([ready, name]) => {
  if (ready && !currentUser.value && name !== 'Login') {
    router.push('/login')
  }
})
```

With:

```js
import { isAndroid } from './platform/isAndroid.js'

// Redirect to login if not authenticated (iOS/web only — Android has no login)
watch([isAuthReady, () => route.name], ([ready, name]) => {
  if (isAndroid) return
  if (ready && !currentUser.value && name !== 'Login') {
    router.push('/login')
  }
})
```

The `isAndroid` import goes at the top of `<script setup>` next to the other imports.

- [ ] **Step 2: Confirm web works**

```bash
npm run dev
```

Same flow as before. Stop the server.

- [ ] **Step 3: Commit**

```bash
git add src/App.vue
git commit -m "feat: skip login redirect in App.vue when running on Android"
```

---

## Task 6 — Create the AdMob manager wrapper

**Files:**
- Create: `src/ads/adManager.js`

This file is the only place that touches the `@capacitor-community/admob` API. Every public function is a no-op when `!isAndroid`, so callers don't need their own platform checks.

- [ ] **Step 1: Create `src/ads/adManager.js`**

```js
import { isAndroid } from '../platform/isAndroid.js'

// TODO(monetization): replace with real ad unit IDs from AdMob console.
// Current values are Google's official test IDs and will NOT earn revenue.
//
// Steps:
//   1. AdMob console -> Apps -> English Practice -> Ad units
//   2. Create three units: Banner, Interstitial, App Open
//   3. Paste their full IDs (ca-app-pub-XXX/XXX) below.
const AD_UNITS = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
  appOpen: 'ca-app-pub-3940256099942544/9257395921'
}

const APP_OPEN_COOLDOWN_MS = 30 * 1000
const APP_OPEN_EXPIRY_MS = 4 * 60 * 60 * 1000

let initialized = false
let bannerVisible = false
let appOpenLoadTime = 0
let lastAppOpenShown = 0
let appOpenAvailable = false
let appStartTime = 0

async function loadAppOpen() {
  if (!isAndroid) return
  try {
    const { AdMob } = await import('@capacitor-community/admob')
    await AdMob.loadAppOpen({ adId: AD_UNITS.appOpen })
    appOpenLoadTime = Date.now()
    appOpenAvailable = true
  } catch (err) {
    console.warn('[adManager] App Open load failed:', err?.message || err)
    appOpenAvailable = false
  }
}

async function init() {
  if (!isAndroid || initialized) return
  appStartTime = Date.now()
  const { AdMob } = await import('@capacitor-community/admob')
  await AdMob.initialize({
    testingDevices: [],
    initializeForTesting: false
  })
  initialized = true
  await loadAppOpen()
}

async function showBanner() {
  if (!isAndroid || bannerVisible) return
  try {
    const { AdMob, BannerAdPosition, BannerAdSize } = await import('@capacitor-community/admob')
    await AdMob.showBanner({
      adId: AD_UNITS.banner,
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0
    })
    bannerVisible = true
  } catch (err) {
    console.warn('[adManager] Banner show failed:', err?.message || err)
  }
}

async function hideBanner() {
  if (!isAndroid || !bannerVisible) return
  try {
    const { AdMob } = await import('@capacitor-community/admob')
    await AdMob.hideBanner()
    bannerVisible = false
  } catch (err) {
    console.warn('[adManager] Banner hide failed:', err?.message || err)
  }
}

async function showInterstitial() {
  if (!isAndroid) return
  try {
    const { AdMob } = await import('@capacitor-community/admob')
    await AdMob.prepareInterstitial({ adId: AD_UNITS.interstitial })
    await AdMob.showInterstitial()
  } catch (err) {
    console.warn('[adManager] Interstitial show failed:', err?.message || err)
  }
}

async function showAppOpenIfReady() {
  if (!isAndroid) return
  if (!appOpenAvailable) {
    await loadAppOpen()
    return
  }
  const now = Date.now()
  if (now - appOpenLoadTime > APP_OPEN_EXPIRY_MS) {
    appOpenAvailable = false
    await loadAppOpen()
    return
  }
  if (now - lastAppOpenShown < APP_OPEN_COOLDOWN_MS) return

  try {
    const { AdMob } = await import('@capacitor-community/admob')
    await AdMob.showAppOpen()
    lastAppOpenShown = Date.now()
    appOpenAvailable = false
    await loadAppOpen()
  } catch (err) {
    console.warn('[adManager] App Open show failed:', err?.message || err)
    appOpenAvailable = false
    await loadAppOpen()
  }
}

function millisSinceAppStart() {
  // On web/iOS, init() never runs so appStartTime stays 0 and this returns
  // Infinity — making the 60s "since app start" interstitial gate a no-op
  // outside Android. Intentional.
  return appStartTime ? Date.now() - appStartTime : Infinity
}

export function useAds() {
  return {
    init,
    showBanner,
    hideBanner,
    showInterstitial,
    showAppOpenIfReady,
    millisSinceAppStart
  }
}
```

- [ ] **Step 2: Wire `init()` into `src/main.js`**

Replace the entire contents of `src/main.js` with:

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useAds } from './ads/adManager.js'
import './style.css'

const app = createApp(App).use(router)

useAds().init().catch(err => console.error('[main] AdMob init failed:', err))

app.mount('#app')
```

- [ ] **Step 3: Confirm web still builds**

```bash
npm run build
```

Expected: build succeeds with no AdMob-related errors. The `await import()` inside the wrapper means the plugin is only fetched when called, but the static import in `main.js` will still resolve — that's fine because the package is installed.

- [ ] **Step 4: Commit**

```bash
git add src/ads/adManager.js src/main.js
git commit -m "feat: add AdMob wrapper with banner/interstitial/app-open and init in main.js"
```

---

## Task 7 — Frequency-cap composable for interstitial (TDD)

**Files:**
- Create: `src/composables/useLessonAds.js`
- Test: `src/composables/useLessonAds.test.js`

The interstitial must fire every 3rd lesson, skip the very first completion, and skip if less than 60s have passed since app start.

- [ ] **Step 1: Write the failing tests**

Create `src/composables/useLessonAds.test.js`:

```js
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
```

- [ ] **Step 2: Verify tests fail**

```bash
npm test -- src/composables/useLessonAds.test.js
```

Expected: FAIL with module not found.

- [ ] **Step 3: Create `src/composables/useLessonAds.js`**

```js
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
```

- [ ] **Step 4: Run tests**

```bash
npm test -- src/composables/useLessonAds.test.js
```

Expected: PASS, 5 tests.

- [ ] **Step 5: Commit**

```bash
git add src/composables/useLessonAds.js src/composables/useLessonAds.test.js
git commit -m "feat: add useLessonAds frequency-cap composable with unit tests"
```

---

## Task 8 — Wire interstitial into `LessonPage.vue`

**Files:**
- Modify: `src/pages/LessonPage.vue`

In the current `LessonPage.vue` the lesson-complete trigger is the `nextExercise()` function (around line 37–45). When the user is on the last exercise, the `else` branch sets `isFinished.value = true` and calls `completeLesson(...)`. The interstitial belongs immediately after that call.

- [ ] **Step 1: Add the import and composable destructure**

At the top of the `<script setup>`, add next to other composable imports:

```js
import { useLessonAds } from '../composables/useLessonAds.js'
```

In the setup body, near `const { completeLesson } = useProgress()`:

```js
const { recordLessonComplete } = useLessonAds()
```

- [ ] **Step 2: Wire the trigger inside `nextExercise()`**

Find `function nextExercise()`. Change it to `async function nextExercise()` and call `recordLessonComplete()` right after `completeLesson(...)`:

```js
async function nextExercise() {
  if (currentIndex.value < exercises.value.length - 1) {
    currentIndex.value++
  } else {
    // Lesson complete
    isFinished.value = true
    xpGained.value = completeLesson(lesson.value.id, score.value, exercises.value.length)
    await recordLessonComplete()
  }
}
```

`recordLessonComplete()` is safe to call unconditionally — the frequency cap is inside the composable. The user stays on the lesson summary screen while the interstitial loads; after dismiss they tap "back" / "next lesson" themselves.

- [ ] **Step 3: Verify any template handler that calls `nextExercise` works with the async signature**

Open `LessonPage.vue`'s `<template>` and confirm `nextExercise` is invoked via event handlers (`@click="nextExercise"` etc.) — those accept async functions natively, no change needed. If it's called from another JS function with `.then(...)` chaining or sync-dependent flow, adjust accordingly.

- [ ] **Step 4: Test on web that the call doesn't break anything**

```bash
npm run dev
```

Open the dev URL, log in (web only path), finish one lesson. Expected: no console errors, the lesson summary screen renders. `recordLessonComplete()` is a no-op on web (because `showInterstitial` no-ops outside Android). Stop the server.

- [ ] **Step 5: Commit**

```bash
git add src/pages/LessonPage.vue
git commit -m "feat: trigger interstitial frequency-cap on lesson completion"
```

---

## Task 9 — Banner on Home / Course / Module pages

**Files:**
- Modify: `src/pages/HomePage.vue`
- Modify: `src/pages/CoursePage.vue`
- Modify: `src/pages/ModulePage.vue`

Each of these three pages gets the same two-line addition. `LessonPage` and `ProfilePage` are intentionally left out per spec.

- [ ] **Step 1: Modify `HomePage.vue`**

In the `<script setup>`, add the imports and lifecycle hooks:

```js
import { onMounted, onUnmounted } from 'vue'
import { useAds } from '../ads/adManager.js'

const { showBanner, hideBanner } = useAds()
onMounted(() => { showBanner() })
onUnmounted(() => { hideBanner() })
```

If `onMounted` / `onUnmounted` are already imported from `vue`, just add them to the existing import line.

- [ ] **Step 2: Same change in `CoursePage.vue`**

Repeat Step 1 for `src/pages/CoursePage.vue`.

- [ ] **Step 3: Same change in `ModulePage.vue`**

Repeat Step 1 for `src/pages/ModulePage.vue`.

- [ ] **Step 4: Verify web still works**

```bash
npm run dev
```

Navigate to Home → Course → Module → Lesson → back. Expected: no console errors. The banner calls no-op on web. Stop the server.

- [ ] **Step 5: Commit**

```bash
git add src/pages/HomePage.vue src/pages/CoursePage.vue src/pages/ModulePage.vue
git commit -m "feat: show banner ad on Home/Course/Module pages (no-op outside Android)"
```

---

## Task 10 — App Open ad on foreground return

**Files:**
- Modify: `src/App.vue`

- [ ] **Step 1: Add the lifecycle listener to `App.vue` `<script setup>`**

Below the existing imports, add:

```js
import { onMounted, onUnmounted } from 'vue'
import { App as CapacitorApp } from '@capacitor/app'
import { useAds } from './ads/adManager.js'

const { showAppOpenIfReady } = useAds()
let appStateHandle = null
let isFirstActivation = true

onMounted(async () => {
  appStateHandle = await CapacitorApp.addListener('appStateChange', ({ isActive }) => {
    if (!isActive) return
    if (isFirstActivation) {
      // Cold start — skip per spec
      isFirstActivation = false
      return
    }
    showAppOpenIfReady()
  })
})

onUnmounted(() => {
  if (appStateHandle?.remove) appStateHandle.remove()
})
```

Merge the `onMounted` / `onUnmounted` imports with any existing `from 'vue'` import line.

- [ ] **Step 2: Verify web build**

```bash
npm run build
```

Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/App.vue
git commit -m "feat: trigger App Open ad on foreground return (skip cold start)"
```

---

## Task 11 — Add the Capacitor Android target

**Files:**
- Modify: `capacitor.config.json`
- Create: `android/` (entire tree, generated by Capacitor)

Capacitor 8 may complain that the CLI is 6.2.1. If `npx cap add android` errors out due to version mismatch, run `npm install -D @capacitor/cli@^8` first and retry.

- [ ] **Step 1: Add AdMob plugin config to `capacitor.config.json`**

Open `capacitor.config.json`. Inside the existing `"plugins"` object, **add a new sibling key** `"AdMob"` next to the existing `"SplashScreen"` and `"StatusBar"` entries. **Do not modify or remove** the `SplashScreen` or `StatusBar` blocks — they already contain real configuration values (background colors, status bar style, etc.). Only the new `AdMob` key is appended.

The block to add:

```json
"AdMob": {
  "appId": "ca-app-pub-3940256099942544~3347511713"
}
```

Final file should look like (skeleton, with `...` representing the existing untouched values):

```json
{
  "appId": "com.joao.englishpractice",
  "appName": "English Practice",
  "webDir": "dist",
  "server": { "iosScheme": "capacitor" },
  "plugins": {
    "SplashScreen": { /* ...keep existing values verbatim... */ },
    "StatusBar":    { /* ...keep existing values verbatim... */ },
    "AdMob": {
      "appId": "ca-app-pub-3940256099942544~3347511713"
    }
  }
}
```

The `appId` value is Google's test `APPLICATION_ID` (no real revenue, no ban risk).

- [ ] **Step 2: Build the web bundle**

```bash
npm run build
```

Expected: `dist/` is created. Required before `cap add` so it has something to copy.

- [ ] **Step 3: Add the Android target**

```bash
npx cap add android
```

Expected: `android/` directory is created. Output ends with "✔ add android in ..." or similar. If it fails on Capacitor version mismatch, run `npm install -D @capacitor/cli@^8` first, then retry.

- [ ] **Step 4: Sync the web bundle into the Android project**

```bash
npx cap sync android
```

Expected: copies `dist/` into `android/app/src/main/assets/public/` and updates plugin registry.

- [ ] **Step 5: Verify `AndroidManifest.xml`**

Open `android/app/src/main/AndroidManifest.xml`. Confirm:

- `<application android:allowBackup="true" ...>` — present
- Inside `<application>`, the AdMob plugin should have injected:
  ```xml
  <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID"
             android:value="ca-app-pub-3940256099942544~3347511713" />
  ```

If the meta-data is missing (some versions of the plugin don't inject), add it manually inside `<application>`.

- [ ] **Step 6: Commit**

```bash
git add capacitor.config.json android/
git commit -m "build: add Capacitor Android target with AdMob test APPLICATION_ID"
```

---

## Task 12 — Build a debug APK and verify on a real device

**Files:** No code changes; this is a manual verification gate.

Requires a JDK and the Android SDK. The user has both at:
- JDK: `/Users/joao/Android/jdk/zulu17.54.21-ca-jdk17.0.13-macosx_aarch64/zulu-17.jdk/Contents/Home`
- SDK: `/Users/joao/Android/sdk`

- [ ] **Step 1: Create `android/local.properties` if it doesn't exist**

```bash
echo "sdk.dir=/Users/joao/Android/sdk" > android/local.properties
```

(This file is in the default Capacitor `.gitignore`.)

- [ ] **Step 2: Build debug APK**

```bash
export JAVA_HOME="/Users/joao/Android/jdk/zulu17.54.21-ca-jdk17.0.13-macosx_aarch64/zulu-17.jdk/Contents/Home"
export PATH="$JAVA_HOME/bin:$PATH"
cd android && ./gradlew assembleDebug
```

Expected: `BUILD SUCCESSFUL`. APK at `android/app/build/outputs/apk/debug/app-debug.apk`.

- [ ] **Step 3: Install on phone (USB connected, debugging enabled)**

```bash
~/Android/sdk/platform-tools/adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

Expected: `Success`.

- [ ] **Step 4: Manual test plan from spec**

Open the app on the phone and verify, in order:

| Check | Expected |
|-------|----------|
| App opens directly on HomePage | No login screen visible |
| Course → Module → Lesson | Banner visible on Home/Course/Module, **not** on Lesson |
| Complete lesson #1 | No interstitial (first lesson skip) |
| Complete lesson #2 | No interstitial (not a multiple of 3) |
| Complete lesson #3 | Interstitial shows (after >60s since launch) |
| Background app, wait 35s, reopen | App Open ad shows |
| Background app, wait 5s, reopen | No App Open (cooldown 30s) |
| Force-close and reopen (cold start) | No App Open (cold start skip) |
| Progress persists across app close/open | Streak, XP, completed lessons retained |

If any check fails, capture logcat and fix in a follow-up commit before proceeding.

- [ ] **Step 5: Commit any fixes from the manual test pass**

If no fixes were needed, skip. Otherwise:

```bash
git add <fixed files>
git commit -m "fix: <what was wrong>"
```

---

## Task 13 — Release signing and final artifacts

**Files:**
- Create: `english-practice-release.jks` (outside repo — at `~/Desktop/english-practice-release.jks` or user's secure location)
- Modify: `android/app/build.gradle`
- Create: `android/keystore.properties` (gitignored)

- [ ] **Step 1: Generate a new keystore**

```bash
cd ~/Desktop
keytool -genkeypair -v \
  -keystore english-practice-release.jks \
  -alias english-practice \
  -keyalg RSA -keysize 2048 -validity 10000
```

It will prompt for keystore password, key password, and a distinguished name. **Use a unique password — not the one from FlowSpeed.** Record the password and alias in a password manager.

- [ ] **Step 2: Create `android/keystore.properties` (gitignored)**

```properties
storeFile=/Users/joao/Desktop/english-practice-release.jks
storePassword=<your-store-password>
keyAlias=english-practice
keyPassword=<your-key-password>
```

- [ ] **Step 3: Add `keystore.properties` to `.gitignore`**

Append to `android/.gitignore`:

```
keystore.properties
```

- [ ] **Step 4: Wire signing into `android/app/build.gradle`**

Open `android/app/build.gradle`. Above the `android { ... }` block, add:

```gradle
def keystorePropertiesFile = rootProject.file("../android/keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

Inside `android { ... }`, add:

```gradle
signingConfigs {
    release {
        if (keystorePropertiesFile.exists()) {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled false
        proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
    }
}
```

If a `buildTypes` block already exists, merge — don't duplicate.

- [ ] **Step 5: Build release APK and AAB**

```bash
cd android
./gradlew assembleRelease
./gradlew bundleRelease
```

Expected: both succeed. Outputs:
- APK: `android/app/build/outputs/apk/release/app-release.apk`
- AAB: `android/app/build/outputs/bundle/release/app-release.aab`

- [ ] **Step 6: Copy artifacts to `~/Desktop/` for easy handoff**

```bash
cp android/app/build/outputs/apk/release/app-release.apk ~/Desktop/english-practice-v1.0.0-release.apk
cp android/app/build/outputs/bundle/release/app-release.aab ~/Desktop/english-practice-v1.0.0-release.aab
```

- [ ] **Step 7: Commit the build config changes**

```bash
git add android/app/build.gradle android/.gitignore
git commit -m "build: wire release signing via gitignored keystore.properties"
```

---

## Task 14 — Final cleanup and handoff

- [ ] **Step 1: Run the full test suite**

```bash
npm test
```

Expected: PASS — 8 tests across `isAndroid` and `useLessonAds`.

- [ ] **Step 2: Confirm web build still works**

```bash
npm run build
```

Expected: build succeeds.

- [ ] **Step 3: Confirm Android debug build still works**

```bash
cd android && ./gradlew assembleDebug
```

Expected: BUILD SUCCESSFUL.

- [ ] **Step 4: Write a follow-up note for the user**

Hand off:
- Path to AAB: `~/Desktop/english-practice-v1.0.0-release.aab`
- Path to APK: `~/Desktop/english-practice-v1.0.0-release.apk`
- Reminder that `AD_UNITS` constants in `src/ads/adManager.js` and the `APPLICATION_ID` in `capacitor.config.json` + `AndroidManifest.xml` are still **test IDs**. Real-money revenue starts only after the user creates the three ad units in AdMob console, swaps the IDs, and the app is live in Play Store.
- Reminder to upload the AAB to a fresh app entry on Play Console (package `com.joao.englishpractice`), not the FlowSpeed entry.

No final commit on this task — it's just verification + handoff.

---

## Open Issues / Risks

- **Capacitor CLI version mismatch** — `package.json` has `@capacitor/cli@^6.2.1` while `@capacitor/core@^8.3.0`. If `npx cap add android` fails on this, Task 11 includes the fallback (`npm install -D @capacitor/cli@^8`). Document the resolved version in the commit message.
- **`@capacitor-community/admob` version drift** — the snippets in Task 6 use the API as of plugin v8 (`loadAppOpen` / `showAppOpen`, `BannerAdSize.BANNER`, `BannerAdPosition.BOTTOM_CENTER`). If `npm install` resolved to a different major and any of those don't exist, fix per the plugin's installed README before completing Task 6.
- **AdMob policy** — the user must NOT tap their own ads on the test or real APK. A single self-click on production IDs can result in a permanent AdMob ban. Use test ad units throughout development.
