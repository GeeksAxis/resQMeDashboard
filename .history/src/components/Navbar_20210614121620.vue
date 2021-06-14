<template>
  <nav class="mb-0">
    <v-app-bar max-height="150" color="white" app>
      <v-app-bar-nav-icon
        dark
        color="#ef6c00"
        small
        @click="drawer = !drawer"
        class=" pa-5"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-badge
        :value="hover"
        color="#ef6c00"
        content="89"
        left
        transition="slide-x-transition"
      >
        <v-hover v-model="hover">
          <v-icon color="grey lighten-1">
            mdi-bell
          </v-icon>
        </v-hover>
      </v-badge>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark app color="#212121" width="250">
      <v-layout column align-center>
        <v-flex class="mt-4">
        <vrou
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          active-class="border"
          v-for="item in items"
          :key="item.icon"
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block outlined color="#ef6c00" @click="logout()">
            Logout
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

    items: [
      { icon: "mdi-emergency", text: "Emergency", route: "/" },
      { icon: "mdi-report", text: "Users Report", route: "/users" },
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
.border {
  border-right: 4px solid #ef6c00;
}
.headline {
  color: #ef6c00;
  font-weight: 700;
}
</style>
