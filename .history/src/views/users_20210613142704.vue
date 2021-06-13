<template>
  <v-app>
    <v-container>
      <v-row>
       <v-col cols="12" md="12">
          <v-card>
            <v-card-title>
              ResqMe.
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                color="#ef6c00"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="ResqMeItems"
              :search="search"
            >
              <template v-slot:[`item.date`]="{ item }">
                <span>{{
                  item.date | moment("dddd, MMMM Do YYYY, h:mm:ss a")
                }}</span>
              </template>
              <template v-slot:[`item.latlon`]="{ item }">
                <div>
                  <span>{{ item.lat }} , </span>
                  <span>{{ item.lng }} </span>
                </div>
              </template>
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
  }
};
</script>
