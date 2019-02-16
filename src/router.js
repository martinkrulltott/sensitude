import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('@/views/Start'),
    },
    {
      name: 'building',
      path: '/building/:id',
      component: () => import('@/views/Building'),
      props: true,
    },
    {
      name: 'room',
      path: '/room/:id',
      component: () => import('@/views/Room'),
      props: true,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
