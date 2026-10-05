import { isAndroid } from '../platform/isAndroid.js'

// TODO(monetization): replace with real ad unit IDs from AdMob console.
// Current values are Google's official test IDs and will NOT earn revenue.
//
// Steps:
//   1. AdMob console -> Apps -> English Practice -> Ad units
//   2. Create two units: Banner, Interstitial
//   3. Paste their full IDs (ca-app-pub-XXX/XXX) below.
//
// App Open ads intentionally omitted — @capacitor-community/admob v8 does not
// support them. Revisit when (or if) the plugin adds support, or migrate to a
// custom native bridge.
const AD_UNITS = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712'
}

let initialized = false
let bannerVisible = false
let appStartTime = 0

async function init() {
  if (!isAndroid || initialized) return
  appStartTime = Date.now()
  const { AdMob } = await import('@capacitor-community/admob')
  await AdMob.initialize({
    testingDevices: [],
    initializeForTesting: false
  })
  initialized = true
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
    millisSinceAppStart
  }
}
