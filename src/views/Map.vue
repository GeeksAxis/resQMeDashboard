<template>
    <div>
         <leaflet-map :latitude="item.lat" :longitude="item.lng"></leaflet-map>
    </div>
</template>

<script>
import LeafletMap from "../components/leaflet.vue";

export default {
    data: ()=>({
        lat: null,
        lng: null,

    }),
    methods:{

    },
    components: {
        LeafletMap
    }
}
</script>