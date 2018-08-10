import VueRouter from 'vue-router';
import Vue from 'vue';
import App from '@/App';
import home from '@/pages/home';
import item from '@/pages/item';
import score from '@/pages/score';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(home), 'home'),
  }, {
    path: '/item',
    component: r => require.ensure([], () => r(item), 'item'),
  }, {
    path: '/score',
    component: r => require.ensure([], () => r(score), 'score'),
  }],
}];
const router = new VueRouter({
  routes,
});

export default router;
