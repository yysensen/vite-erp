import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'; // 引入路由配置

const pinia = createPinia()
const app = createApp(App);
app.use(router); // 使用路由
app.use(pinia)

// 挂载应用
app.mount('#app');
