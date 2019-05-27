import Vue from 'vue';
import Vuex from 'vuex';

import toDoModule from './toDo.module.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        toDoModule
    }
});