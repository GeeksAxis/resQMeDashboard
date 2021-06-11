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
                    <h5>Lat/Lan/state</h5>
                  </v-list-item-title>
                 <v-list-item-action>
                   <h5>Date</h5>
                 </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="">

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
