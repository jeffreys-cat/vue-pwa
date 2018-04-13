export default {
    increment({ commit }: {commit: any}, counter: any) {
        commit('INCREMENT', counter);
    },
    decrement({ commit }: {commit: any}, counter: any) {
        commit('DECREMENT', counter);
    },
    reset({ commit }: {commit: any}, counter: any) {
        commit('RESET', counter);
    },
};
