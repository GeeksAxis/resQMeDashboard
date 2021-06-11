<template>
  <v-app>
    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './'
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
