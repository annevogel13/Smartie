<template>
    <div class="dashboard">
        <button @click="test">Klik hier om de matches de laden in je profiel</button>
        <h3> Dashboard </h3>

        <div v-if="!this.$store.state.user.profile" class="noProfile">
            <p> Je profiel is niet compleet </p>
            <button>
                <router-link to="/ProfileUser">Klilk hier om naar de profiel pagina te gaan</router-link>
            </button>
        </div>
        <div v-if="!this.$store.state.user.filledInQuestionnaire">
            <p> Heb je de vragenlijst al ingevuld? </p>
            <button v-if="this.$store.state.user.role == 'bedrijf'">
                <router-link to="/QuestionnaireB">Klik hier om naar de profiel pagina te gaan</router-link>
            </button>
           test :  {{ this.$store.state.user.role }}
            <button v-if="this.$store.state.user.role == 'cursist'">
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
<script>
import SwipeDataChart from "../components/Swipe/SwipeDataChart.vue"
import { get_group_approved_users, get_data_user_swipe } from "../db"

export default {
    methods: {
        test() {
            get_group_approved_users(this.$store.state.user.role).then(data => {
                console.log("get group approved users" , data)
                this.$store.commit("setApprovedMatchs", data)
                
                this.prepare_data_for_swipe_show(data[0])
            })
            this.$router.push("./Swipe")
        },
        prepare_data_for_swipe_show(_UID) {
            console.log(_UID, " + ", this.$store.state.user.role)
            get_data_user_swipe(_UID, this.$store.state.user.role).then(data => {
                console.log(data)
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
    width: 60%;
}

.dashboard {
    display: grid;
}
</style>