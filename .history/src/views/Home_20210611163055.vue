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
            ></v-data-table>
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
   data () {
      return {
        search: '',
        headers: [
          {
            text: 'Reason',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Lat/Lon', value: 'calories' },
          { text: 'State', value: 'fat' },
          { text: 'Date', value: 'carbs' },
          { text: 'Map', value: 'protein' },
          
        ],
        ResqMeItems: [
          {
            name: '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quia? Eum, illum molestiae ex sapiente iusto ea natus ab blanditiis quaerat laboriosam eaque dolores impedit error vitae vel recusandae assumenda.',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
};
</script>
