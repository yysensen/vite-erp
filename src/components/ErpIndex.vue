<script setup>
import { ref, reactive } from "vue";

defineProps({
  msg: String,
});

const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

// 自定义的密码验证规则函数，使用 async/await
const validatePassword = async (rule, value) => {
  if (!value) {
    throw new Error("请输入密码!");
  }
  // 正则表达式：要求至少一个大写字母
  const hasUppercase = /[A-Z]/.test(value);
  if (!hasUppercase) {
    throw new Error("密码必须包含至少一个大写字母!");
  }
  // 密码长度在 6 到 15 个字符之间
  if (value.length < 6 || value.length > 15) {
    throw new Error("密码长度必须在 6 到 15 个字符之间!");
  }
  return true; // 验证通过
};

// 定义表单验证规则
const passwordRules = [
  { required: true, message: "请输入密码!" },
  { validator: validatePassword, trigger: "change" },
];
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="用户"
        name="username"
        :rules="[{ required: true, message: '请输入账号!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="passwordRules">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang='stylus'></style>
