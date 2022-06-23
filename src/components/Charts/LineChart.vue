<script>

import VueApexCharts from 'vue3-apexcharts'

export default {
    data() {
        return {
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                title: {
                    text: 'Grafiek van kernwoorden'
                },
                xaxis: {
                    categories: ['Hiërarchisch', 'Thuiswerken', 'Vrijmibo', 'Muziek', 'Kernwoord5']
                }
            },
            components: { VueApexCharts }
        }
    }
}
</script>
<template>

    <div id="chart">
        <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
