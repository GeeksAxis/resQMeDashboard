<template>
  <v-app class="custom__bg">
    <v-container fill-height>
      <v-row justify="center" align="center">
        <div class="d-flex justify-center align-center"></div>
        <v-col cols="12" md="12">
          <div class="d-flex justify-center align-center">
           
              <v-card
                width="600"
                elevation="5"
                style="border-radius: 10px"
                class="mt-2"
              >
              <v-row>
                <v-col cols="12" md="6"></v-col>
              </v-row>
                
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
    loader: null,
    loading: false,
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
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.loading = true
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
