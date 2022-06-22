<script>

import VueApexCharts from 'vue3-apexcharts'

export default {
    data() {
        return {
            series: [14, 23, 21, 17],
            chartOptions: {
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
                            width: 150,
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
