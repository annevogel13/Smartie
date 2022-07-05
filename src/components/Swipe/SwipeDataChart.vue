<script>
export default {
    data() {
        return {
            series: [{
                name: "likes",
                data: [this.$store.state.user.swipeChoice.likes.length ],
            },
            {
                name: "dislikes",
                data: [this.$store.state.user.swipeChoice.dislikes.length]
            }
            ],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350
                },

                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
                xaxis: {
                    categories: ['Aantal (dis)likes']
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,

                },
                fill: {
                    opacity: 1
                },
            },
        }
    }
}

</script>
<template>
    <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
