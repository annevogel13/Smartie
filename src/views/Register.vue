<script>

export default {
    name: "Register",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        Register: function () {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        this.$router.replace("home");
                    },
                    err => {
                        alert(err.message);
                    }
                )
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
        <button @click="signUp">Register</button>
        <span>
            <router-link to="/login">login</router-link>.
        </span>
    </div>
</template>
<style>

.register{
    float : center; 
    width : 100%; 
    height: 600px;
}

</style>