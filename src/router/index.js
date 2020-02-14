import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import createTest from '@/views/createTest.vue';
import manageTest from '@/views/manageTest.vue';
import addMCQ from '@/views/addMCQ.vue';
import addCodeTask from '@/views/addCodeTask.vue';
import addWritingTask from '@/views/addWritingTask.vue';
import landing from '@/views/landing.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/landing',
    name: 'Landing',
    component: landing,
  },
  {
    path: '/createTest',
    name: 'CreateTest',
    component: createTest
  },
  {
    path: '/manageTest',
    name: 'ManageTest',
    component: manageTest
  },
  {
    path: '/addMCQ',
    name: 'AddMCQ',
    component: addMCQ
  },
  {
    path: '/addCodeTask',
    name: 'AddCodeTask',
    component: addCodeTask
  },
  {
    path: '/addWritingTask',
    name: 'AddWritingTask',
    component: addWritingTask
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
