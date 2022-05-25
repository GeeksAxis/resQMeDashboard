<template>
  <div>
    <v-card class="leaflet-map-container">
      <div :id="mapId" :style="{ height: mapHeight + 'px', zIndex: 0 }"></div>
    </v-card>
  </div>
</template>

<script>
import L from "leaflet";
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
      required: true,
    },
    longitude: {
      type: [String, Number],
      required: true,
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
    
       let lat = 10.5271238;
       let lon = 7.4485181;
       
      
      this.map = L.map(this.mapId, {
        zoomControl: false,
      }).setView([lat, lon], 15);
      this.map.scrollWheelZoom.disable();
      L.control
        .zoom({
          position: "topleft",
        })
        .addTo(this.map);
      L.tileLayer(this.mapTileLayer, {
        attribution: this.mapAttribution,
        maxZoom: 18,
        minZoom: 10,
      }).addTo(this.map);
      let marker;
      
      for(let i=0; i<this.data.length;i++){
        
       marker= L.marker([this.data[i].lat, this.data[i].lng], {
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