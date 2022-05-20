<script>

import SwipeDataChart from "../components/SwipeDataChart.vue"
export default {
    data() {
        return {
            role: "bedrijf",
        }
    },
    components : { SwipeDataChart}
}
</script>

<template>
    <div class="dashboard">

        <h3> Dashboard </h3>
        <p>(gepersonaliseerd --> twee verschillende versies)</p>

        <select class="quick" v-model="role">
            <option value="bedrijf">Bedrijf</option>
            <option value="cursist">Cursist</option>
        </select>

        <div v-if = "role == 'cursist'">
            <h3> Pagina voor cursisten </h3>
        </div>

        <div v-if = "role == 'bedrijf'">
            <h3> Pagina voor bedrijven </h3>
            <div class = "swipeData">

                <SwipeDataChart></SwipeDataChart>
            </div>
        </div>
    </div>

</template>

<style>

.swipeData {
    padding : 30px; 
    float : right; 
    width : 50%; 
}

.dashboard {
    width: 1000px;
}

.quick {
    width: 100px;
}
</style>