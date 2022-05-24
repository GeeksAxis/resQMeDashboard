<template>
  <nav class="mb-0" dark>
    <v-app-bar flat elevation="0" color="#222831" app>
      <v-app-bar-nav-icon dark small @click="drawer = !drawer" class=" pa-5"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-badge :value="hover" color="#ef6c00" content="89" left transition="slide-x-transition">
        <v-hover v-model="hover">
          <v-icon color="grey lighten-1">
            mdi-bell
          </v-icon>
        </v-hover>
      </v-badge>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark app width="250" color="background">
      <v-layout column align-start class="ml-4">
        <div class="d-flex mt-5">
          <v-sheet color="primary" class="px-2 py-1" rounded="lg">
            <img src="../assets/vector.svg" />

          </v-sheet>
          <div class="ml-2 primary--text font-weight-bold">
            ResQ <br>
            Me
          </div>
        </div>



      </v-layout>
      <div class="mt-8">
        <div class="primary--text font-weight-bold ml-4 ">
          Security
        </div>
        <v-list dense>
          <v-list-item active-class="border" v-for="item in security" :key="item.icon" :to="item.route">
            <v-list-item-action>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div class="mt-8">
        <div class="primary--text font-weight-bold ml-4 ">
          Issues
        </div>
        <v-list dense>
          <v-list-item active-class="border" v-for="item in issues" :key="item.icon" :to="item.route">
            <v-list-item-action>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn text @click="logout()" small class="text-capitalize">
            <v-icon>mdi-logout</v-icon> Log out
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    hover: false,

    security: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-poll", text: "Analytics", route: "/analytics" },
      { icon: "mdi-flash", text: "Danger Zones", route: "/dangerzones" },
      { icon: "mdi-plus-box", text: "Report", route: "/report" },
    ],
    issues: [
      { icon: "mdi-car", text: "Accident", route: "/accident" },
      { icon: "mdi-car-brake-alert", text: "Robbery", route: "/robbery" },

      { icon: "mdi-fire-circle", text: "Fire", route: "/fire" },
    ],
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style>
.border {}

.headline {
  color: #ef6c00;
  font-weight: 700;

}
</style>
