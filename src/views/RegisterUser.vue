<script>

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { db, add_to_collection } from '../db'


export default {
    data() {
        return {
            email: "",
            password: "",
            role: "",
            login: false,
            newUser : ""
        }
    },
    methods: {
        register() {
            console.log("Register new user")
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    this.$store.state.user.UID = auth.currentUser.uid;
                    add_to_collection("profiles", {UID : auth.currentUser.uid, hasProfile : false}, auth.currentUser.uid)
                })
                .then(this.$router.push('./DashboardUser'))
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                })
        },

        login_user() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    console.log("Ingelogged")
                    this.$store.state.user.UID = auth.currentUser.uid;

                })
                .then(this.$router.push('./DashboardUser'))
                .catch((error) => {

                    const errorMessage = error.message;
                    console.log(errorMessage)
                })
        },
    },

    components: {}
}

</script>
<template>
    <div class="registerUser">

        <div v-if='!login'>
            <h3>Creer een account</h3>
            <input type="text" v-model="email" placeholder="Email">
            <br>
            <input type="password" v-model="password" placeholder="Password">
            <br>
            <select class="role" v-model="role" placeholder="Bedrijf">
                <option value="bedrijf">Bedrijf</option>
                <option value="cursist">Cursist</option>
            </select>
            <br>
            <button @click="register()">
                Registeren
            </button>
            <button @click="this.login = !login">Wisselen naar login</button>
        </div>
        <div v-if='login'>
            <h3>Login</h3>
            <input type="text" v-model="email" placeholder="Email">
            <br>
            <input type="password" v-model="password" placeholder="Password">
            <br>
            <button @click="login_user()">
                Login
            </button>
            <button @click="this.login = !login">Wisselen naar registeren</button>
        </div>

    </div>
</template>
<style scoped>
.registerUser {
    margin-top: 40px;
    width: 1000px;
    vertical-align: center;
}

input,
.role {
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;

}

button {
    margin: 10px;
    background-color: aliceblue;
    border: aliceblue;
    padding: 5px;

}
</style>