// import {set} from 'vue'
import * as types from './mutation-types';

// lint: do not use `++` or `--` operator
export default {
    [types.INCREAMENT](state) {
        state.counter += 1;
    },
    [types.DECREAMENT](state) {
        state.counter -= 1;
    },
    [types.RESET](state) {
        state.counter = 0;
    }
};
