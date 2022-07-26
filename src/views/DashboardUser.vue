<template>

    <div class="dashboard" v-if="this.$store.state.user.loggedIn">
        <button @click="prepare_matches" v-if="this.$store.state.user.questionnaireCompleted">
            <h4>Het is tijd om te swipen</h4>
        </button>
        <h3 v-if="this.$store.state.user.role == 'cursist'">Dashboard cursisten </h3>
        <h3 v-if="this.$store.state.user.role == 'bedrijf'">Dashboard bedrijven </h3>
        <br>

        <div>
            <div v-if="!this.$store.state.user.profile" class="noProfile">
                <p> Je profiel is niet compleet </p>
                <button>
                    <router-link to="/ProfileUser">Klilk hier om naar de profiel pagina te gaan</router-link>
                </button>
            </div>
            <div v-if="!this.$store.state.user.questionnaireCompleted">
                <p> Heb je de vragenlijst al ingevuld? </p>
                <button v-if="this.$store.state.user.role == 'bedrijf'">
                    <router-link to="/QuestionnaireB">Klik hier om naar de profiel pagina te gaan</router-link>
                </button>

                <button v-if="this.$store.state.user.role == 'cursist'">
                    <router-link to="/QuestionnaireC">Klik hier om naar vragenlijst te gaan </router-link>
                </button>
            </div>


            <div class="toprecommendations">
                <h4>Feedback gekregen vanuit swipes (aantal : {{ this.$store.state.user.feedback.length }})</h4>

                <li v-for="item in this.$store.state.user.feedback" :key="item.id">"{{ item }}"</li>
                <br><br><br>
                <div class="btnClass">
                    <img src="/laptop_reading.png" style="width : 200px">
                    <div>
                        <button>Pas je profiel aan (X)</button>
                        <br>
                        <button>Pas de antwoorden op de vragenlijst aan (X)</button>
                    </div>
                </div>
            </div>
            <div class="swipeData">
                <h3>Statistieken</h3>
                <SwipeDataChart></SwipeDataChart>
            </div>

            <PopUpNoMatches ref="noMatches"></PopUpNoMatches>
        </div>
    </div>
   <!-- <div v-if="!this.$store.state.user.loggedIn">
        <img src="/error_robot.png" style="width : 400px">
        <h2> Je bent niet ingelogd </h2>
        <button>
            <router-link to="./RegisterUser">Ga naar de inlog pagina</router-link>
        </button>
    </div> -->

</template>
<script>
import SwipeDataChart from "../components/Swipe/SwipeDataChart.vue"
import PopUpNoMatches from "../components/Popups/PopUpNoMatches.vue"
import { get_group_approved_users, get_data_user_swipe } from "../db"

export default {
    methods: {
        prepare_matches() {
            get_group_approved_users(this.$store.state.user.role).then(data => {
                console.log("get group approved users", data)
                this.$store.commit("nullifyIndex")
                if (typeof (data.length) != "undefined" && data.length != 0) {
                    this.$store.commit("setApprovedMatchs", data)
                    this.prepare_data_for_swipe_show(data[0])
                    this.$router.push("./Swipe")
                } else {
                    console.log("Geen matches")
                    this.$refs.noMatches.visibel = !this.$refs.noMatches.visibel
                    this.$router.push("./DashboardUser")
                }

            })

        },
        prepare_data_for_swipe_show(_UID) {

            get_data_user_swipe(_UID, this.$store.state.user.role).then(data => {
                this.$store.commit("set_data_to_be_displayed", data)
            })
        }
    },
    components: { SwipeDataChart, PopUpNoMatches },
}
</script>
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

}

.dashboard {
    display: grid;
    width: 80%;
    margin: auto;
}
</style>