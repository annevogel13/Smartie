<script>

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { db } from '../db'

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
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .then(this.$router.push('./Dashboard'))
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                })
            this.create_user_db();
        },

        login_user() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    console.log("Ingelogged")
                    const user = userCredential.user;
                    this.$store.state.user.UID = auth.currentUser.uid;

                })
                .then(this.$router.push('./Dashboard'))
                .catch((error) => {

                    const errorMessage = error.message;
                    console.log(errorMessage)
                })
        },
        async addUser(){
            if(this.newUser) {
                await db.collection("users").add({name : this.newUser})
                
            }
        },

    },

    components: { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
}

</script>
<template>
    <div class="register">

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
.register {
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