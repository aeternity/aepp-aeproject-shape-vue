import Vuex from 'vuex';
import Vue from 'vue';
import config from './modules/config';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    config
  }
})

export default store
