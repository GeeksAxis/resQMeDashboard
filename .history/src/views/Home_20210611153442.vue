<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-card outlined>
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
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined>
            <v-card-text>
              <div class="google-map" ref="googleMap"></div>
              <template v-if="Boolean(this.google) && Boolean(this.map)">
                <slot :google="google" :map="map" />
              </template>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  props: {
    mapConfig: Object,
    apiKey: "AIzaSyD_amxYnSPPmZM6c61QbLU5X19B4EI6hIA",
  },

  data() {
    return {
      google: null,
      map: null
    }
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, this.mapConfig
      )
    }
  }
}
</script>

<style scoped>
.reason {
}
</style>
