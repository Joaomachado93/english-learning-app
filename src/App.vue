<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BottomNav from './components/BottomNav.vue'

const route = useRoute()
const router = useRouter()
const direction = ref('slide-left')

const showNav = computed(() => route.name !== 'Lesson')

watch(() => route.path, (to, from) => {
  const toDepth = to.split('/').length
  const fromDepth = (from || '').split('/').length
  direction.value = toDepth >= fromDepth ? 'slide-left' : 'slide-right'
})
</script>

<template>
  <div class="min-h-screen bg-dark-900 text-white flex flex-col">
    <div class="flex-1 pb-20" :class="{ 'pb-0': !showNav }">
      <router-view v-slot="{ Component }">
        <transition :name="direction" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <BottomNav v-if="showNav" />
  </div>
</template>
