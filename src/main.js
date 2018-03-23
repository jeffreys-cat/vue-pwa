import Vue from 'vue';
import App from './App';
import router from './routers';
import Vuex from 'vuex';
import store from './store/store';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
