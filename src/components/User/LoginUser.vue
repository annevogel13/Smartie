<template>
    <h3>Login</h3>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />
    <button @click="login_user">Login</button>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { get_profile_in_store } from '../../db';

export default {
    data() {
        return {
            email: "",
            password: "",
            
        }
    },
    methods: {
        async login_user() {
            // authenticate with firebase 
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    console.log("Ingelogged")
                    // fill the vuex state 
                    get_profile_in_store(auth.currentUser.uid)
                })

                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    return;
                })

                this.$router.push("./DashboardUser"); 
        },

    },

};
</script>

<style>
</style>