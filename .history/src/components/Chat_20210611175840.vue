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
        ["Reason", "state", "Expens", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    };
  },
};
</script>