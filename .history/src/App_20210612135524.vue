<template>
  <v-app>
    <Navbar v-if="$route.meta.showHeader == true" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
  },
};
</script>
