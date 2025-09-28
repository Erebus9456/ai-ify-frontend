
<template>
  <div class="mt-4">
    <label class="block mb-2 font-medium">Add a file (any type)</label>
    <input ref="fileInput" type="file" @change="onFileChange" />
    <div v-if="uploading" class="mt-2">Uploading...</div>
    <div v-if="response" class="mt-2 break-words">
      <strong>Response:</strong>
      <pre>{{ response }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const uploading = ref(false)
const response = ref(null)

const onFileChange = async (e) => {
  const file = e.target.files[0]
  if (!file) return
  uploading.value = true
  response.value = null

  // If demo mode, return sample response
  if (import.meta.env.VITE_DEMO_MODE === 'true') {
    // simulate response
    await new Promise(r => setTimeout(r, 500))
    response.value = JSON.stringify({ ok: true, filename: file.name, message: 'Sample response (demo mode)' }, null, 2)
    uploading.value = false
    return
  }

  try {
    const form = new FormData()
    form.append('file', file)
    // send to backend /upload endpoint, backend should accept multipart/form-data
    const res = await axios.post(`${import.meta.env.VITE_API_BASE}/upload/`, form, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    response.value = JSON.stringify(res.data, null, 2)
  } catch (err) {
    console.error(err)
    response.value = 'Upload failed: ' + (err?.response?.data || err.message)
  } finally {
    uploading.value = false
  }
}
</script>
