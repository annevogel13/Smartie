<script>

import PieChart from "./PieChart.vue"
import LineChart from "./LineChart.vue"
import PopupFeedback from "../components/PopupFeedback.vue"
import PopupQuestions from "../components/PopupQuestions.vue"

export default {
    components: { PieChart, LineChart, PopupFeedback, PopupQuestions },
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
        more_information() {
            this.$refs.questions_visible.visible = !this.$refs.questions_visible.visible
        }
    }
}
</script>

<template>
    <div class="swipeCartBusiness">
       <!--  <h3 class="nameCompagnie"  @click="more_information"> {{ name }} </h3>
         <p>
                korte beschrijving van het bedrijf met bijvoorbeeld een opsomming met elementen : 
                <ul>
                    <li>ding 1 </li>
                    <li>ding 1 </li>
                    <li>ding 1 </li>
                    <li>ding 1 </li>
                </ul>
            </p>
             --> 
        <div class="div1 griditem">
           <h3 class="nameCompagnie"  @click="more_information"> {{ name }} </h3>
        </div>
        <div class="div2 griditem">
            <p>
                korte beschrijving van het bedrijf met bijvoorbeeld een opsomming met elementen : 
                <ol>
                    <li>ding 1 </li>
                    <li>ding 1 </li>
                    <li>ding 1 </li>
                    <li>ding 1 </li>
                </ol>
            </p>
        </div>
        <div class="div3 griditem">
            <PieChart></PieChart>        
            <LineChart></LineChart>
        </div>

        <div class="div4 griditem btn_tinder">
            <h3 class = "match ">Match?</h3>
            <button class="swipe-left"  @click="swipe_left" ></button>
            <button class="swipe-right" @click="swipe_right"></button>
        </div>            

            <PopupFeedback ref = "feedback_visible"></PopupFeedback>
            <PopupQuestions ref ="questions_visible"></PopupQuestions>

    </div>
</template>

<style>

.match{
    text-align: center;
}

.div1{
    
    grid-column: 1/3 ; 
    grid-row: 1 ;
}

.div2{

    grid-column: 1; 
    grid-row: 2;
    
}

.div3{
    
    grid-column: 2 / 4; 
    grid-row: 2;
    padding : 10px; 
}

.div4{
    
    grid-column: 1/3; 
    grid-row: 4;
    padding: 10px; 
}

.swipeCartBusiness {
    display :grid; 
    background-color: aliceblue;
    padding: 10px;
    width: 80%;
    height: 50%;
    margin: auto;
    border-radius: 10px;
}

.nameCompagnie {
    border-radius: 10px;
    text-align: center;
    background-color: #F29292;
    padding: 10px;
}

.nameCompagnie:hover {
    background-color: #f29292c7;
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