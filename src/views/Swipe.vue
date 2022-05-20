<script>

    import SwipeCarteBusiness from "../components/SwipeCarteBusiness.vue"
    import PopupFeedback from "../components/PopupFeedback.vue"

    export default {
        name : 'Swipe',
        components : { SwipeCarteBusiness, PopupFeedback }
    }

</script>
<template>
    <div class = "swipe">
        <h3> The swipe page </h3>
        <p> kleine algemene uitleg : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <SwipeCarteBusiness></SwipeCarteBusiness>
        <PopupFeedback></PopupFeedback>
    </div>

    <!-- nog beter : https://swiperjs.com/demos   infinite loop --> 
</template>
<style>


</style>