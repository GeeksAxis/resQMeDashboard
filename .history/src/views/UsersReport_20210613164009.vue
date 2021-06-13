<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>DashBoard</h2>
          <v-divider></v-divider>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="12">
          <v-card rounded="lg">
            <v-card-title>
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
              disable-sort
              loading-text="loading data"
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
              <template v-slot:[`item.map`]="{ item }">
                <v-dialog
                  v-model="dialog"
                  hide-overlay
                  fullscreen
                  transition="dialog-top-transition"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon color="#ef6c00">mdi-google-maps</v-icon>
                    </v-btn>
                  </template>
                  <v-card class="pa-0">
                    <v-card-actions class="pa-0">
                      <v-spacer></v-spacer>

                      <v-btn color="#ef6c00" text @click="dialog = false">
                        close
                      </v-btn>
                    </v-card-actions>

                    <v-card-text class="pa-0">
                      <span>{{ item.map }}</span>

                      <div id="mapContainer"></div>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ReportService from "../Services/reportService";
export default {
  components: {},

  data() {
    return {
      center: [37, 7749, -122, 4194],
      errorStr: null,
      currentEmergency: null,
      currentIndex: -1,
      dialog: false,
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
        { text: "Location", value: "map" },
      ],
      ResqMeItems: [],
    };
  },
  mounted() {
    ReportService.getAll().on("value", this.onDataChange);
    this.setupLeafletMap();
  },
  methods: {
    setupLeafletMap: function() {
      const mapDiv = L.map("mapContainer").setView(this.center, 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:
            "",
        }
      ).addTo(mapDiv);
    },

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
<style scoped>
#mapContainer {
  width: 80vw;
  height: 100vh;
}
</style>
