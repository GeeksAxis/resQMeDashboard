<template>
  <div>
    <v-card class="leaflet-map-container">
      <div :id="mapId" style=" height:100vh "></div>
    </v-card>
  </div>
</template>

<script>
import L from "leaflet";
import HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap'

import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
export default {
  props: {
    data: {
      type: Array,
    },
    latitude: {
      type: [String, Number],
    },
    longitude: {
      type: [String, Number],
    },
    popUpData: {
      type: String,
      default: null,
      required: false,
    },
    popUpIsJson: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    mapHeight() {
      this.resizeMap();
      return this.$vuetify.breakpoint.height - 40;
    },
    mapId() {
      return `map-card-${this._uid}`;
    },
  },
  data() {
    return {
      map: null,
      mapAttribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      mapTileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      el: [],
    };
  },
  mounted() {
    this.buildMap();
  },
  methods: {
    resizeMap() {
      if (this.map !== null) {
        setTimeout(
          (vm) => {
            vm.map.invalidateSize();
          },
          200,
          this
        );
      }
    },
    buildMap() {

      let lat = 9.081999;
      let lon = 8.675277000000051;

      var testData = {
        max: 20,
        data: [{ lat: 10.501518, lng: 7.44084, count: 1 },
        { lat: 10.619551, lng: 7.231577, count: 1 },
        { lat: 11.280164, lng: 7.417857, count: 1 },
        { lat: 10.632139, lng: 7.470593, count: 1 },
        { lat: 10.694601, lng: 7.325346, count: 1 },
        { lat: 10.52858, lng: 7.386575, count: 1 },
        { lat: 10.142671, lng: 7.788877, count: 1 },
        { lat: 10.634572, lng: 7.352669, count: 1 },
        { lat: 10.5713, lng: 6.878103, count: 1 },
        { lat: 10.521587, lng: 7.023215, count: 1 },
        { lat: 11.034571, lng: 7.675574, count: 1 },
        



        ]



      }


      this.map = L.map(this.mapId, {
        zoomControl: false,
      }).setView([lat, lon], 7);
      this.map.scrollWheelZoom.disable();
      var cfg = {
        'radius': 0.15,
        'maxOpacity': 0.8,
        'scaleRadius': true,
        'useLocalExtrema': true,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'count'
      }
      this.heatmapLayer = new HeatmapOverlay(cfg);
      this.heatmapLayer.addTo(this.map);
      this.heatmapLayer.setData(testData);
      let baseLayer = L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Haut-Gis-Org © OpenStreetMap'
      }
      )
      L.control
        .zoom({
          position: "topleft",
        })
        .addTo(this.map);
      let baseLayers = {
        'heatmapLayer': this.heatmapLayer,
        'OpenStreetMap': baseLayer
      }

      L.control.layers(baseLayers).addTo(this.map)
      L.tileLayer(this.mapTileLayer, {
        attribution: this.mapAttribution,
        
      }).addTo(this.map);
      let marker;

      for (let i = 0; i < this.data.length; i++) {

        marker = L.marker([this.data[i].lat, this.data[i].lng], {
          title: `lat: ${this.data[i].lat} | lon: ${this.data[i].lng}`,
          riseOnHover: true,
        }).bindPopup('T').addTo(this.map);
      }

      if (this.popUpData !== null) {
        let finalPopUpData;
        if (this.popUpIsJson) {
          let pData = JSON.parse(this.popUpData);
          finalPopUpData = `<h3>Host Information:</h3><v-card><pre id='json-pre'>${JSON.stringify(
            pData,
            undefined,
            2
          )}</pre></v-card>`;
        } else {
          finalPopUpData = this.popUpData;
        }
        marker
          .bindPopup(finalPopUpData, {
            maxWidth: 200,
            maxHeight: 200,
            keepInView: true,
          })
          .addTo(this.map);
      } else {
        marker.addTo(this.map);
      }
      this.map.invalidateSize();
    },
  },
};
</script>

<style scoped>
.leaflet-map-container {
  overflow-x: auto;
}
</style>