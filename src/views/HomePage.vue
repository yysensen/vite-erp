<template class="home-page">
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is a basic template for a Vue 3 view page.</p>
    <a-button @click="goToLogin">Go to Login</a-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToLogin() {
  router.push("/login");
}
</script>

<style scoped>
.home-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
}
</style>