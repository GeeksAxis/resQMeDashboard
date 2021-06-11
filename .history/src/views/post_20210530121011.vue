<template>
  <v-app>
    <v-container fill-height>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
            <v-form @submit.prevent ref="form">
                  <v-text-field solo placeholder="username" v-model="username">
              </v-text-field>
              <v-text-field solo placeholder="email" v-model="email">
              </v-text-field>
              <v-text-field solo placeholder="password" v-model="password">
              </v-text-field>
              <v-file-input
                accept="image/*"
                placeholder="profilePicture"
                v-model="profilePicture"
            
              ></v-file-input>

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