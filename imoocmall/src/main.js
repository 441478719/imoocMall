// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import Vuex from 'vuex'
// import VueLazyload from 'vue-lazyload'
// import infiniteScroll from 'vue-infinite-scroll'
// import { currency } from './util/currency'

// import './assets/css/base.css'
// import './assets/css/checkout.css'
// import './assets/css/product.css'
import "./assets/css/js.css";
import infiniteScroll from 'vue-infinite-scroll';
Vue.use(infiniteScroll);
Vue.config.productionTip = false

// Vue.filter(currency);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
