<template>
    <div class="profileUser" >
        <h4>Profile</h4>
        <p>Hier kan je je profiel aanmaken</p>
        <signup-form />
    </div>
</template>
<script>
    
    import SignupForm from "../components/SignupForm.vue"

    export default {
        name : 'ProfileUser',
        components : { SignupForm }
    }
    
</script>
<style scoped >
.profile{
    width :100%; 
}
</style>
