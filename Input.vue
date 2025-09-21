<template>
  <div>
    <label class="block text-sm font-medium mb-1">{{ label }}</label>
    <input
      v-model="modelValue"
      :type="type"
      class="w-full border rounded-lg px-3 py-2"
    />
  </div>
</template>
<script setup>
defineProps({ label: String, type: { type: String, default: "text" }, modelValue: String });
defineEmits(["update:modelValue"]);
</script>
