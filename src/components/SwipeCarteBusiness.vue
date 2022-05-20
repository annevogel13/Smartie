<script>

import PieChart from "./PieChart.vue"
import PopupFeedback from "../components/PopupFeedback.vue"

export default {
    components: { PieChart, PopupFeedback },
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
            this.$refs.accesing_visible.visible = !this.$refs.accesing_visible.visible; 
            
        }
    }
}


</script>
<template>
    <div class="swipeCartBusiness" @click = "visible = !visible">
        <h3> {{ name }} </h3>
        <div>
            <PieChart></PieChart>
            <button class="swipe-left" @click="swipe_left">LEFT</button>
            <button class="swipe-right" @click="swipe_right">RIGHT</button>
            <p> {{ s_left }} en {{s_right}} </p>
            <PopupFeedback ref = "accesing_visible"></PopupFeedback>
            <div v-if = "s_right">
                <h3>FEEDBACK????</h3>
            </div>

        </div>
    </div>
</template>


<style>
.swipe-left {
    background-color: green;
    border-color: green;
    align-self: left;
}

.swipe-left:hover {
    background-color: whitesmoke;
    border-color: green;
}

.swipe-right {
    background-color: red;
    border-color: red;
    align-self: right;
}

.swipe-right:hover {
    background-color: whitesmoke;
    border-color: red;
}

.swipeCartBusiness {
    background-color: aliceblue;

}
</style>