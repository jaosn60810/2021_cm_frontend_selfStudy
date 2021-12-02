import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Test01 from '../views/Test01.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/test01',
    name: 'test01',
    component: Test01,
    children: [
      {
        path: 'info',
        name: 'test01-info',
        component: () =>
          import(/* webpackChunkName: "info" */ '../views/Info.vue'),
      },
      {
        path: 'img',
        name: 'test01-img',
        component: () =>
          import(/* webpackChunkName: "img" */ '../views/Img.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{ path: '/test01', component: Test01 }],
});

export default router;
