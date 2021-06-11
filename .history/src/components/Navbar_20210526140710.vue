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
            <p class="header_text h2--text mt-8">Dashboard</p>
            <p class="second_header mb-0">Welcome to JanguAsk Dashboard</p>

            <span class="third_header">web app and mobile app dashbord</span>
          </div>
        </v-card-text>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge content="9" color="#f69227" bordered overlap>
          <v-icon color="grey">mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark app color="#2c3d4d" width="250">
      <v-layout column align-center>
        <v-flex class="mt-3 mb-4">
          <div>
            <p class="header_text">JanguAsk</p>
          </div>
        </v-flex>
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

      <template v-slot:append>
        <div class=" d-flex justify-center mb-5 align-center">
          <v-row align="center" justify="center">
            <v-col cols="2" class="px-2 py-0">
              <v-avatar size="40">
                <img src="" alt="super admin picture" />
              </v-avatar>
            </v-col>
            <v-col cols="5" class="px-2 py-0">
              <div>
                <v-btn small text to="/super">
                  <p class="mt-4 white--text">Super Admin</p>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </template>
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