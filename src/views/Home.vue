<template>
  <v-app class="bg">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center">
            <div class="mr-4">
              View Map
            </div>
            <v-switch v-model="switch1" inset></v-switch>
          </div>

        </v-col>
        <v-col cols="12" v-if="switch1 == false">

          <v-col cols="12" md="12">
            <v-card rounded="lg" color="background">
              <v-card-title>

              </v-card-title>
              <v-data-table disable-sort no-results-text="something went wrong" :headers="headers" :items="data"
                :search="search" color="background" class="data_table">
                <template v-slot:[`item.date`]="{ item }">
                  <span>{{
                      item.date
                      | moment("ddd, MMMM YYYY, h:mm:ss a",)
                  
                  }}</span>
                </template>
                <template v-slot:[`item.type`]="{ item }">
                  <div v-if="item.type === 'Fire'">
                    <v-chip color="#DC3545">{{ item.type }}</v-chip>
                  </div>
                  <div v-else-if="item.type === 'Accident'">
                    <v-chip color="#FF0000">{{ item.type }}</v-chip>
                  </div>
                  <div v-else-if="item.type === 'Robery'">
                    <v-chip color="#5E81F4">{{ item.type }}</v-chip>
                  </div>

                </template>
                <template v-slot:[`item.latlon`]="{ item }">
                  <div>
                    <span>{{ item.latlon }} </span>
                    <!-- <span>{{ item.lng }} </span> -->
                  </div>
                </template>
                <template v-slot:[`item.map`]="{ item }">
                  <v-dialog v-model="dialog" hide-overlay fullscreen transition="dialog-top-transition">
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
                          <leaflet-map :latitude="item.lat" :longitude="item.lng"></leaflet-map>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-col>
        <v-col v-else>
          <v-card>
            <leaflet-map :latitude="10.609319" :longitude="7.429504"></leaflet-map>
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
      switch1: false,
      search: "",
      dialog: false,
      coordinates: null,
      data: [
        {
          reason: 'Arlene McCoy', date: 'September 9, 2013', latlon: 111144333, type: 'Fire'
        },
        {
          reason: 'Arlene McCo', date: 'September 9, 2013', latlon: 11113333, type: 'Robery'
        },
        {
          reason: 'Arlene Mcoy', date: 'September 9, 2013', latlon: 11143333, type: 'Accident'
        }
      ],

      currentPlace: null,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "reason",
        },
        { text: "Date", value: "date", sortable: false, },
        { text: "Lat/Lng", value: "latlon", sortable: false, },
        { text: "Type", value: "type", sortable: false, },

        // { text: "Location", value: "map", sortable: false, },
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
  created() {



    this.$getLocation()
      .then(coordinates => {
        this.coordinates
        console.log(coordinates.lat);
      });
  },

  beforeDestroy() {
    EmergencyService.getAll().off("value", this.onDataChange);
  },
};
</script>

<style scoped>
.bg {
  background: #222831
}

.data_table {
  background: #2C3440 !important;
}
</style>
