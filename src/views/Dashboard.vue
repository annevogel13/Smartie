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
            <div class = "toprecommendations">
                <ol>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                </ol>
                <button>Contact</button>
            </div>


            <div class = "swipeData">
                
                <SwipeDataChart></SwipeDataChart>
            </div>
        </div>
    </div>

</template>

<style scoped>
.toprecommendations{
    grid-column: 1;
    grid-row : 1; 
    float : left; 
    
}
.swipeData {

    grid-column: 2;
    grid-row : 1; 
    padding : 30px; 
    float : right; 
    width : 60%; 
}

.dashboard {
    display : grid; 
    width: 1000px;

}

.quick {
    width: 100px;
}
</style>