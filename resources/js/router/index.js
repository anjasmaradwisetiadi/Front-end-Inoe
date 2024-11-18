
import { createWebHistory, createRouter } from 'vue-router';

// import Home from '../pages/Home/Home.vue';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/Home/Home.vue')
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('../pages/Home/Home.vue')
  },
  { path: '/:pathMatch(.*)*', component: () => import('@components/PageNotFound.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
