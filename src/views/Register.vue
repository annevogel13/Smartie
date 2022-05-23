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
        }
    }
}


</script>
<template>
    <div class="register">
        <h3>Creer een account</h3>
        <input type="text" v-model="email" placeholder="Email">
        <br>
        <input type="password" v-model="password" placeholder="Password">
        <br>
        <button @click="register()">
            Registeren
        </button>
        <br>
        <button>
            <router-link style="text-decoration: none; color: inherit;" to="/Dashboard"> Om in te loggen klik hier</router-link>
        </button>

    </div>
</template>
<style scoped>
.register {
    margin-top: 40px;
    width: 1000px;
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
    margin : 10px; 
    background-color: aliceblue;
    border : aliceblue; 
    padding : 5px; 

}

</style>