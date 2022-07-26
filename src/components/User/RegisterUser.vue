<script>

import { add_to_collection } from '../../db'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp } from "firebase/firestore"

export default {
    data() {
        return {
            email: "",
            password: "",
            role: "",
        }
    },
    methods: {
        register() {
            console.log("Register new user")
            // maak een nieuwe user aan in de firebase database 
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    // wanneeer de het creeren van een user gelukt is dan vullen we de vuex state 
                    this.$store.commit('setUID', auth.currentUser.uid)
                    this.$store.commit('setRole', this.role)

                    // dan wordt de user of bij de bedrijven ingedeeld of bij de cursisten 
                    if (this.role == "bedrijf") {
                        add_to_collection("profiel_bedrijf", { UID: auth.currentUser.uid, profile: false, questionnaire : false, role: this.role, time: Timestamp.now() }, auth.currentUser.uid)
                    } else if (this.role == "cursist") {
                        add_to_collection("profiel_cursist", { UID: auth.currentUser.uid, profile: false, questionnaire : false, role: this.role, time: Timestamp.now() }, auth.currentUser.uid)
                    }

                })
                // wanneer dat gelukt is dan wordt de user doorverwzen naar de dashboard pagina 
                .then(this.$router.push('./DashboardUser'))
                // en als er ergens iets fout gaat, dan wordt het error bericht in de console afgedrukt en blijft de user op de register pagina staan 
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                })
        },
    }
}
</script>

<template>
    <h3>Creer een account</h3>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />

    <select class="role" v-model="role">
        <option disabled selected>Kies de rol</option>
        <option value="bedrijf">Bedrijf</option>
        <option value="cursist">Cursist</option>
    </select>
    <br />
    <button @click="register">Registeren</button>
</template>

<style>
</style>