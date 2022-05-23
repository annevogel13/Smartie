<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        register(){
            console.log("Register new user")
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                })
            }
    }
}


</script>
<template>
    <div class="register">
        <p>Register</p>
        <input type="text" v-model="email" placeholder="Email">
        <br>
        <input type="password" v-model="password" placeholder="Password">
        <br>
        <button @click="register()">Register</button>
        <span>
            <router-link to="/Dashboard">login</router-link>.
        </span>
        <p> {{ email }} +++ {{ password }}</p>
    </div>
</template>
<style scoped>
.register {
    margin-top: 40px;
}

input {
    width: 80%;
    padding: 20px;
    margin: 20px 0;
}

button {
    width: 10%;
    margin-top: 30px;
    padding: 20px;
    cursor: pointer;
}

span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>