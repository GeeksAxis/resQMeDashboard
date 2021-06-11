<template>
  <div class="custom__chat">
    <v-card-text>
      <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
    </v-card-text>
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";
export default {
  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Reason", "state", "Location", ],
        ["2020", 1000, 400, 200],
        ["2021", 1000, 400, 200],
        ["2022", 1000, 400, 200],
        ["2023", 1000, 400, 200]
        
      ],
      chartOptions: {
        chart: {
          title: "ResqMe",
          subtitle: "Reason, s, and Profit: 2014-2017",
        },
      },
    };
  },
};
</script>