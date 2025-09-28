<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Onboarding</h2>
    <p class="mb-4">Welcome! Provide your website link below:</p>
    <Input v-model="website" label="Website URL"/>
    <Button label="Continue" @click="goNext"/>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

const website = ref("");
const goNext = ()=>{ window.location.href="/dashboard" };
</script>
