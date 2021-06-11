<template>
  <nav>
    <v-app-bar max-height="150" color="white" app>
      <v-app-bar-nav-icon
        dark
        color="#f69227"
        small
        @click="drawer = !drawer"
        class=" pa-5"
      ></v-app-bar-nav-icon>
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark app color="orange" width="250">
      <v-layout column align-center>
        <v-flex class="mt-3 mb-4">
          
        </v-flex>
      </v-layout>
     
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
      { icon: "mdi-view-dashbod", text: "Dashboard", route: "/" },
      { icon: "mdi-account-cile", text: "Users", route: "/users" },

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
