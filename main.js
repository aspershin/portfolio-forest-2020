import Vue from 'vue'
import App from './App.vue'
import login from './login'
import about from './about'
import admin from './admin'
import works from './works'
import store from './src/store'
import router from './src/router'

export const bus = new Vue();

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

new Vue({
  el: '#login',
  store,
  router,
  render: h => h(login)
});

new Vue({
  el: '#about',
  store,
  router,
  render: h => h(about)
});

new Vue({
  el: '#admin',
  store,
  router,
  render: h => h(admin)
});

new Vue({
  el: '#works',
  store,
  router,
  render: h => h(works)
});