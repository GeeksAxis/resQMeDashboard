<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="">DashBoard</h2>
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
              no-results-text="something went wrong"
              :headers="headers"
              :items="ResqMeItems"
              :search="search"
            >
              <template v-slot:[`item.date`]="{ item }">
                <span>{{
                  item.date
                    | moment("ddd, MMMM  YYYY, h:mm:ss a", ).guess();
                    
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
                      <v-btn color="#ef6c00" text @click="dialog = false">
                        close
                      </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>

                    <v-card-text class="pa-0">
                      <div>
                        <leaflet-map
                          :latitude="item.lat"
                          :longitude="item.lng"
                        ></leaflet-map>
                      </div>
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
import LeafletMap from "../components/leaflet.vue";
import EmergencyService from "../Services/emergencyServices";
export default {
  name: "GoogleMap",
  components: {
    LeafletMap,
  },

  data() {
    return {
      currentEmergency: null,
      currentIndex: -1,

      search: "",
      dialog: false,

      currentPlace: null,
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
    EmergencyService.getAll().on("value", this.onDataChange);
  },
  methods: {
    onDataChange(items) {
      let _emergencies = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _emergencies.push({
          key: key,
          reason: data.reason,
          state: data.state,
          lat: data.lat,
          lng: data.lng,
          date: data.date_time,
        });
      });

      this.ResqMeItems = _emergencies;
    },

    refreshList() {
      this.currentEmergency = null;
      this.currentIndex = -1;
    },

    setActiveEmergency(_emergencies, index) {
      this.currentEmergency = this.ResqMeItems;
      this.currentIndex = index;
    },
  },

  beforeDestroy() {
    EmergencyService.getAll().off("value", this.onDataChange);
  },
};
</script>
