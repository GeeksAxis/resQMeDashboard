import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";




import { auth } from "./firebase";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;


Vue.use(require("vue-moment")  { =
  const time = moment.tz(response.timestamp)
const localtz = moment.tz.guess()
const date = time.clone().tz(localtz)
}


);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD_amxYnSPPmZM6c61QbLU5X19B4EI6hIA",
  },
  installComponents: true,
});


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
