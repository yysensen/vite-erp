<template class="home-page">
  <div>
    <h1>Home Page Loaded</h1>
    <!-- 调试输出 -->
    <p>This is a basic template for a Vue 3 view page.</p>
    <a-button @click="goToLogin">登录</a-button>
  </div>
</template>

<script setup>
import { useNavigation } from '@/utils/routerUtils'; // 引入封装的路由工具
const { navigateTo } = useNavigation();

function goToLogin() {
  navigateTo('/login');
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