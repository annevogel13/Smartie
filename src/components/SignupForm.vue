<template>
    <form>
        <label> email </label>
        <input type = "email" required v-model = "email">
        <label> Wachtwoord </label>
        <input type = "password" required v-model = "password">
        <label> Role </label>
        <select v-model = "role">
            <option value = "bedrijf">Bedrijf</option>
            <option value = "cursist">Cursist</option>
        </select>

        <div v-if = "role == 'bedrijf' ">
            <h3> Vragen specifiek voor bedrijven </h3>
        </div>

        <div v-if = "role == 'cursist' ">
            <h3> Vragen specifiek voor cursisten </h3>
        </div>
    </form>
</template>
<script>

    export default {
        data() {
            return {                
                email: '',
                password : '',
                role : ''
            }
        }
    }
</script>
<style>
form {
    max-width: 600px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555
}
</style>