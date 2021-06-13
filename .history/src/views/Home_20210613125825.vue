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
                  <v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn color="#ef6c00" text @click="dialog = false">
                        close
                      </v-btn>
                    </v-card-actions>

                    <v-card-text>
                      <span>{{ item.map }}</span>
                      <GmapMap
                        :center="center"
                        :zoom="18"
                        map-style-id="roadmap"
                        :options="mapOptions"
                        style="width: 90px; height: 70px"
                        ref="mapRef"
                        @click="handleMapClick"
                      >
                        <GmapMarker
                          :position="marker.position"
                          :clickable="true"
                          :draggable="true"
                          @drag="handleMarkerDrag"
                          @click="panToMarker"
                        />
                      </GmapMap>
                      <button @click="geolocate">Detect Location</button>

                      <p>Selected Position: {{ marker.position }}</p>
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
import EmergencyService from "../Services/emergencyServices";
export default {
  name: "GoogleMap",
  components: {},

  data() {
    return {
      marker: { position: { lat: 77.4977, lng: 77.4977 } },
      center: { lat: 27.2046, lng: 77.4977 },

      mapOptions: {
        disableDefaultUI: true,
      },

      errorStr: null,
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
    this.geolocate();
  },
  methods: {
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.marker.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        this.panToMarker();
      });
    },

    //sets the position of marker when dragged
    handleMarkerDrag(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },

    //Moves the map view port to marker
    panToMarker() {
      this.$refs.mapRef.panTo(this.marker.position);
      this.$refs.mapRef.setZoom(18);
    },

    //Moves the marker to click position on the map
    handleMapClick(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      console.log(e);
    },

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
