import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

// 需要维护的状态
const state = {
    counter: 0
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
