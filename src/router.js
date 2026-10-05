import { createRouter, createWebHashHistory } from 'vue-router'
import { isAndroid } from './platform/isAndroid.js'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('./pages/LoginPage.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/HomePage.vue')
  },
  {
    path: '/course/:courseId',
    name: 'Course',
    component: () => import('./pages/CoursePage.vue')
  },
  {
    path: '/module/:moduleId',
    name: 'Module',
    component: () => import('./pages/ModulePage.vue')
  },
  {
    path: '/lesson/:lessonId',
    name: 'Lesson',
    component: () => import('./pages/LessonPage.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./pages/ProfilePage.vue')
  }
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
