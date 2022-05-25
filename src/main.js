import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
import { auth } from "./firebase";
import VueGeolocation from 'vue-browser-geolocation';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);



Vue.config.productionTip = false;
Vue.use(VueGeolocation);

// moment().tz("West/Africa").format();
moment.tz.guess();
Vue.use(VueMoment, { moment });

let user;
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
