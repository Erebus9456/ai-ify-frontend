<template>
  <div :class="wrapperClass">
    <div :class="bubbleClass">
      <slot />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  from: { type: String, default: 'bot' } // 'bot' or 'user'
})
const wrapperClass = computed(() => props.from === 'user' ? 'flex justify-end mb-3' : 'flex justify-start mb-3')
const bubbleClass = computed(() => props.from === 'user' ? 'max-w-[70%] bg-indigo-600 text-white px-4 py-2 rounded-lg rounded-tr-none' : 'max-w-[70%] bg-gray-100 text-gray-900 px-4 py-2 rounded-lg rounded-tl-none')
</script>
