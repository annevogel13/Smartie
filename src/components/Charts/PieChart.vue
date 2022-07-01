<script>

import VueApexCharts from 'vue3-apexcharts'

export default {
    data() {
        return {
            series: [
                this.$store.state.user.data_to_be_displayed.questionnaire.d60,
                this.$store.state.user.data_to_be_displayed.questionnaire.d61,
                this.$store.state.user.data_to_be_displayed.questionnaire.d62,

            ],
            chartOptions: {
                labels: ["Junioren", "Medioren", "Senioren"],
                chart: {
                    type: 'polarArea',
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                title: {
                    text: 'Grafiek op kernwoorden'
                },
                responsive: [{
                    breakpoint: 300,
                    options: {
                        chart: {
                            width: 100,
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            components: { VueApexCharts }
        }
    }
}
</script>
<template>
    <div class="pieChart">
        <apexchart type="polarArea" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
