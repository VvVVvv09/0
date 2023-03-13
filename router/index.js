import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Data from '../views/Data.vue';
import Alarm from '../views/Alarm.vue';
import User from '../views/User.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/data',
    name: 'Data',
    component: Data,
  },
  {
    path: '/alarm',
    name: 'Alarm',
    component: Alarm,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
