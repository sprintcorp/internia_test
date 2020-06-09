import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import {BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import store from './Store';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
