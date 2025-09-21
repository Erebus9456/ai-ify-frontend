<template>
  <button :class="['px-4 py-2 rounded-xl font-semibold', className]" :disabled="disabled" @click="$emit('click')">
    <slot>{{ label }}</slot>
  </button>
</template>
<script setup>
const props = defineProps({ label: String, className: { type: String, default: '' }, disabled: Boolean })
</script>
