<template>
    <div class="about">

        

        <img class="profielfoto" src="/profielfoto.png">
        <div class="next">
            <h3>Over mij</h3>
            Hoi
            <br>
            Bachelor studente aan de Universiteit Lyon 1.<br>
            Bachelor informatica


            Vanuit de onderstaande linkjes kan je zien 
            <br>
            <div class = "btns">
            <button class="verhogen" @click="openUrl('./Presentatie')">Presentatie</button>
            <button class="verhogen" @click="openUrl('./StageRapport')">Stage rapport</button>
            <button class="verhogen" @click="openUrl('https://github.com/annevogel13/Smartie')"><img
                    src="/githublogo.png" class="logoBtn">Github</button>
            </div>
        </div>
    </div>

</template>
<script>

export default {
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        openUrl(url) {
            window.open(url)
        }
    }
}

</script>

<style scoped>

.btns{
    background-color : #9BB1FF; 
    margin : 10px; 
    margin-top : 30px; 
    border-radius : 10px; 
}
.next {
    display: inline-block;
    max-width : 40%;

}

.profielfoto {
    width: 15%;
    display: inline-block;
    vertical-align: top;
    border-radius: 10px;
    margin-right: 15px;
}

.logoBtn {
    width: 15px;
    height: 15px;
    display: inline;
    padding: 0;
    margin: 0;
}

.verhogen {
    height: 40px;
}
</style>