<template>
  <v-app class="custom__bg">
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-card-text>
              <p>{{ user.name }}</p>
              <p>{{ user.email }}</p>
              <p>{{ user.username }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-text>
              <div v-for="item in us" :key="item._id">
                <p>{{ item.email }}</p>
                <p>{{ item.username }}</p>
                <p>{{ item.password }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    us: null,
  }),
  mounted() {
    fetch("http://localhost:8000/api/user/users", {
      method: "GET",
    }).then();
  },
};
</script>
