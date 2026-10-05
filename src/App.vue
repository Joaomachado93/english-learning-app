<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { currentUser, isAuthReady, isGuest } from './firebase.js'
import { isAndroid } from './platform/isAndroid.js'
import BottomNav from './components/BottomNav.vue'

const route = useRoute()
const router = useRouter()
const direction = ref('slide-left')

const showNav = computed(() => route.name !== 'Lesson' && route.name !== 'Login')

// Redirect to login if not authenticated, unless the person chose to continue without an account
// (iOS/web only — Android has no login)
watch([isAuthReady, () => route.name, currentUser, isGuest], ([ready, name]) => {
  if (isAndroid) return
  if (ready && !currentUser.value && !isGuest.value && name !== 'Login') {
    router.push('/login')
  }
})

watch(() => route.path, (to, from) => {
  const toDepth = to.split('/').length
  const fromDepth = (from || '').split('/').length
  direction.value = toDepth >= fromDepth ? 'slide-left' : 'slide-right'
})
</script>

<template>
  <div class="min-h-screen bg-dark-900 text-white flex flex-col">
    <!-- Loading state -->
    <div v-if="!isAuthReady" class="flex-1 flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center text-3xl mx-auto mb-3 animate-pulse">En</div>
        <p class="text-dark-400 text-sm">Loading...</p>
      </div>
    </div>

    <!-- App content -->
    <template v-else>
      <div class="flex-1" :class="{ 'pb-20': showNav }">
        <router-view v-slot="{ Component }">
          <transition :name="direction" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <BottomNav v-if="showNav" />
    </template>
  </div>
</template>
