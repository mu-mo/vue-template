import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/pages/index';
import User from '@/pages/user';

Vue.use(VueRouter);

const mode = process.env.NODE_ENV === 'production' ? 'history' : 'hash';
const homePage = {
  path: '/',
  name: 'index',
  component: App,
};

const userPage = {
  path: '/user',
  name: 'user',
  component: User,
};

const routes = [homePage, userPage];
const router = new VueRouter({
  mode,
  routes,
});

export default router;
