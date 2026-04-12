import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { ref, shallowRef } from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyCWmxykGWteQsaTumy7vtOowhT7RDH3G8k",
  authDomain: "english-practice-ca296.firebaseapp.com",
  projectId: "english-practice-ca296",
  storageBucket: "english-practice-ca296.firebasestorage.app",
  messagingSenderId: "137679463553",
  appId: "1:137679463553:web:fe1abad8a5f5169d1e9980",
  measurementId: "G-SNNMGQB9XX"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

// Reactive user state
const currentUser = shallowRef(null)
const isAuthReady = ref(false)
const isLoading = ref(false)

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  currentUser.value = user
  isAuthReady.value = true
})

// Check for redirect result on page load
getRedirectResult(auth).then((result) => {
  if (result?.user) {
    isLoading.value = false
  }
}).catch(() => {
  isLoading.value = false
})

// Sign in with Google - try popup first, fallback to redirect (for iOS Safari)
async function loginWithGoogle() {
  isLoading.value = true
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    if (error.code === 'auth/popup-blocked' || error.code === 'auth/cancelled-popup-request') {
      // Fallback to redirect for mobile browsers
      await signInWithRedirect(auth, googleProvider)
    } else {
      console.error('Login error:', error)
      isLoading.value = false
      throw error
    }
  }
}

// Sign out
async function logout() {
  await signOut(auth)
}

// Save progress to Firestore
async function saveProgressToCloud(progressData) {
  if (!currentUser.value) return
  const userDoc = doc(db, 'users', currentUser.value.uid)
  await setDoc(userDoc, {
    email: currentUser.value.email,
    displayName: currentUser.value.displayName,
    photoURL: currentUser.value.photoURL,
    progress: progressData,
    lastUpdated: new Date().toISOString()
  }, { merge: true })
}

// Load progress from Firestore
async function loadProgressFromCloud() {
  if (!currentUser.value) return null
  const userDoc = doc(db, 'users', currentUser.value.uid)
  const snapshot = await getDoc(userDoc)
  if (snapshot.exists()) {
    return snapshot.data().progress || null
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
