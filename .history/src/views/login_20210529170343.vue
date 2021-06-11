<template>
  <v-app class="custom__bg">
    <v-container fill-height>
      <v-row justify="center" align="center">
        <div class="d-flex justify-center align-center"></div>
        <v-col cols="12" md="12">
          <div class="d-flex justify-center align-center">
            <v-card flat>
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
                      @click="logIn()"
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
                <v-btn small text to="/signup" color="" class="text-capitalize"
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
    showPassword: "",
    email: "",
    password: "",
    rules: {
      required: (v) => !!v || "Field is required",
      counter: (v) => (v && v.length >= 5) || "Minimum length is 5 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      password: (value) =>
        (value && value.length >= 6) || "Minimum length is 6 characters",
    },
  }),
  methods: {
    logIn() {
      fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })
        .then((r) => r.json())
        .then((response) => {
            if(response.status )
          console.log(response);
        })
        .catch((error) => console.log("error", error));

      //   console.log(logInData);
      //   this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.custom__bg {
  background: white;
}

.custom__color {
  box-shadow: 0 5px 15px 0 rgba(32, 137, 214, 0.4);
}

.action__buttom {
  border-radius: 10px;
  box-shadow: 0 5px 15px 0 rgba(32, 137, 214, 0.4);
}
.custom__field {
  border-radius: 10px;
}
.custom__title {
  font-size: 30px;

  color: #000000;
}
.custom__sub {
  color: #000000;
  width: 249px;
}
</style>
