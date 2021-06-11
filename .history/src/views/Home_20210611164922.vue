<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <!-- <v-card outlined>
            <v-card-text class="pa-2">
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <h5>Reason</h5>
                  </v-list-item-title>
                  <v-list-item-title>
                    <h5>State/Lat/Lon/</h5>
                  </v-list-item-title>
                  <v-list-item-title>
                    <h5>Date</h5>
                  </v-list-item-title>
                </v-list-item>
              </v-list>

              <v-list-item class="mx-2">
                <v-list-item-title>
                  <p class="text-wrap">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam minus consectetur eos iusto, sint, illum, pariatur
                    quis excepturi atque ullam libero eum repudiandae cupiditate
                    unde eaque corporis iure? Quibusdam, tenetur!
                  </p>
                </v-list-item-title>
                <v-list-item-title class="mx-2">
                  <v-list-item-content>
                    <v-list-item-title>
                      <p>Kaduna State</p>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <p>lattitude</p>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <p>longtitude</p>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item-title>
                <v-list-item-title>
                  <p>27/9/2002</p>
                </v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
            </v-card-text>
          </v-card> -->
          <v-card>
            <v-card-title>
              ResqMe.
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="ResqMeItems"
              :search="search"
            >
              <template v-slot:item="{ item }">
                <span>test1</span>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined>
            <v-card-text>
              <!-- <gmap-map
                :center="center"
                :zoom="20"
                style="width:100%;  height: 220px;"
              >
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  @click="center = m.position"
                ></gmap-marker>
              </gmap-map> -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  // name: "GoogleMap",
  // data() {
  //   return {
  //     // default to Montreal to keep it simple
  //     // change this to whatever makes sense
  //     center: { lat: 27.2046, lng: 77.4977 },
  //     markers: [],
  //     places: [],
  //     currentPlace: null,
  //   };
  // },
  // mounted() {
  //   this.geolocate();
  // },
  // methods: {
  //   // receives a place object via the autocomplete component
  //   setPlace(place) {
  //     this.currentPlace = place;
  //   },
  //   addMarker() {
  //     if (this.currentPlace) {
  //       const marker = {
  //         lat: this.currentPlace.geometry.location.lat(),
  //         lng: this.currentPlace.geometry.location.lng(),
  //       };
  //       this.markers.push({ position: marker });
  //       this.places.push(this.currentPlace);
  //       this.center = marker;
  //       this.currentPlace = null;
  //     }
  //   },
  //   geolocate: function() {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.center = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };
  //     });
  //   },
  data() {
    return {
      search: "",
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
        { text: "Map", value: "map" },
      ],
      ResqMeItems: [
        {
          reason:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quia? Eum, illum molestiae ex sapiente iusto ea natus ab blanditiis quaerat laboriosam eaque dolores impedit error vitae vel recusandae assumenda.",
          latlon: 8798998 / 32222323,
          state: "Kaduna",
          date: "2/7/2002",
          map: "map",
        },
        {
          reason:
            " quaerat laboriosam eaque dolores impedit error vitae vel recusandae assumenda.",
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
};
</script>
