<template>
    <div class="format">
        <form>
            <h2>Maak je profiel aan</h2>
            <label> Username </label>
            <input type="text" required v-model="profile.username">
            <label> Telefoonnummer </label>
            <input type="tel" v-model="profile.telefoonnr">

            <label>Profiel foto</label>
            <input type="file" accept="image/">
            <label> Role </label>
            <select v-model="profile.role">
                <option value="bedrijf">Bedrijf</option>
                <option value="cursist">Cursist</option>
            </select>

            <div v-if="profile.role == 'bedrijf'">
                <h3> Vragen specifiek voor bedrijven </h3>
            </div>

            <div v-if="profile.role == 'cursist'">
                <h3> Vragen specifiek voor cursisten </h3>

            </div>
            <button @click="uploadInformation()">Bevestigen</button>
        </form>
    </div>
</template>
<script>

import { add_to_collection } from '../db'

export default {
    data() {
        return {
            profile: {
                profielfoto: "",
                role: "",
                telefoonnr: "",
                username: "",
            }
        }
    },
    methods: {
        uploadInformation(){
                console.log("trying to upload profile ")
                add_to_collection('profiles', this.profile)
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