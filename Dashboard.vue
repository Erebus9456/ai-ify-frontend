<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
    <p class="mb-4">What do you want to do, user?</p>
    <Input v-model="query" label="Your request"/>
    <Button label="Send" @click="send"/>
    <button @click="logout" class="mt-4 text-red-600">Logout</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import store from "../store";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

const query = ref("");
const send = ()=>{ alert("Sending: "+query.value) };
const logout = async ()=>{ await store.dispatch("auth/signOut"); window.location.href="/signin"; };
</script>
