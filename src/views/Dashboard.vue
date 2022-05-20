<script>
    export default {
        data(){
            return {
                role : "bedrijf", 
            }
        }
    }
</script>

<template>
    <div class="dashboard">

        <h3> Dashboard </h3>
        <p>(gepersonaliseerd --> twee verschillende versies)</p>
        <label>Role : </label>
       
            <select v-model="role">
                <option value="bedrijf">Bedrijf</option>
                <option value="cursist">Cursist</option>
            </select>
     
    </div>

</template>

<style>
.dashboard {
    width: 1000px;
}
</style>