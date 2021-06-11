<template>
  <v-app>
    <v-container>
      <v-row>
       
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    users: "",
  }),
  mounted() {
    fetch("http://localhost:8000/api/user/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => ((this.users = result.payload), console.log(result)));
  },
};
</script>
