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
              <v-data-table disable-sort no-results-text="something went wrong" :headers="headers" :items="ResqMeItems"
                @click:row="handleClick" :search="search" color="background" class="data_table">

                <template v-slot:top>
                  <v-dialog v-model="dialog" hide-overlay fullscreen>

                    <v-card class="pa-0" color="white">
                      <v-card-actions class="pa-0">
                        <v-spacer></v-spacer>

                        <v-btn color="red"  icon @click="close()">
                          <v-icon large>mdi-close</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-card>
                        <leaflet-map :data="editedItem"></leaflet-map>
                      </v-card>
                    </v-card>
                  </v-dialog>
                </template>
                <template v-slot:[`item.date`]="{ item }">
                  <span>{{
                      item.date
                      | moment("ddd, MMMM YYYY, h:mm:ss a",)
                  
                  }}</span>
                </template>
                <template v-slot:[`item.reason`]="{ item }">
                  <div v-if="item.reason === 'Fire Accident'">
                    <v-chip color="#DC3545">{{ item.reason }}</v-chip>
                  </div>
                  <div v-else-if="item.reason === 'Road Accident'">
                    <v-chip color="#FF0000">{{ item.reason }}</v-chip>
                  </div>
                  <div v-else-if="item.reason === 'Bandits'">
                    <v-chip color="#E57373">{{ item.reason }}</v-chip>
                  </div>

                  <div v-else-if="item.reason === 'House Robbery'">
                    <v-chip color="#5E81F4">{{ item.reason }}</v-chip>
                  </div>
                  <div v-else>
                    <v-chip color="#D81B60">{{ item.reason }}</v-chip>
                  </div>

                </template>
                <template v-slot:[`item.latlon`]="{ item }">
                  <div>
                    <span>{{ item.lat }} </span>
                    <span>{{ item.lng }} </span>
                  </div>
                </template>
                <template v-slot:[`item.map`]="{}">
                  <v-btn icon @click="myitem(item)">
                    <v-icon color="primary">mdi-google-maps</v-icon>
                  </v-btn>
                </template>

              </v-data-table>
            </v-card>
          </v-col>
        </v-col>
        <v-col v-else>
          <v-card>
            <leaflet-map :data="cord"  >
            </leaflet-map>
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
      coordinate: [10.609319, 7.429504],
      dialog: false,
      cord: [],
      coordinates: null,
      editedIndex: -1,
      editedItem: {},
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

        { text: "Date", value: "date", sortable: false, align: "start", },
        { text: "Lat/Lng", value: "latlon", sortable: false, },
        { text: "Type", value: "reason", sortable: false, },

        { text: "Location", value: "map", sortable: false, },
      ],
      ResqMeItems: [],
    };
  },
  mounted() {
    EmergencyService.getAll().on("value", this.onDataChange);
  },
  watch: {
    dialog(val) {
      val || this.close();
    },

  },
  methods: {
    onDataChange(items) {
      let _emergencies = [];
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        if(data.reason === 'House Robbery') {
         _emergencies.push({
          key: key,
          reason: data.reason,
          state: data.state,
          lat: data.lat,
          lng: data.lng,
          date: data.date,
        });
        }
        const dt = {
          lat: data.lat,
          lng: data.lng,
          count: 1,
        };
        this.cord.push(dt)
      });

      this.ResqMeItems = _emergencies;
    },
    myitem(item) {
      this.editedIndex = this.ResqMeItems.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      const dt = {
          lat: item.lat,
          lng: item.lng,
          count: 1,
        };
        this.editedItem = dt;
        console.log(">>>", this.editedItem)
    },
    refreshList() {
      this.currentEmergency = null;
      this.currentIndex = -1;
    },
    handleClick(row) {
      console.log(row)

    },

    setActiveEmergency(_emergencies, index) {
      this.currentEmergency = this.ResqMeItems;
      this.currentIndex = index;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({});
        this.editedIndex = -1;
      });
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
