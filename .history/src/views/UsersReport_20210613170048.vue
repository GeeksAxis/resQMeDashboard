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

                      <div style="height: 90px; width: 100%">
                        <div style="height: 200px overflow: auto;">
                          <p>
                            First marker is placed at {{ withPopup.lat }},
                            {{ withPopup.lng }}
                          </p>
                          <p>
                            Center is at {{ currentCenter }} and the zoom is:
                            {{ currentZoom }}
                          </p>
                          <button @click="showLongText">
                            Toggle long popup
                          </button>
                          <button @click="showMap = !showMap">
                            Toggle map
                          </button>
                        </div>
                        <l-map
                          v-if="showMap"
                          :zoom="zoom"
                          :center="center"
                          :options="mapOptions"
                          style="height: 80%"
                          @update:center="centerUpdate"
                          @update:zoom="zoomUpdate"
                        >
                          <l-tile-layer :url="url" :attribution="attribution" />
                          <l-marker :lat-lng="withPopup">
                            <l-popup>
                              <div @click="innerClick">
                                I am a popup
                                <p v-show="showParagraph">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Quisque sed pretium nisl, ut
                                  sagittis sapien. Sed vel sollicitudin nisi.
                                  Donec finibus semper metus id malesuada.
                                </p>
                              </div>
                            </l-popup>
                          </l-marker>
                          <l-marker :lat-lng="withTooltip">
                            <l-tooltip
                              :options="{ permanent: true, interactive: true }"
                            >
                              <div @click="innerClick">
                                I am a tooltip
                                <p v-show="showParagraph">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Quisque sed pretium nisl, ut
                                  sagittis sapien. Sed vel sollicitudin nisi.
                                  Donec finibus semper metus id malesuada.
                                </p>
                              </div>
                            </l-tooltip>
                          </l-marker>
                        </l-map>
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
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import ReportService from "../Services/reportService";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },

  data() {
    return {
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
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  mounted() {
    ReportService.getAll().on("value", this.onDataChange);
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
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
