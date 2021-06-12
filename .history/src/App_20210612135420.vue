<template>
  <v-app>
    <Navbar v-if="$route.meta.showHeader == true" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
    Map
  },

  data: () => ({
    //
  }),
};
</script>
