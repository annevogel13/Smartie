<script>

import PieChart from "../components/Charts/PieChart.vue"
import LineChart from "../components/Charts/LineChart.vue"
import PopupFeedback from "../components/Popups/PopupFeedback.vue"
import PopupQuestions from "../components/Popups/PopupQuestions.vue"
import { get_profile_in_store, add_swipe } from "../db"

export default {
    components: { PieChart, LineChart, PopupFeedback, PopupQuestions },
    data() {
        return {

            s_left: false,
            s_right: false,
            noMoreMatches: false,
            chart_reload1: 0,
            chart_reload2: 0,


        }
    },
    methods: {
        chart_reload() {
            this.chart_reload1++;
            this.chart_reload2++;
        },
        openUrl() {
            const url = this.$store.state.user.data_to_be_displayed.link
            window.open(url)
        },
        swipe_left() {
            this.s_left = !this.s_left
            add_swipe(this.$store.state.user.UID, this.$store.state.user.data_to_be_displayed.UID, true, this.$store.state.user.UID)
            this.get_new_profile()
            this.chart_reload()
        },

        swipe_right() {
            this.s_right = !this.s_right
            this.$refs.feedback_visible.visible = !this.$refs.feedback_visible.visible;
            add_swipe(this.$store.state.user.UID, this.$store.state.user.data_to_be_displayed.UID, false, this.$store.state.user.UID)
            this.get_new_profile()
            this.chart_reload()
        },
        get_new_profile() {

            const max = this.$store.state.user.swipe.approved_matches.length;
            const index = this.$store.state.user.swipe.index
            console.log("max : ", max, " index : ", index)
            if (index < max) {

                const tmp = this.$store.state.user.swipe.approved_matches[index]
                console.log(tmp)
                get_profile_in_store(tmp, true)
                this.$store.commit('augmentIndex')
            } else {
                console.log("Geen matches meer over")
                this.noMoreMatches = true;
            }
        },
        more_information() {

            this.$refs.questions_visible.visible = !this.$refs.questions_visible.visible
        },
        reload() {
            console.log("Update de state")
            get_profile_in_store(this.$store.state.user.UID, false)
            this.$router.push("./")
        },


    }
}


</script>

<template>
    <div v-if="!this.$store.state.user.loggedIn">
        <img src="/error_robot.png" style="width : 400px">
        <h2> Je bent niet ingelogd </h2>
        <button>
            <router-link to="./RegisterUser">Ga naar de inlog pagina</router-link>
        </button>
    </div>
    <div class="swipeCartBusiness" v-if="!this.noMoreMatches && this.$store.state.user.loggedIn">
        <div class="div1 griditem">
            <h3 class="nameCompagnie" @click="get_random_UID_from_array"> {{
                    this.$store.state.user.data_to_be_displayed.username
            }} </h3>
        </div>
        <div class="div2 griditem">
            <h4>Beschrijving van {{ this.$store.state.user.data_to_be_displayed.username }}:</h4>
            <p>
                {{ this.$store.state.user.data_to_be_displayed.description }}
            </p>

            <button @click="openUrl()">Link naar {{
                    this.$store.state.user.data_to_be_displayed.username
            }}'s webpagina</button>

        </div>
        <div class="div3 griditem">
            <PieChart :key="chart_reload1"></PieChart>
            <LineChart :key="chart_reload2"></LineChart>
        </div>

        <div class="div4 griditem btn_tinder">
            <h3 class="match ">Match?</h3>
            <button class="swipe-left" @click="swipe_left"></button>
            <button class="swipe-right" @click="swipe_right"></button>
        </div>

        <PopupFeedback ref="feedback_visible"></PopupFeedback>
        <PopupQuestions ref="questions_visible"></PopupQuestions>

    </div>
    <div v-if="this.noMoreMatches">
        <br><br><br><br>
        <h2>Dit waren alle matches voor vandaag </h2>

        <img src="/wait_for_it.png" style="width : 200px">
        <br><br><br><br>
        <button @click="this.reload()">naar de home pagina</button>
    </div>
</template>

<style scoped>
.match {
    text-align: center;
}

.div1 {

    grid-column: 1/3;
    grid-row: 1;
}

.div2 {

    grid-column: 1;
    grid-row: 2;
    
}

.div3 {

    grid-column: 2 / 4;
    grid-row: 2;
    max-width : 100%; 

}

.div4 {

    grid-column: 1/3;
    grid-row: 4;
 
}

.swipeCartBusiness {
    display: grid;
    width: 85%;
    margin: auto;
}

.nameCompagnie {
    border-radius: 10px;
    text-align: center;
    background-color: #F1D302;
    padding: 10px;
}

.nameCompagnie:hover {
    background-color: #270043;
    color: white;
}

.swipe-left {
    border-radius: 10px;
    background-color: #548051;
    border-color: #548051;
    width: 40%;
    height: 50px;
}

.swipe-left:hover {
    background-color: #548051b6;
    border-color: #5480517e;
}

.swipe-right {
    float: right;
    border-radius: 10px;
    background-color: #E34948;
    border-color: #E34948;
    width: 40%;
    height: 50px;

}

.swipe-right:hover {
    background-color: #e34848c2;
    border-color: #e34848c2;
}
</style>