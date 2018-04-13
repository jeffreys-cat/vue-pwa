import { State } from './store.modal';

export default {
    getCounter: (state: State) => {
        return state.counter;
    }
};
