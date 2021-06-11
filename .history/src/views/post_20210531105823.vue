<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
              <v-form @submit.prevent ref="form">
                <v-text-field
                  placeholder="email"
                  solo
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  placeholder="username"
                  solo
                  v-model="username"
                ></v-text-field>
                <v-text-field
                  placeholder="password"
                  solo
                  v-model="password"
                ></v-text-field>
                <v-file-input
                  accept="image/*"
                  placeholder="profilePic"
                  solo
                  v-model="profilePicture"
                ></v-file-input>
              </v-form>
              <v-btn block color="blue" @click="update()">
                Update
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    username: "",
    profilePicture: "",
  }),
  methods: {
    update() {
      fetch("http://localhost:8000/api/user/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
          profilePicture: this.profilePicture,
        }),
      }).then((r) =>
        r.json().then((response) => {
          console.log(response);
        })
      );
    },
  },
};
</script>
