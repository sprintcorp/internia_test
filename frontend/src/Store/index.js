import Vue from 'vue';
import Vuex from 'vuex';
import employee from './modules/employee';
Vue.use(Vuex);

const modules = {
    employee
  };

export default new Vuex.Store({
    modules
  });