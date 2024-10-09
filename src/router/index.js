import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/erp/HomePage.vue';
import UserLogin from '@/views/erp/ErpIndex.vue';
import TaskCenter from '@/views/erp/task/TaskCenter.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: UserLogin,
  },
  {
    path: '/taskCenter',
    name: 'taskCenter',
    component: TaskCenter,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
