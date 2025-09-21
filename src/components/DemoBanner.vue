<template>
  <div v-if="isDemo" class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm text-yellow-800 rounded shadow">
      Demo Mode Active — static mock data loaded (VITE_DEMO_MODE=true)
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import store from '../store'
const isDemo = computed(()=> store.getters['app/demoMode'] )
</script>
