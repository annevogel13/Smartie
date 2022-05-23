<script>

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            login: false,
        };
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
                    const errorCode = error.code;
                    const errorMessage = error.message;
                })
        },

        login_user() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    console.log("Ingelogged") 
                    const user = userCredential.user;
                })
                .then(this.$router.push('./Dashboard'))
                .catch((error) => {
                    console.log("error")
                    const errorCode = error.code;
                    const errorMessage = error.message;
                })
        }
    }
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

input {
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