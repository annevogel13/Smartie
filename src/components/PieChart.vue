<script>

import VueApexCharts from 'vue3-apexcharts'

export default {
    data() {
        return {
            series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
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
                responsive: [{
                    breakpoint: 300,
                    options: {
                        chart: {
                            width: 100
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