import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import adminContent from './components/adminContent.vue'

const routes = [
  {
    path: '/',
    component: adminContent
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})