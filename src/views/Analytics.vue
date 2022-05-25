<template>
    <v-app class="bg">
        <v-container>
            <v-row>
                <v-col cols="12" md="7">
                    <v-card color="background" flat min-height="180">
                        <v-card-text>
                            <div class="d-flex mb-4">
                                <div class="primary--text">
                                    Lorem ipsom
                                </div>
                                <v-spacer></v-spacer>
                                <div>
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </div>

                            </div>
                            <v-row>
                                <v-col cols="4" v-for="item in time " :key="item.time">
                                    <v-avatar size="110" class="border  pa-4">
                                        <div>
                                            <div class="primary--text font-weight-bold text-body-1">
                                                {{ item.time }}
                                            </div>

                                            <div>
                                                seconds
                                            </div>
                                        </div>
                                    </v-avatar>

                                </v-col>
                            </v-row>

                        </v-card-text>
                    </v-card>

                </v-col>
                <v-col cols="12" md="5">
                    <v-card color="background" flat min-height="180">
                        <v-card-text>
                            <div class="d-flex mb-4">
                                <div class="primary--text">
                                    Lorem ipsom
                                </div>
                                <v-spacer></v-spacer>
                                <div>
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </div>

                            </div>
                            <div class="d-flex align-center mt-8">
                                <div>
                                    <span>Time</span>
                                    <div class="d-flex align-center mt-4">
                                        <v-icon large>mdi-clock</v-icon>
                                        <div class="ml-2 text-h6">
                                            {{ new Date() | moment(" h:mm:ss a",)}}
                                        </div>

                                    </div>
                                </div>
                                <v-spacer></v-spacer>
                                <div>
                                    <span>Date</span>
                                    <div class="d-flex align-center mt-4">
                                        <v-icon large left>mdi-calendar</v-icon>
                                        <div class=" text-h6">
                                         {{ new Date() | moment("ddd, MMMM YYYY")}}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </v-card-text>
                    </v-card>

                </v-col>
                <v-col cols="12" md="7">
                    <v-card color="background" flat>
                        <v-card-text>
                            <div class="d-flex mb-4">
                                <div class="primary--text">
                                    Lorem ipsom
                                </div>
                                <v-spacer></v-spacer>
                                <div>
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </div>

                            </div>

                            <div class="sheet pa-1 mb-2" v-for="item in data" :key="item.num">
                                <v-card-text>
                                    <div class="primary--text font-weight-bold">
                                        lorem ipsum


                                    </div>
                                </v-card-text>

                            </div>

                        </v-card-text>
                    </v-card>

                </v-col>
                <v-col cols="12" md="5">
                    <v-row>
                        <v-col cols="12">
                            <v-card flat color="background">
                                <v-card-text>
                                    <div class="primary--text font-weight-bold">
                                        Lorem ipsum
                                    </div>
                                    <div class="mt-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit <br> Fuga beatae earum
                                        reprehenderit debiti
                                    </div>
                                     <div class="mt-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit <br> Fuga beatae earum
                                        reprehenderit debiti
                                    </div>
                                     <div class="mt-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit <br> Fuga beatae earum
                                        reprehenderit debiti
                                    </div>
                                    
                                </v-card-text>
                            </v-card>

                        </v-col>
                        

                        <v-col cols="12">
                            <v-card flat color="background">
                                <v-card-text>
                                    <div class="primary--text font-weight-bold text-center">
                                        Lorem ipsum
                                    </div>
                                    <v-card dark>
                                        <GChart type="ColumnChart"
                                         :data="chartData" :options="chartOptions"
                                         class="my_chat"
                                         
                                         />
                                    </v-card>

                                </v-card-text>
                            </v-card>

                        </v-col>
                    </v-row>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    components: {
        GChart
    },
    data: () => ({
         chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2019', 1000, 400, 200],
        ['2020', 1170, 460, 250],
        ['2021', 660, 1120, 300],
        ['2022', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
          colors: ['#29A19C', '#64B5F6', '#ECEFF1', ],

      },
        time: [
            {
                time: '1002',
            },
            {
                time: '1004',
            },
            {
                time: '1003',
            },
        ],
        data: [
            {
                numm: 1
            },
            {
                numm: 2
            },
            {
                numm: 3
            },
            {
                numm: 4
            },
            {
                numm: 5
            },
            {
                numm: 6
            }
        ]
    })

}
</script>

<style scoped>
.bg {
    background: #222831
}

.border {
    border: solid 1px #29A19C;
}

.sheet {
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgba(249, 249, 249, 0.2);
}
.my_chat {
    background: #29A19C !important;
}
</style>