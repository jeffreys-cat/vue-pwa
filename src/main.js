import Vue from 'vue';
import App from './App';
import router from './routers';
import Vuex from 'vuex';
import store from './store/store';
import 'babel-polyfill';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install({
    onUpdating: () => {
        console.log('SW Event:', 'onUpdating');
    },
    onUpdateReady: () => {
        console.log('SW Event:', 'onUpdateReady');
        // Tells to new SW to take control immediately
        OfflinePluginRuntime.applyUpdate();
    },
    onUpdated: () => {
        console.log('SW Event:', 'onUpdated');
        // Reload the webpage to load into the new version
        window.location.reload();
    },

    onUpdateFailed: () => {
        console.log('SW Event:', 'onUpdateFailed');
    }
});
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    },
});
