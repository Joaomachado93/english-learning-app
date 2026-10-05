import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useAds } from './ads/adManager.js'
import './style.css'

const app = createApp(App).use(router)

useAds().init().catch(err => console.error('[main] AdMob init failed:', err))

app.mount('#app')
