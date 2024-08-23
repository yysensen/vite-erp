import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import UserLogin from '../views/UserLogin.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: UserLogin
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;