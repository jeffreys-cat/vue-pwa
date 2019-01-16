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
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueLazyload from 'vue-lazyload'
// require styles
import 'swiper/dist/css/swiper.css'
// Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    },
});
