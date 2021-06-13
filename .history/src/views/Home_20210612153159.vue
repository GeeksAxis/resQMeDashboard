<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
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
              <template v-slot:[`item.latlon`]="{ item }">
                <div>
                  <span>{{ item.lat }}/</span>
                  <span>{{ item.lng }}</span>
                </div>
              </template>
              <template v-slot:[`item.map`]="{ item }">
                <v-dialog
                  v-model="dialog"
                  hide-overlay
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
                  </gmap-map>
                </v-dialog>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card height="380" transparent="20">
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
import EmergencyService from "../Services/emergencyServices";
export default {
  name: "GoogleMap",
  components: {
    Chat,
  },

  data() {
    return {
      currentEmergency: null,
      currentIndex: -1,

      search: "",
      dialog: false,
      center: { lat: 27.2046, lng: 77.4977 },

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
      ResqMeItems: [],
    };
  },
  mounted() {
    EmergencyService.getAll().on("value", this.onDataChange);
     this.getCurrentPosition(
    this.geoId = Geolocation.watchPosition({enableHighAccuracy: true}, (position, err) => {
      this.position = position;
      console.log(err,)
    }));
    this.Geolocation

  },
  methods: {
    getCurrentPosition() {
    Geolocation.getCurrentPosition().then(position => {
      console.log('Current', position)
      this.position = position
      this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
    })
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
