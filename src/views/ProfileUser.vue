<script>

//import { update_profile, uploadImage } from '../db'
import { update_profile } from '../db'

import { get_profile_in_store } from '../db'
export default {
    data() {
        return {
            data: {
                profielfoto: "",
                telefoonnr: "",
                username: "",
                description: "",
                link : "", 
            },
            uploadValue: 0,
            img1: null,
            imageData: null,
        }
    },
    methods: {
        uploadInformation() {
            console.log("trying to upload profile ")
            update_profile(this.$store.state.user.UID, this.data, this.$store.state.user.role)
            get_profile_in_store(this.$store.state.user.UID)
            this.$store.commit('setProfile', true)
            this.$router.push("./DashboardUser")
        },
        click1() {
            this.$refs.input1.click()
        },
        previewImage(event) {
            this.uploadValue = 0;
            this.img1 = null;
            this.imageData = event.target.files[0]
            this.onUpload();
        },
        async onUpload() {
            console.log(this.imageData)
           // this.img1 = uploadImage(this.imageData)
        },
    }
}

</script>
<template>
    <div class="signup">

        <h2>Maak je profiel compleet</h2>
        <label> Username </label>
        <input type="text" required v-model="this.data.username">
        <label> Telefoonnummer </label>
        <input type="tel" required v-model="this.data.telefoonnr">
        <label>Korte beschrijving</label>
        <textarea type="textfield" class="textfield"></textarea>
        <label>Link naar de bedrijfswebsite of github pagina</label>
        <input type="text" required v-model="this.data.link">
        <label>Profiel foto</label>
        <br>
        <button @click="click1">Kies foto</button>
        <input type="file" ref="input1" style="display : none " @change="previewImage" accept="image/*">

        <br>
        <button @click="uploadInformation">Bevestigen</button>

    </div>
</template>

<style scoped >
.textfield {
    max-width: 85%;
    min-width: 85%;
    height : 100px; 
    min-height: 50px;
    max-height : 200px; 
}

.preview {
    width: 25%;
    height: auto;
}

.signup {
    padding: 10px;
    width: 75%;
    margin: 20px auto auto auto;
}

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
    width: 90%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    text-align: center;
}
</style>