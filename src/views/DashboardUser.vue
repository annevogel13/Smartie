<script>

import { compileScript } from "@vue/compiler-sfc"
import SwipeDataChart from "../components/Swipe/SwipeDataChart.vue"
import { get_group_approved_users } from "../db"

export default {
    methods: {
        test() {
            get_group_approved_users().then(data => {
                console.log(data)
                this.$store.commit("setApprovedMatchs", data)
            })
            this.$router.push("./Swipe")
        }
    },
    components: { SwipeDataChart },
}
</script>

<template>
    <div class="dashboard">
        <button @click="test">Klik hier om de matches de laden in je profiel</button>
        <h3> Dashboard </h3>

        <div v-if="!this.$store.state.user.hasProfile" class="noProfile">
            <p> Je profiel is niet compleet </p>
            <button>
                <router-link to="/ProfileUser">Klilk hier om naar de profiel pagina te gaan</router-link>
            </button>
        </div>
        <div v-if="!this.$store.state.user.hasProfile" class="noProfile">
            <p> Heb je de vragenlijst al ingevuld? </p>
            <button
                v-if="this.$store.state.user.role == 'bedrijf' && this.$store.state.user.filledInQuestionnaire == false">
                <router-link to="/QuestionnaireB">Klik hier om naar de profiel pagina te gaan</router-link>
            </button>
            <button
                v-if="this.$store.state.user.role == 'cursist' && this.$store.state.user.filledInQuestionnaire == false">
                <router-link to="/QuestionnaireC">Klik hier om naar vragenlijst te gaan </router-link>
            </button>
        </div>

        <div v-if="this.$store.state.user.role == 'cursist'">
            <h3> Pagina voor cursisten </h3>
        </div>

        <div v-if="this.$store.state.user.role == 'bedrijf'">
            <h3> Pagina voor bedrijven </h3>
            <div class="toprecommendations">
                <ol>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                </ol>
                <button>Contact</button>
            </div>
            <div class="swipeData">

                <SwipeDataChart></SwipeDataChart>
            </div>
        </div>
    </div>

</template>

<style scoped>
.toprecommendations {
    grid-column: 1;
    grid-row: 1;
    float: left;

}

.swipeData {

    grid-column: 2;
    grid-row: 1;
    float: right;
    width: 60%;
}

.dashboard {
    display: grid;
}
</style>