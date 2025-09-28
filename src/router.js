// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Onboarding from './views/Onboarding.vue'
import Dashboard from './views/Dashboard.vue'
import store from './store'

const routes = [
  { path: '/', redirect: '/signin' },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/onboarding', component: Onboarding, meta: { requiresAuth: true } },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const isAuthenticated = store.getters['auth/isAuthenticated']
  const hasOnboarded = store.getters['auth/hasOnboarded']

  if (requiresAuth && !isAuthenticated) {
    return next('/signin')
  }

  if ((to.path === '/signin' || to.path === '/signup') && isAuthenticated) {
    return hasOnboarded ? next('/dashboard') : next('/onboarding')
  }

  if (to.path === '/dashboard' && isAuthenticated && !hasOnboarded) {
    return next('/onboarding')
  }

  next()
})

export default router
