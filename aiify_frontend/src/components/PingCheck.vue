/* eslint-disable */
<template>
  <div class="p-4">
    <button @click="fetchPing" :disabled="loading">Check Ping</button>

    <p v-if="loading">Loading...</p>
    <p v-if="error" class="text-red-500">{{ error }}</p>
    <p v-if="message">Response: {{ message }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PingCheck",
  computed: {
    ...mapGetters("ping", ["pingMessage", "pingLoading", "pingError"]),
    message() {
      return this.pingMessage;
    },
    loading() {
      return this.pingLoading;
    },
    error() {
      return this.pingError;
    },
  },
  methods: {
    ...mapActions("ping", ["fetchPing"]),
  },
};
</script>
