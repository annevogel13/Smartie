<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
    components: {
        VuePdfEmbed // component which transforms automatically an pdf to an html page 
    },
    data(){
        return {
            source1 : "/public/StageRapport.pdf",
        }
    }
}

</script>
<template>
    <div class="about">

        <VuePdfEmbed :source= source1 />

    </div>

</template>
<style scoped>
.presentatie {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.2500%;
    padding-bottom: 48px;
    box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
    margin-top: 1.6em;
    margin-bottom: 0.9em;
    overflow: hidden;
    border-radius: 8px;
    will-change: transform;
}
</style>