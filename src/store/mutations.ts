import * as types from './mutation-types';
import { State } from './store.modal';


// lint: do not use `++` or `--` operator
export default {
    [types.INCREMENT](state: State) {
        state.counter += 1;
    },
    [types.DECREMENT](state: State) {
        state.counter -= 1;
    },
    [types.RESET](state: State) {
        state.counter = 0;
    }
};
