import Vue from 'vue'
import App from './App.vue'
import login from './pages/login.vue'
import about from './pages/about.vue'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#login',
  render: h => h(login)
});

new Vue({
  el: '#about',
  render: h => h(about)
});