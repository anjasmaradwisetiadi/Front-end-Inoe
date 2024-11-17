
import { createWebHistory, createRouter } from 'vue-router';

import Home from '../pages/Home/Home.vue';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
import Dashboard from '../pages/dashboard/Dashboard.vue';
// import Posts from '../components/Posts';
// import EditPost from '../components/EditPost';
// import AddPost from '../components/AddPost';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
