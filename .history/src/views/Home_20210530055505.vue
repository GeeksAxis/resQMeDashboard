<template>
  <v-app class="custom__bg">
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card>
            v-card
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
  }),
};
</script>
