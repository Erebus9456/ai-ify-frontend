<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form @submit.prevent="handleSignUp" class="space-y-4">
        <Input v-model="firstName" label="First Name"/>
        <Input v-model="lastName" label="Last Name"/>
        <Input v-model="phone" label="Phone"/>
        <Input v-model="email" label="Email" type="email"/>
        <Input v-model="password" label="Password" type="password"/>
        <Button label="Sign Up"/>
      </form>
      <div class="mt-4"><button @click="handleGoogle" class="w-full border py-2 rounded-lg">Sign up with Google</button></div>
      <p class="mt-4 text-sm text-center">Already have an account? <router-link to="/signin" class="text-blue-600">Sign In</router-link></p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import store from "../store";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

const firstName=ref(""), lastName=ref(""), phone=ref(""), email=ref(""), password=ref("");
const handleSignUp = async ()=>{
  try{
    await store.dispatch("auth/signUp", { email: email.value, password: password.value, metadata: { firstName:firstName.value, lastName:lastName.value, phone:phone.value } });
    alert("✅ Check your email for verification link.");
  }catch(e){ alert(e.message) }
};
const handleGoogle = async ()=>{ try{ await store.dispatch("auth/signInWithGoogle") }catch(e){ alert(e.message) } };
</script>
