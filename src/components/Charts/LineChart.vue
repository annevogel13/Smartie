<script>

import VueApexCharts from 'vue3-apexcharts'

export default {
    data() {
        return {
            series: [{
                data: [
                    // haalt de data vanuit de vuex state 
                    this.$store.state.user.data_to_be_displayed.questionnaire.k1 + 1, // hierarchisch 
                    this.$store.state.user.data_to_be_displayed.questionnaire.k2 + 1, // thuiswerken 
                    this.$store.state.user.data_to_be_displayed.questionnaire.k4 + 1, // vrijmibo 
                    this.$store.state.user.data_to_be_displayed.questionnaire.k5 + 1, // muziek 
                    this.$store.state.user.data_to_be_displayed.questionnaire.s1 + 1, // intercollegiaal 
                ],
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'radar', // geeft het type apex chart aan 
                },
                labels: ['Flexibele werktijden', 'Meedenken', 'Geek', 'Intercollegiaal', "Thuiswerken"],
                title: {
                    text: 'Grafiek van kernwoorden'
                },
                xaxis: {
                    categories: ['Flexibele werktijden', 'Meedenken', 'Geek', 'Intercollegiaal', "Thuiswerken"]
                },
                yaxis : {
                    show : false ,  // dit disables the labels on the yaxis 
                    max : 101,  // max is op 101 omdat de maximale score 100 is. En door hem op 101 is de visualisatie het beste . 
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
