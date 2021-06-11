<template>
  <nav>
    <v-app-bar max-height="150" color="white" prominent app>
      <v-app-bar-nav-icon
        dark
        color="#f69227"
        small
        @click="drawer = !drawer"
        class=" pa-5"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="mt-12 ml-4">
        <v-card-text>
          <div class="mt-12">
            <p class=" h2--text mt-8">Dashboard</p>
        
          </div>
        </v-card-text>
      </v-toolbar-title>
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark app color="#2c3d4d" width="250">
      <v-layout column align-center>
        <v-flex class="mt-3 mb-4">
         
      </v-layout>
      <p class="white--text ml-2">Main</p>
      <v-list>
        <v-list-item
          active-class="border"
          v-for="item in items"
          :key="item.icon"
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,

    items: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-account-circle", text: "Users", route: "/user" },

      { icon: "fas fa-share-square ", text: "Post", route: "/post" },
    ],
  }),
};
</script>
<style>
.header_text {
  color: #e39225;
}
</style>
