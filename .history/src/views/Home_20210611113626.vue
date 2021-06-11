<template>
  <v-app class="custom__bg">
    <v-container>
      <v-row>
      
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data: () => ({
   
  }),
  mounted() {
    fetch("http://localhost:8000/api/user/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => ((this.us = result.payload), console.log(result)));
  },
};
</script>
