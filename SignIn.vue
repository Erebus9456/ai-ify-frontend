<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form @submit.prevent="handleSignIn" class="space-y-4">
        <Input v-model="email" label="Email" type="email"/>
        <Input v-model="password" label="Password" type="password"/>
        <Button label="Sign In"/>
      </form>
      <p class="mt-4 text-sm text-center">No account? <router-link to="/signup" class="text-blue-600">Sign Up</router-link></p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import store from "../store";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

const email = ref(""), password = ref("");
const handleSignIn = async () => {
  try {
    await store.dispatch("auth/signIn", { email: email.value, password: password.value });
    window.location.href = "/onboarding";
  } catch(e) { alert(e.message) }
};
</script>
