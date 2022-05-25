<template>
  <v-app class="bg">
    <v-container>
      <v-row>

        <v-col cols="12" >

          <v-col cols="12" md="12">
            <v-card rounded="lg" color="background">
              <v-card-title>

              </v-card-title>
              <v-data-table disable-sort no-results-text="something went wrong" :headers="headers" :items="ResqMeItems"
                color="background" class="data_table">

               

              </v-data-table>
            </v-card>
          </v-col>
        </v-col>
        
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
      
      headers: [

        { text: "Title", value: "date", sortable: false, align: "start", },
        { text: "Report", value: "latlon", sortable: false, },
        
      ],
    };
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
