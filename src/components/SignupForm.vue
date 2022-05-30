<template>
    <div class="format">

        <h2>Maak je profiel aan</h2>
        <label> Username </label>
        <input type="text" required v-model="username">
        <label> Telefoonnummer </label>
        <input type="tel" required v-model="telefoonnr">

        <label>Profiel foto</label>
        <input type="file" accept="image/">

        <div v-if="this.$store.state.user.role == 'bedrijf'">
            <h3> Vragen specifiek voor bedrijven </h3>
        </div>

        <div v-if="this.$store.state.user.role == 'cursist'">
            <h3> Vragen specifiek voor cursisten </h3>

        </div>
        <button @click="uploadInformation">Bevestigen</button>

        
    </div>
</template>
<script>

import { update_profile } from '../db'

export default {
    data() {
        return {
            profielfoto: "",
            telefoonnr: "",
            username: "",

        }
    },
    methods: {
        uploadInformation() {
            console.log("trying to upload profile ")
            update_profile(this.$store.state.user.UID, this.username, this.telefoonnr)
            this.$router.push("./DashboardUser")
        }
    }
}
</script>
<style scoped >
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555
}

button {
    align-items: center;
    background-color: aliceblue
}
</style>