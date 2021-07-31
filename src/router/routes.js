import { createRouter, createWebHistory } from "vue-router";

import Login from '@/views/Login';
import Register from '@/views/Register';
import Dashboard from '@/views/Dashboard';
import Rating from '@/views/Rating'

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard
    },
    {
      name: 'Rating',
      path: '/rating',
      component: Rating
    }
  ]
})

export default router;