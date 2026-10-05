# Android Target with Local-Only Storage and AdMob Monetization

**Date:** 2026-05-22
**Status:** Draft (awaiting user review)

## Background

`english-learning-app` is a Vue 3 + Vite + Tailwind app wrapped with Capacitor 8
(`@capacitor/core ^8.3.0`; CLI is currently `@capacitor/cli ^6.2.1` — npm will
resolve compatible versions when the Android target is added).
It currently ships as a web app and a Capacitor iOS app. The iOS app uses
Firebase for Google Sign-In and cloud sync of lesson progress. Lesson progress
is already mirrored to `localStorage` on every change (`src/composables/useProgress.js`).

The user wants to ship an Android version with three constraints:

1. No login screen — the user enters the app directly.
2. All values stored on the device — no cloud, no account.
3. Monetized via Google AdMob (banner + interstitial + app open), same pattern
   as the FlowSpeed app the user already ships.

The iOS and web versions must continue to function unchanged.

## Goals

- Add a Capacitor Android target that builds an installable APK/AAB.
- Use platform detection (`Capacitor.getPlatform() === 'android'`) to skip
  Firebase init, hide the login page, and skip cloud sync — Android-only.
- Wire Google AdMob via the `@capacitor-community/admob` plugin, with banner,
  interstitial, and app open formats.
- Build release artifacts signed with an Android-specific keystore (not reused
  from FlowSpeed) and ready for upload to Google Play Console as a new listing.

## Non-Goals

- Changing the iOS or web build in any way.
- Implementing data export/import or cross-device sync for the Android target.
- Adding new lesson content, exercise types, or courses.
- Configuring Android Auto Backup beyond the Capacitor default (`allowBackup="true"`).

## Architecture

The same Vue 3 bundle runs on iOS, web, and Android. Behavior diverges at
runtime via a single helper:

```js
// src/platform/isAndroid.js
import { Capacitor } from '@capacitor/core'
export const isAndroid = Capacitor.getPlatform() === 'android'
```

| Subsystem               | iOS / Web              | Android         |
|-------------------------|------------------------|-----------------|
| Firebase init           | Yes                    | Skipped         |
| Login page              | Visible                | Router redirect to `/` |
| Cloud sync (`saveToCloud`) | When logged in      | Never (no `currentUser`) |
| AdMob                   | None                   | Banner + Interstitial + App Open |
| Local storage           | Already used           | Already used    |

The Android divergence is gated by three `if (isAndroid)` checks (Firebase init,
router guard, AdMob init). The lesson/exercise code, course data, and progress
composable are untouched.

## Code Changes

### Files modified (Android-conditional)

1. **`src/main.js`** — call `useAds().init()` (no-op outside Android).
2. **`src/firebase.js`** — wrap `initializeApp` in `if (!isAndroid)` so the
   Firebase SDK never connects on Android.
3. **`src/router.js`** — add a navigation guard that redirects `/login` to `/`
   when `isAndroid`.
4. **`src/App.vue`** — two changes:
   1. The existing auth-redirect `watch([isAuthReady, route.name], ...)` that
      pushes the user to `/login` when there is no `currentUser` must be
      neutered on Android (early-return when `isAndroid`). Otherwise it
      ping-pongs with the new router guard described in change 3.
   2. Register a Capacitor App lifecycle listener
      (`App.addListener('appStateChange', ...)`) that calls
      `useAds().showAppOpenIfReady()` when the app comes back to the
      foreground. No-op on iOS/web because `useAds()` no-ops there.

### Files added

5. **`src/platform/isAndroid.js`** — single export, used everywhere.
6. **`src/ads/adManager.js`** — wrapper around `@capacitor-community/admob`
   exposing `useAds()` with: `init()`, `showBanner()`, `hideBanner()`,
   `showInterstitial()`, `showAppOpenIfReady()`. Every method is a no-op when
   not Android. The file lives under `src/ads/` (not `src/composables/ads/`)
   because it's a platform-bridge wrapper, not a Vue-specific composable.
7. **`src/composables/useLessonAds.js`** — frequency-cap helper that increments
   a counter in `localStorage` (`ads_lesson_count`) and calls
   `showInterstitial()` on every Nth lesson completion (default N = 3,
   skip first lesson, 60s cooldown after app start).

### Files untouched

- `src/composables/useProgress.js` — already writes to `localStorage`. The
  `saveToCloud()` call is gated by `if (currentUser.value)` and Android never
  has a user, so cloud sync becomes inert without code changes.
- `src/pages/*.vue` — `HomePage`, `CoursePage`, `ModulePage`, `LessonPage`,
  `ProfilePage` — business logic untouched. `HomePage`, `CoursePage`, and
  `ModulePage` gain an `onMounted(showBanner)` / `onUnmounted(hideBanner)`
  pair to display the banner (no-op outside Android).
- `src/components/exercises/*` — all eight exercise types stay as-is.
- `src/data/*` — A1, A2, B1, B2, C1, extras — unchanged.

### Dependencies

```
npm install @capacitor/android @capacitor/app @capacitor-community/admob
```

`@capacitor/app` is needed for the foreground/background lifecycle listener
that drives App Open ads.

## Ad Placement and Timing

### Banner (sticky bottom)

Visible on pages where the user is browsing, not actively practicing:

- `HomePage`
- `CoursePage` (list of modules in a level)
- `ModulePage` (list of lessons in a module)

**Not** on `LessonPage` — during an exercise the user needs focus, and an
on-screen banner near tap targets risks accidental clicks (an AdMob ban
trigger). Same rationale as removing banners from form/keyboard-heavy
screens in FlowSpeed.

### Interstitial (fullscreen)

- Trigger: user finishes a lesson and taps "Concluir" on `LessonPage`.
- Frequency cap: every 3rd lesson completion (counter persisted in
  `localStorage` under `ads_lesson_count`).
- Skip on the very first lesson the user completes (first impression).
- Skip if less than 60 seconds have elapsed since app start (avoids
  colliding with App Open).
- After dismiss, navigate back to `ModulePage`. Reload the next interstitial
  in the background.

### App Open (fullscreen on return to foreground)

- Trigger: Capacitor `App.addListener('appStateChange', {isActive})` fires
  with `isActive === true` and the app was previously backgrounded.
- Skip on cold start (first launch) — bad UX.
- 30s cooldown between App Open shows (avoids back-to-back with interstitial).
- 4-hour expiry on the cached ad (AdMob spec); if expired, discard and reload.

### Ad Unit IDs

During development, the `APPLICATION_ID` and the three ad units all use
Google's official test IDs. Test ads earn nothing but are safe from policy
violations.

| Slot                | Test ID                                          |
|---------------------|--------------------------------------------------|
| APPLICATION_ID      | `ca-app-pub-3940256099942544~3347511713`         |
| Banner              | `ca-app-pub-3940256099942544/6300978111`         |
| Interstitial        | `ca-app-pub-3940256099942544/1033173712`         |
| App Open            | `ca-app-pub-3940256099942544/9257395921`         |

For production, the user creates the AdMob app and three ad units, then
replaces the constants marked `TODO(monetization)` in `src/ads/adManager.js`
and `android/app/src/main/AndroidManifest.xml`.

## Local Storage

All persistence uses the existing `localStorage` setup. No new persistence
layer.

| Key                       | Purpose                                  |
|---------------------------|------------------------------------------|
| `english-app-progress`    | JSON map of lessonId → {bestScore, attempts, lastAttempt, ...} |
| `english-app-streak`      | Consecutive practice days (int)          |
| `english-app-last-date`   | ISO date of last practice                |
| `english-app-xp`          | Cumulative XP (int)                      |
| `ads_lesson_count` (new)  | Lesson completion counter for interstitial cap |

Capacitor WebView storage on Android lives under
`/data/data/com.joao.englishpractice/app_webview/Default/Local Storage/`,
sandboxed by the OS to this app. It survives version updates but is wiped
by "Clear data" and uninstall.

WebView `localStorage` quota on Android is ~10 MB. Realistic worst-case
usage for a heavy user is ~50 KB — comfortably below the limit.

### Android Auto Backup

Capacitor sets `android:allowBackup="true"` in the generated manifest by
default. This means the OS automatically backs up the app's data (including
WebView `localStorage`) to the user's Google Drive sandbox (25 MB per app)
every ~24 hours when on Wi-Fi and charging.

Consequence: a user who uninstalls and reinstalls on the same Google account
(same or different device) gets their progress back automatically, with no
login. This is exactly what the user asked for and requires no extra code.

The spec will verify the generated manifest after `cap add android` and keep
`allowBackup="true"`.

## Build and Release

### Local setup (one-time)

```
cd ~/Desktop/english-learning-app
npm install @capacitor/android @capacitor/app @capacitor-community/admob
npx cap add android
# implement code changes per "Code Changes" section
npm run build && npx cap sync android
```

### Build commands

| Command                                       | Output             | Use                |
|-----------------------------------------------|--------------------|--------------------|
| `cd android && ./gradlew assembleDebug`       | `app-debug.apk`    | Sideload, dev test |
| `cd android && ./gradlew assembleRelease`     | `app-release.apk`  | Sideload, signed   |
| `cd android && ./gradlew bundleRelease`       | `app-release.aab`  | Play Console upload |

Release builds are signed with a new keystore — **not** reused from FlowSpeed.
Keystore created with `keytool -genkeypair -v -keystore english-practice-release.jks -alias english-practice -keyalg RSA -keysize 2048 -validity 10000`.
Password and alias stored at a path the user controls; never committed.

### Test plan before delivery

1. Build debug → install on the user's phone → confirm the app opens on
   `HomePage` (no login screen).
2. Complete three lessons in a row → confirm XP/streak update and
   interstitial fires on the third completion.
3. Background the app for >30s → reopen → confirm App Open ad shows.
4. Verify banner visible on `HomePage`, `CoursePage`, `ModulePage`;
   verify banner NOT visible on `LessonPage`.
5. Build signed release AAB → final artifact.

### Manual user actions (outside this spec)

| Where           | Action                                                         |
|-----------------|----------------------------------------------------------------|
| AdMob console   | Create new app "English Practice", record `APPLICATION_ID`.    |
| AdMob console   | Create three ad units (banner, interstitial, app open). Record IDs. |
| AdMob console   | Once the app is live in Play Store, link it from "Edit app information" to flip status from "Requires review" to "Ready". |
| Play Console    | Create new app entry (package `com.joao.englishpractice`). New listing: title, icon, screenshots, description, privacy policy URL, data safety form, content rating. |
| Keystore        | Generate `english-practice-release.jks`. Store password and alias safely. |

These are outside the scope of code changes — they happen in browsers and
shell, not in the repo. The spec will hand back a checklist the user can
follow without further guidance.

## Versioning

- First Android release: versionName `1.0.0`, versionCode `1`.
- Subsequent releases bump versionCode by 1 per upload; versionName follows
  semver as the user sees fit.

## Out of Scope (Future Work)

The following are explicitly excluded from this spec but called out as
likely follow-ups so they don't get implemented prematurely:

- Export/import progress as JSON file.
- QR-code transfer between devices.
- Native rewarded ads (the user opted out of rewarded earlier).
- Removing Firebase from iOS or web.
- App Open ad on cold start (excluded for UX reasons).
- A paid "remove ads" tier.
