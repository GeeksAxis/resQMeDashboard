<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-card outlined elevation="">
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
              <template v-slot:[`item.map`]="{ item }">
                <v-dialog
                  v-model="dialog"
                  fullscreen
                  transition="dialog-bottom-transition"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon color="#ef6c00">mdi-google-maps</v-icon>
                    </v-btn>
                  </template>
                  <v-toolbar color="white">
                    <v-toolbar-title>
                      <v-btn icon @click="dialog = false">
                        <v-icon color="#ef6c00">mdi-keyboard-backspace</v-icon>
                      </v-btn>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-title>
                      <span>{{ item.map }}</span>
                    </v-toolbar-title>
                  </v-toolbar>
                  <gmap-map
                    :center="center"
                    :zoom="20"
                    style="width:100%;  height: 750px;"
                  >
                    <gmap-marker
                      :key="index"
                      v-for="(m, index) in markers"
                      :position="m.position"
                      @click="center = m.position"
                    ></gmap-marker>
                  </gmap-map>
                </v-dialog>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined height="380">
            <v-card-text>
              <Chat />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Chat from "../components/Chat.vue";
export default {
  name: "GoogleMap",
  components: {
    Chat,
  },

  data() {
    return {
      search: "",
      dialog: false,
      center: { lat: 27.2046, lng: 77.4977 },
      markers: [],
      places: [],
      currentPlace: null,
      headers: [
        {
          text: "Reason",
          align: "start",
          sortable: false,
          value: "reason",
        },
        { text: "Lat/Lon", value: "latlon" },
        { text: "State", value: "state" },
        { text: "Date", value: "date" },
        { text: "Location", value: "map" },
      ],
      ResqMeItems: [
        {
          reason: "Accident",
          latlon: 8798998 / 32222323,
          state: "Kaduna",
          date: "2/7/2002",
          map: "map",
        },
        {
          reason: "Heart Attack",
          latlon: 8798998 / 32222323,
          state: "Katsina",
          date: "6/7/2013",
          map: "map",
        },
        {
          reason: "Bandits",
          latlon: 8798998 / 322323,
          state: "Abuja",
          date: "6/7/2015",
          map: "map",
        },
        {
          reason: "Raping",
          latlon: 8798998 / 322323,
          state: "Gombe",
          date: "6/7/2020",
          map: "map",
        },
      ],
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
