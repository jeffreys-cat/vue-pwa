import Vue from 'vue';
import App from './App';
import router from './routers';
import Vuex from 'vuex';
import store from './store/store';

// Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
