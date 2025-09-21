<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
    <div class="w-full max-w-sm">
      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <div class="bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                <path d="M2 17L12 22L22 17"/>
                <path d="M2 12L12 17L22 12"/>
              </svg>
            </div>
            <span class="text-xl font-semibold text-gray-900">Ai-ify</span>
          </div>
        </div>
      </div>

      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Sign In</h1>
        <p class="text-gray-600 text-sm">Please fill in your details to get started.</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSignIn" class="space-y-4">
        <!-- Email Input -->
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3.5 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-0 focus:bg-white focus:shadow-md transition-all duration-200 text-gray-900 placeholder-gray-500"
            required
          />
        </div>

        <!-- Password Input -->
        <div class="relative">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••••••"
            class="w-full px-4 py-3.5 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-0 focus:bg-white focus:shadow-md transition-all duration-200 text-gray-900 placeholder-gray-400 pr-12"
            required
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7C7.523 19 3.732 16.057 2.458 12z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"/>
            </svg>
          </button>
        </div>

        <!-- Sign In Button -->
        <div class="pt-2">
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3.5 px-6 rounded-xl hover:from-pink-600 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-pink-200 transition-all duration-200 shadow-lg"
          >
            Sign in
          </button>
        </div>
      </form>

      <!-- Divider -->
      <div class="flex items-center my-6">
        <div class="flex-1 border-t border-gray-200"></div>
        <span class="px-4 text-sm text-gray-500">Or sign in with</span>
        <div class="flex-1 border-t border-gray-200"></div>
      </div>

      <!-- Google Sign In -->
      <button
        @click="handleGoogle"
        class="w-full bg-white border border-gray-200 text-gray-700 font-medium py-3.5 px-6 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all duration-200 flex items-center justify-center space-x-3"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span>Continue with Google</span>
      </button>

      <!-- Sign Up Link -->
      <p class="mt-6 text-center text-sm text-gray-600">
        Don't have an account?
        <router-link to="/signup" class="text-pink-500 hover:text-pink-600 font-medium ml-1">
          Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store'

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleSignIn = async () => {
  try {
    if (import.meta.env.VITE_DEMO_MODE === 'true') {
      await store.dispatch('ensureDemoUser')
      window.location.href = '/dashboard'
      return
    }
    await store.dispatch('auth/signIn', {
      email: email.value,
      password: password.value
    })
    window.location.href = '/dashboard'
  } catch (e) {
    alert(e.message || e)
  }
}

const handleGoogle = async () => {
  if (import.meta.env.VITE_DEMO_MODE === 'true') {
    await store.dispatch('ensureDemoUser')
    window.location.href = '/dashboard'
    return
  }
  await store.dispatch('auth/signInWithGoogle')
}
</script>