<template>
  <v-app class="custom__bg">
    <v-container>
      
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
