import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Onboarding from '../views/Onboarding.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '../store'

const routes = [
  { path: '/', redirect: '/signin' },
  { path: '/signin', component: SignIn, meta: { guest: true } },
  { path: '/signup', component: SignUp, meta: { guest: true } },
  { path: '/onboarding', component: Onboarding, meta: { requiresAuth: true } },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach(async (to, from, next)=>{
  const demo = import.meta.env.VITE_DEMO_MODE === 'true'
  if(demo){ await store.dispatch('ensureDemoUser'); return next() }
  await store.dispatch('auth/fetchUser')
  const isAuth = store.getters['auth/isAuthenticated']
  if(to.meta.requiresAuth && !isAuth) return next('/signin')
  if(to.meta.guest && isAuth) return next('/dashboard')
  next()
})

export default router
