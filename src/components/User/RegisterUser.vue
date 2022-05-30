<template>
    <h3>Creer een account</h3>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />
    <select class="role" v-model="role" placeholder="Role">
        <option value="bedrijf">Bedrijf</option>
        <option value="cursist">Cursist</option>
    </select>
    <br />
    <button @click="register()">Registeren</button>
</template>

<script>

import { add_to_collection, db } from '../../db'

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
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    this.$store.commit('setUID', auth.currentUser.uid)
                    this.$store.commit('setRole', this.role)

                    add_to_collection("profiles", { UID: auth.currentUser.uid, hasProfile: false, role: this.role }, auth.currentUser.uid)
                })
                .then(this.$router.push('./DashboardUser'))
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                })
        },
    }
};
</script>

<style>
</style>