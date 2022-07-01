<script>
export default {
    data() {
        return {
            series: [{
                data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
            }],
            chartOptions: {
                chart: {
                    type: 'line',
                    //height: 350
                },
                stroke: {
                    curve: 'stepline',
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'Statitieken ',
                    align: 'center'
                },
                markers: {
                    hover: {
                        sizeOffset: 4
                    }
                }
            },
        }
    }
}

</script>
<template>
    <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
