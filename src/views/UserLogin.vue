<template>
  <ErpIndex msg="登录" />
</template>

<script setup>
import { ref } from "vue";
import ErpIndex from "../components/ErpIndex.vue";
const message = ref("Hello, World!");
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
}
</style>