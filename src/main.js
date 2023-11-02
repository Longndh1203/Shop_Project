import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
import Axios from "axios";

Vue.config.productionTip = false;

Vue.use(Axios);
Vue.use(BootstrapVue);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
