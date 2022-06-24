<script>

import VueApexCharts from 'vue3-apexcharts'



export default {
    data() {
        return {
            series: [{

                data: [
                    this.$store.state.user.data_to_be_displayed.questionnaire.k1,
                    this.$store.state.user.data_to_be_displayed.questionnaire.k2,
                    this.$store.state.user.data_to_be_displayed.questionnaire.k3,
                    this.$store.state.user.data_to_be_displayed.questionnaire.k4,
                    this.$store.state.user.data_to_be_displayed.questionnaire.k5,

                ],
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                labels : ['Hiërarchisch', 'Thuiswerken', 'Vrijmibo', 'Muziek', 'Kernwoord5'], 
                title: {
                    text: 'Grafiek van kernwoorden'
                },
                xaxis: {
                    categories: ['Hiërarchisch', 'Thuiswerken', 'Vrijmibo', 'Muziek', 'Kernwoord5']
                }
            },
            components: { VueApexCharts },


        }
    }
}
</script>
<template>

    <div id="chart">
        <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
