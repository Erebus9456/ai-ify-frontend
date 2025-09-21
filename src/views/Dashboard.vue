<template>
  <div class="min-h-screen bg-slate-900 text-white">
    <!-- Sidebar -->
    <div class="fixed left-0 top-0 h-full w-16 bg-slate-800 flex flex-col items-center py-6 space-y-6">
      <!-- Logo -->
      <div class="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
        <div class="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
      </div>

      <!-- Navigation Icons -->
      <div class="flex flex-col space-y-4">
        <div class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </div>
        <div class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        </div>
        <div class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
          </svg>
        </div>
        <div class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <div class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
      </div>

      <!-- Bottom Icons -->
      <div class="flex-1"></div>
      <div class="flex flex-col space-y-4">
        <div class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <button @click="logout" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="ml-16 p-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-light mb-4">
          {{ userName }}'s AI <span class="text-orange-500 font-medium">Workspace</span>
        </h1>
        <p class="text-gray-400 text-lg">Good day! How may I assist you today?</p>
      </div>

      <!-- Meet ify Employees Section -->
      <div class="mb-12">
        <!-- Heading -->
        <div class="flex items-center mb-8">
          <div class="w-6 h-6 text-orange-500 mr-3">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h2 class="text-xl font-medium">Meet ify Employees</h2>
        </div>

        <!-- Employee Cards -->
        <!-- (unchanged code for employees grid) -->
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Loading Skeletons -->
          <div v-for="i in 8" :key="i" class="bg-slate-800 rounded-2xl p-6 animate-pulse">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-slate-700 rounded-xl mr-3"></div>
              <div>
                <div class="h-4 bg-slate-700 rounded w-16 mb-2"></div>
                <div class="h-3 bg-slate-700 rounded w-20"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="h-3 bg-slate-700 rounded"></div>
              <div class="h-3 bg-slate-700 rounded w-5/6"></div>
              <div class="h-3 bg-slate-700 rounded w-4/6"></div>
            </div>
          </div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Dynamic Employee Cards -->
          <div
            v-for="employee in employees"
            :key="employee.id"
            @click="handleEmployeeClick(employee)"
            class="rounded-2xl p-6 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
            :class="selectedEmployeeId === employee.id ?
              `bg-gradient-to-br ${employee.selectedColor}` :
              'bg-slate-800 hover:bg-slate-750'"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center mr-3"
                :class="selectedEmployeeId === employee.id ?
                  'bg-white/20' :
                  `bg-gradient-to-r ${employee.color}`"
              >
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-white">{{ employee.name }}</h3>
                <p class="text-sm" :class="selectedEmployeeId === employee.id ? 'text-white/80' : 'text-gray-400'">
                  {{ employee.department }}
                </p>
              </div>
            </div>
            <p class="text-sm leading-relaxed" :class="selectedEmployeeId === employee.id ? 'text-white/90' : 'text-gray-300'">
              {{ employee.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Chat Interface -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-slate-800 rounded-3xl p-8 relative">
          <!-- Chat Messages -->
          <div v-if="messages.length > 1" class="h-60 overflow-auto mb-6 space-y-4">
            <div v-for="(m,i) in messages" :key="i" class="flex" :class="m.from === 'user' ? 'justify-end' : 'justify-start'">
              <div v-if="m.from === 'bot'" class="bg-slate-700 rounded-2xl px-4 py-3 max-w-xs">
                <p class="text-gray-100">{{ m.text }}</p>
              </div>
              <div v-else class="bg-orange-500 rounded-2xl px-4 py-3 max-w-xs">
                <p class="text-white">{{ m.text }}</p>
              </div>
            </div>
          </div>

          <!-- Input Area -->
          <div class="relative">
            <div class="flex items-center bg-white rounded-2xl px-6 py-4 shadow-lg">
              <!-- Clip Icon with File Input -->
              <label class="cursor-pointer">
                <svg class="w-5 h-5 text-gray-400 mr-3 hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                </svg>
                <input type="file" class="hidden" @change="onFileChange" />
              </label>

              <input
                v-model="query"
                @keyup.enter="ask"
                placeholder="What's on your mind?"
                class="flex-1 bg-transparent text-slate-900 placeholder-gray-400 outline-none"
              />
              <div class="flex items-center space-x-3 ml-4">
                <span class="text-gray-400 text-sm">{{ query.length }}</span>
                <svg class="w-5 h-5 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
                <button
                  @click="ask"
                  class="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Upload Response -->
            <div v-if="uploadResponse" class="mt-4 bg-slate-700 text-gray-100 text-sm p-3 rounded-xl">
              <pre>{{ uploadResponse }}</pre>
            </div>

            <!-- Prompts Button -->
            <div class="absolute bottom-full left-0 mb-4">
              <button class="flex items-center space-x-2 bg-white border border-orange-200 rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:border-orange-300 transition-colors shadow-sm">
                <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Prompts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import store from '../store'

// State
const messages = ref([
  {
    from: 'bot',
    text: import.meta.env.VITE_DEMO_MODE === 'true'
      ? 'Hi demo — how can I help?'
      : 'Hi — how can I help?'
  }
])

const query = ref('')
const employees = ref([])
const loading = ref(true)
const selectedEmployeeId = ref(null)

// ✅ use auth store directly
const userName = computed(() => store.getters['auth/userName'])

// Toggle this to switch between sample data and backend data
const USE_BACKEND_DATA = false

// Sample employees (same as before)
const sampleEmployees = [
  {
    id: 1,
    name: 'Luna',
    department: 'Social Media',
    description: 'Uses AI to automate, create, and optimize various social media tasks, including content creation, post scheduling, audience engagement, and analytics.',
    color: 'from-blue-500 to-blue-600',
    selectedColor: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    name: 'Alex',
    department: 'Social Media',
    description: 'Uses AI to automate, create, and optimize various social media tasks, including content creation, post scheduling, audience engagement, and analytics.',
    color: 'from-blue-500 to-blue-600',
    selectedColor: 'from-orange-500 to-red-500'
  },
  {
    id: 3,
    name: 'Luna',
    department: 'Social Media',
    description: 'Uses AI to automate, create, and optimize various social media tasks, including content creation, post scheduling, audience engagement, and analytics.',
    color: 'from-blue-500 to-blue-600',
    selectedColor: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    name: 'Luna',
    department: 'Social Media',
    description: 'Uses AI to automate, create, and optimize various social media tasks, including content creation, post scheduling, audience engagement, and analytics.',
    color: 'from-blue-500 to-blue-600',
    selectedColor: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    name: 'Luna',
    department: 'Social Media',
    description: 'Uses AI to automate, create, and optimize various social media tasks, including content creation, post scheduling, audience engagement, and analytics.',
    color: 'from-blue-500 to-blue-600',
    selectedColor: 'from-orange-500 to-red-500'
  },
  {
    id: 6,
    name: 'Pheonix',
    department: 'Social Media',
    description: 'Uses AI to automate, create, and optimize various social media tasks, including content creation, post scheduling, audience engagement, and analytics.',
    color: 'from-blue-500 to-blue-600',
    selectedColor: 'from-orange-500 to-red-500'
  },
  {
    id: 7,
    name: 'Luna',
    department: 'Social Media',
    description: 'Uses AI to automate, create, and optimize various social media tasks, including content creation, post scheduling, audience engagement, and analytics.',
    color: 'from-blue-500 to-blue-600',
    selectedColor: 'from-orange-500 to-red-500'
  },
  {
    id: 8,
    name: 'Luna',
    department: 'Social Media',
    description: 'Uses AI to automate, create, and optimize various social media tasks, including content creation, post scheduling, audience engagement, and analytics.',
    color: 'from-blue-500 to-blue-600',
    selectedColor: 'from-orange-500 to-red-500'
  }
]

// Fetch employees
const fetchEmployees = async () => {
  try {
    loading.value = true
    if (USE_BACKEND_DATA) {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE}/employees/`)
      employees.value = res.data
    } else {
      employees.value = sampleEmployees
    }
  } catch (e) {
    console.error('Error fetching employees:', e)
    employees.value = sampleEmployees
  } finally {
    loading.value = false
  }
}

// Handle employee click
const handleEmployeeClick = (employee) => {
  selectedEmployeeId.value =
    selectedEmployeeId.value === employee.id ? null : employee.id
}

// On mount
onMounted(async () => {
  await store.dispatch('auth/fetchUser')
  await fetchEmployees()
})

// Ask function
const ask = async () => {
  if (!query.value.trim()) return
  messages.value.push({ from: 'user', text: query.value })

  if (import.meta.env.VITE_DEMO_MODE === 'true') {
    setTimeout(() => {
      messages.value.push({ from: 'bot', text: 'Demo answer to: ' + query.value })
    }, 300)
    query.value = ''
    return
  }

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE}/chat/`, {
      message: query.value
    })
    messages.value.push({ from: 'bot', text: res.data.reply })
  } catch {
    messages.value.push({ from: 'bot', text: 'Error occurred while processing your request.' })
  } finally {
    query.value = ''
  }
}

// Logout
const logout = () => {
  store.dispatch('auth/signOut')
  window.location.href = '/signin'
}
</script>
