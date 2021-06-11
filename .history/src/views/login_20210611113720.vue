<template>
  <v-app class="custom__bg">
    <v-container fill-height>
      <v-row justify="center" align="center">
        <div class="d-flex justify-center align-center"></div>
        <v-col cols="12" md="12">
          <div class="d-flex justify-center align-center">
            <v-card flat>
              <h1>Login</h1>
              <v-card
                width="370"
                elevation="5"
                style="border-radius: 10px"
                class="mt-2"
              >
                <v-card-text>
                  <v-form @submit.prevent ref="form">
                    <v-col cols="12" md="12" class="py-0 px-2">
                      <v-text-field
                        solo
                        class="custom__field"
                        placeholder="Email"
                        :rules="[rules.required, rules.email]"
                        v-model="email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0 px-2 ">
                      <v-text-field
                        solo
                        placeholder="Password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        v-model="password"
                        color="#f69227"
                        :rules="[rules.required, rules.password]"
                        class="custom__field"
                        @click:append="showPassword = !showPassword"
                        hide-details="auto"
                      >
                      </v-text-field>
                    </v-col>
                  </v-form>

                  <v-col cols="12" md="12" class="px-2 ">
                    <v-btn
                      block
                      large
                      @click=""
                      height="50"
                      color="blue"
                      class="white--text text-capitalize action__buttom"
                      elevation="3"
                    >
                      Login</v-btn
                    >
                  </v-col>
                </v-card-text>
              </v-card>
              <p class="d-flex align-center justify-center mt-4">
                Dont have an account?
                <v-btn
                  small
                  text
                  to="/register"
                  color=""
                  class="text-capitalize"
                  >Sign Up</v-btn
                >
              </p>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({

  }),
  methods: {
   
  },
};
</script>
<style scoped>
.custom__bg {
  background: white;
}

</style>
