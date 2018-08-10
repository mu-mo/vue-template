import VueRouter from 'vue-router';
import Vue from 'vue';
import App from '@/App';

Vue.use(VueRouter);

const mode = process.env.NODE_ENV === 'production' ? 'history' : 'hash';
const routes = [{
  path: '/',
  component: App,
  children: [],
}];
const router = new VueRouter({
  mode,
  routes,
});

export default router;
