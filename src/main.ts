import Vue from 'vue';
import App from './App.vue';
import router from './routers';
// Vuex
import Vuex from 'vuex';
import store from './store/store';
// Polyfills
import 'babel-polyfill';
// Service Worker
import { registerServiceWorker } from './registerServiceWorker';
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
