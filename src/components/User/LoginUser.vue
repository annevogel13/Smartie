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
        login_user() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    console.log("Ingelogged")
                    this.$store.commit("setUID", auth.currentUser.uid)
                    get_profile_in_store(auth.currentUser.uid)
                    // TODO : get this working !!!! state doesn't fill up 
                })
                .then(this.$router.push("./DashboardUser"))
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });

        },

    },

};
</script>

<style>
</style>