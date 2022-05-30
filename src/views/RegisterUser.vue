<script>

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


import login from '../components/User/LoginUser.vue'
import register from '../components/User/RegisterUser.vue'

export default {
    data() {
        return {
            wissel : false, 
        }
    }, 
    components: { login, register }

}


</script>
<template>
    
        <div class="register">

            <register v-if = "!wissel"></register>
            <login v-if = "wissel"></login> 
            <button @click = "this.wissel = !wissel">Wissel</button>
        </div>

    
</template>
<style >
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