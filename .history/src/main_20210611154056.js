import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps";

VueGoogleMaps, {
  load: {
    key: "AIzaSyD_amxYnSPPmZM6c61QbLU5X19B4EI6hIA",
    libraries: "places" // necessary for places input
  }

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
