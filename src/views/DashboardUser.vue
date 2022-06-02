<script>

import { compileScript } from "@vue/compiler-sfc"
import SwipeDataChart from "../components/Swipe/SwipeDataChart.vue"

export default {
    components : { SwipeDataChart },
}
</script>

<template>
<div class="dashboard">

        <h3> Dashboard </h3>
        {{this.$store.state.user.hasProfile}}
        <div v-if="!this.$store.state.user.hasProfile" class="noProfile">
            <p> Je profiel is niet compleet </p>
            <button><router-link to = "/ProfileUser" >Klilk hier om naar de profiel pagina te gaan</router-link></button>
        </div>

        <div v-if = "this.$store.state.user.role == 'cursist'">
            <h3> Pagina voor cursisten </h3>
        </div>

        <div v-if = "this.$store.state.user.role == 'bedrijf'">
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
    float : right; 
    width : 60%; 
}

.dashboard {
    display : grid;     
}

</style>