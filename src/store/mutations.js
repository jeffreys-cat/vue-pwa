import * as types from './mutation-types';

// lint: do not use `++` or `--` operator
export default {
    [types.INCREMENT](state) {
        state.counter += 1;
    },
    [types.DECREMENT](state) {
        state.counter -= 1;
    },
    [types.RESET](state) {
        state.counter = 0;
    }
};
