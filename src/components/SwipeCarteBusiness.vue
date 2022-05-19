<script>

import PieChart from "./PieChart.vue"
export default {
    components: { PieChart },
    data() {
        return {
            name: 'Test_naam',
            
    }
    }
}


</script>
<template>
    <div class="swipeCartBusiness">
        <h3> {{ name }} </h3>
        <div>
            <PieChart></PieChart>
        </div>
    </div>
</template>


<style>
.swipeCartBusiness {
    background-color: aliceblue;

}
</style>