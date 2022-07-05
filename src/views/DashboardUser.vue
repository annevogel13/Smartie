<template>
    <div class="dashboard">
        <button @click="prepare_matches">Klik hier om de matches de laden in je profiel</button>
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
                    <img src="/public/laptop reading.png" style="width : 200px">
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
        </div>
    </div>

</template>
<script>
import SwipeDataChart from "../components/Swipe/SwipeDataChart.vue"
import { get_group_approved_users, get_data_user_swipe } from "../db"

export default {
    methods: {
        prepare_matches() {
            get_group_approved_users(this.$store.state.user.role).then(data => {
                console.log("get group approved users", data)
                this.$store.commit("setApprovedMatchs", data)
                if (typeof (data.length) != "undefined") {
                    this.prepare_data_for_swipe_show(data[0])
                    this.$router.push("./Swipe")
                } else {
                    this.$router.push("./Dashboard")
                }

            })

        },
        prepare_data_for_swipe_show(_UID) {

            get_data_user_swipe(_UID, this.$store.state.user.role).then(data => {
                this.$store.commit("set_data_to_be_displayed", data)
            })
        }
    },
    components: { SwipeDataChart },
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