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
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ReportService from "../Services/reportService";
export default {
  name: "GoogleMap",
  components: {},

  data() {
    return {
      currentEmergency: null,
      currentIndex: -1,

      search: "",

      headers: [
        {
          text: "Reason",
          align: "start",
          sortable: false,
          value: "reason",
        },
        { text: "Lat/Lng", value: "latlon" },
        { text: "State", value: "state" },
        { text: "Date", value: "date" },
      ],
      ResqMeItems: [],
    };
  },
  mounted() {
    ReportService.getAll().on("value", this.onDataChange);
  },
  methods: {
    onDataChange(items) {
      let _reports = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _reports.push({
          key: key,
          reason: data.reason,
          state: data.state,
          lat: data.lat,
          lng: data.lng,
          date: data.date_time,
        });
      });

      this.ResqMeItems = _reports;
    },

    refreshList() {
      this.currentEmergency = null;
      this.currentIndex = -1;
    },

    setActiveEmergency(_reports, index) {
      this.currentEmergency = this.ResqMeItems;
      this.currentIndex = index;
    },
  },

  beforeDestroy() {
    ReportService.getAll().off("value", this.onDataChange);
  },
};
</script>
