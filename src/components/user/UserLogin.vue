<script setup>
import { ref, reactive } from 'vue';
import { request } from '@/api/axios';
import { useNavigation } from '@/utils/routerUtils'; // 引入封装的路由工具
const { navigateTo } = useNavigation();
defineProps({
  msg: String,
});

const formState = reactive({
  user_name: '',
  password: '',
  remember: true,
});
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

// 自定义的密码验证规则函数，使用 async/await
const validatePassword = async (value) => {
  if (!value) {
    throw new Error('请输入密码!');
  }
  // 正则表达式：要求至少一个大写字母
  const hasUppercase = /[A-Z]/.test(value);
  if (!hasUppercase) {
    throw new Error('密码必须包含至少一个大写字母!');
  }
  // 密码长度在 6 到 15 个字符之间
  if (value.length < 6 || value.length > 15) {
    throw new Error('密码长度必须在 6 到 15 个字符之间!');
  }
  return true; // 验证通过
};

// 定义表单验证规则
const passwordRules = [
  { required: true, message: '请输入密码!' },
  { validator: validatePassword, trigger: 'change' },
];

const onFinish = async (values) => {
  try {
    // 调用封装的 POST 请求函数
    const response = await request('POST', '/erp/users/login', values);
    navigateTo('/taskCenter'); // 替换为你想要跳转的路由
    console.log('Success:', response);
    // 处理登录成功后的逻辑
  } catch (error) {
    console.error('Login failed', error);
    // 处理登录失败后的逻辑
  }
};
</script>

<template>
  <div class="login">
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
          name="user_name"
          :rules="[{ required: true, message: '请输入账号!' }]"
        >
          <a-input v-model:value="formState.user_name" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="passwordRules">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style scoped lang='stylus'>
.login {
}
</style>
