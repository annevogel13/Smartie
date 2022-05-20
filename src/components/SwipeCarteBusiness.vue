<script>

import PieChart from "./PieChart.vue"
import PopupFeedback from "../components/PopupFeedback.vue"
import PopupQuestions from "../components/PopupQuestions.vue"

export default {
    components: { PieChart, PopupFeedback, PopupQuestions },
    data() {
        return {
            name: 'Test_naam',
            s_left: false,
            s_right: false,


        }
    },
    methods: {
        swipe_left() {
            this.s_left = !this.s_left
        },
        swipe_right() {
            this.s_right = !this.s_right
            this.$refs.feedback_visible.visible = !this.$refs.feedback_visible.visible; 
            
        },
        more_information(){
            this.$refs.questions_visible.visible = ! this.$refs.questions_visible.visible
        }
    }
}
</script>

<template>
    <div class="swipeCartBusiness" >
        <h3 class="nameCompagnie"  @click="more_information"> {{ name }} </h3>
        <div>
            <PieChart></PieChart>
            <div class = "two_buttons">
                <button class="swipe-left"  @click="swipe_left" >LEFT</button>
                <button class="swipe-right" @click="swipe_right">RIGHT</button>
            </div>
            <PopupFeedback ref = "feedback_visible"></PopupFeedback>
            <PopupQuestions ref ="questions_visible"></PopupQuestions>
        </div>
    </div>
</template>

<style>

.nameCompagnie{
    border-radius: 10px;
    text-align: center;
    background-color: #F29292 ;
    padding : 10px; 
}

.nameCompagnie:hover{
    background-color: #f29292c7;
}

.swipe-left {
    
    background-color: green;
    border-color: green;
    width : 50%;
    height: 50px;
}

.swipe-left:hover {
    background-color: whitesmoke;
    border-color: green;
}

.swipe-right {
    float : right; 
    
    background-color: red;
    border-color: red;
    width : 50%; 
    height : 50px; 
    
}

.swipe-right:hover {
    background-color: whitesmoke;
    border-color: red;
}

.swipeCartBusiness {
    background-color: aliceblue;
    padding : 10px; 
}
</style>