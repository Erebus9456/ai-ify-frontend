<template>
  <button class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">
    {{ label }}
  </button>
</template>
<script setup>
defineProps({ label: String });
</script>
