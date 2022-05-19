<template>
    <div class="profile" >
        <h4>Profile</h4>
        <p>Hier kan je je profiel aanmaken</p>
        <signup-form />
    </div>
</template>
<script>
    
    import SignupForm from "../components/SignupForm.vue"

    export default {
        name : 'Profile',
        components : { SignupForm }
    }
    
</script>
