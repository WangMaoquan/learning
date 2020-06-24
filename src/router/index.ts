/*
 * @Description: router
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-06-24 08:46:08
 * @LastEditors: Wang
 * @LastEditTime: 2020-06-24 11:13:20
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
