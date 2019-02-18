import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBatteryFull, faBatteryQuarter, faBatteryHalf, faBatteryThreeQuarters,
  faThermometerThreeQuarters, faTint, faArrowLeft, faSyncAlt,
  faExclamationTriangle, faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faBatteryFull, faBatteryQuarter, faBatteryHalf, faBatteryThreeQuarters,
  faThermometerThreeQuarters, faTint, faArrowLeft, faSyncAlt, faExclamationTriangle,
  faCheckCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    setInterval(() => {
      this.$store.dispatch('loadBuildings');
    }, 10000);
  },
  render: h => h(App),
}).$mount('#app');
