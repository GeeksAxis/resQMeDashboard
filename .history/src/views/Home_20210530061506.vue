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
              <p>{{ user.name }}</p>
              <p>{{ user.email }}</p>
              <p>{{ user.username }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: "Home",

  components: {},
  data: () => ({
    user: JSON.parse(localStorage.getItem("user")),

    
  }),
  mounted (){
    axios.get('http://localhost:8000/api/user/users').then(re)
    
  }
};
</script>
