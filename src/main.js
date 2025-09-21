// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { isSessionValid } from './lib/supabase'
import './index.css'

// Session guard
router.beforeEach(async (to, from, next) => {
  const valid = await isSessionValid()
  if (!valid && to.path !== '/signin' && to.path !== '/signup') {
    await store.dispatch('auth/signOut')
    return next('/signin')
  }
  return next()
})

// Fetch session before mounting the app
store.dispatch('auth/fetchUser').finally(() => {
  createApp(App).use(store).use(router).mount('#app')
})
