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

              <v-list-item dense>
                <v-list-item-title>
                  <p class="reason">
                    Lorem ipsum dolor sit 
                    
                  </p>
                </v-list-item-title>
                <v-list-item-title>
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
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined>
            <v-card-text> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data: () => ({}),
};
</script>

<style scoped>
.reason {


}
</style>
