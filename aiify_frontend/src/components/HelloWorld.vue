<template>
  <div id="app">
    <h1>Vue + Django Test</h1>
    <Ping />
  </div>
</template>

<script>
import Ping from "../components/PingCheck.vue";

export default {
  name: "App",
  components: {
    Ping,
  },
};
</script>
