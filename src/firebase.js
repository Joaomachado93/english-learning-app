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

export {
  currentUser,
  isAuthReady,
  isLoading,
  loginWithGoogle,
  logout,
  saveProgressToCloud,
  loadProgressFromCloud
}
