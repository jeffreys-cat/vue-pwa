import Vue from 'vue';
import App from './App';
import router from './routers';
import Vuex from 'vuex';
import store from './store/store';
import 'babel-polyfill';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    },
});
