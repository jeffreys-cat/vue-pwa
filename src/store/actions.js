export default {
    increment({ commit }, counter) {
        commit('INCREMENT', counter);
    },
    decrement({ commit }, counter) {
        commit('DECREMENT', counter);
    },
    reset({ commit }, counter) {
        commit('RESET', counter);
    },
};
