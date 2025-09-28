<template>
  <div class="border p-4 rounded">
    <div v-for="(m,i) in messages" :key="i" class="mb-2">
      <div v-if="m.from==='bot'" class="text-blue-600">Bot: {{m.text}}</div>
      <div v-else class="text-gray-800">You: {{m.text}}</div>
    </div>
    <div class="mt-4">
      <input v-model="reply" @keyup.enter="send" placeholder="Type reply..." class="border p-2 w-full"/>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
defineProps({ messages: Array })
const emit = defineEmits(['reply'])
const reply = ref('')
const send = ()=>{
  if(!reply.value) return
  emit('reply', reply.value)
  reply.value=''
}
</script>
