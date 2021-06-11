<template>
     <div class="custom__chat">
              <v-card-text>
                <GChart
                  type="ColumnChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </v-card-text>
            </div>
</template>