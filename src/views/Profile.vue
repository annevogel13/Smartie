<template>
    <div class="profile" >
        <h4>Profile</h4>
        <p>Hier kan je je profiel aanmaken</p>
        <!--- werkgever versie 
            locatie 
            vragen profiel (inclusief URL)
            @mail
        -->
        
        <!-- cursists versie 
            locatie
            vragen
            foto
            pseudoniem/alias 
        -->
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
