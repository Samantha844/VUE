import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue,IconsPlugin } from 'bootstrap-vue';
import VueSweetalert2 from 'vue-VueSweetalert2';

import { Axios } from 'axios';
import router from "@/router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "sweetalert2/dist/sweetalert2.min.css";


Vue.use(BootstrapVue);
Vue.use (IconsPlugin);
Vue.use (VueSweetalert2);
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
