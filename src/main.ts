import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Buefy from "buefy";
import numFormat from 'vue-filter-number-format';
import Vue2Filters from 'vue2-filters'

Vue.use(Buefy);
Vue.use(require('vue-moment'));
Vue.use(Vue2Filters);
Vue.config.productionTip = false;

//Define Global Filters here
Vue.filter('numFormat', numFormat);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
