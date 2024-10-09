<template>
  <ErpIndex msg="登录" class="login" />
</template>

<script setup>
import { ref } from 'vue';
import ErpIndex from '@/components/user/UserLogin.vue';
const message = ref('Hello, World!');
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
}
.login {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>