<script>

import PieChart from "../Charts/PieChart.vue"
import LineChart from "../Charts/LineChart.vue"
import PopupFeedback from "../Popups/PopupFeedback.vue"
import PopupQuestions from "../Popups/PopupQuestions.vue"
import { get_profile_in_store_cursist, add_swipe } from "../../db"

export default {
    components: { PieChart, LineChart, PopupFeedback, PopupQuestions },
    data() {
        return {

            s_left: false,
            s_right: false,
            data: this.$store.state.user.data_to_be_displayed,
        }
    },
    methods: {
        swipe_left() {
            this.s_left = !this.s_left
            // add to this.user that UID of the evaluted person in the likes array 
            add_swipe(this.$store.state.user.UID, data.UID, true, this.$store.state.user.UID)
        },

        swipe_right() {
            this.s_right = !this.s_right
            this.$refs.feedback_visible.visible = !this.$refs.feedback_visible.visible;
            add_swipe(this.$store.state.user.UID, data.UID, false, this.$store.state.user.UID)

        },
        get_random_UID_from_array() {
            const max = this.$store.state.user.approved_matches.length;
            const index = Math.floor(Math.random() * max);
            console.log("het random numer van de dag is : ", index)
            const tmp = this.$store.getters.getIndexApprovedMatches(index)
            console.log(tmp)
            get_profile_in_store_cursist(tmp).then(data => {
                console.log(data)
                this.data = data
            })


        },
        more_information() {

            this.$refs.questions_visible.visible = !this.$refs.questions_visible.visible
        },
    }
}


</script>

<template>
    <div class="swipeCartBusiness">
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
            <!-- TODO klink knopje werkend maken -->
            <button onclick=''>Link naar {{
                    this.$store.state.user.data_to_be_displayed.username
            }}'s webpagina</button>

        </div>
        <div class="div3 griditem">

            <!-- TODO piechart fixen 
                <PieChart v-if="this.$store.state.user.data_to_be_displayed.role == 'bedrijf'"></PieChart>
            -->
            <LineChart></LineChart> 
        </div>

        <div class="div4 griditem btn_tinder">
            <h3 class="match ">Match?</h3>
            <button class="swipe-left" @click="swipe_left"></button>
            <button class="swipe-right" @click="swipe_right"></button>
        </div>

        <PopupFeedback ref="feedback_visible"></PopupFeedback>
        <PopupQuestions ref="questions_visible"></PopupQuestions>

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