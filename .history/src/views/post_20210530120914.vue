<template>
  <v-app>
    <v-container fill-height>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
            <v-form>
                
            </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card> </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card> </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
    data: ()=> ({
        email: "",
        password: "",
        username: "",
        profilePicture: "",

    }),
    methods: {

    }

}
</script>