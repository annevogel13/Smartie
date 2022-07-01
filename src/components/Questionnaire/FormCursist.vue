<template>
    <div class="formCompany">

        <form>
            <h1>Welkom bij de vragenlijst C</h1>
            <p> Hieronder staan verschillende vragen die opgedeeld zijn in verschillende categorieëen.
                Allereerst is de categorie kernwoorden. Voor elke zin met een kernwoord moet een percentage uitgekozen
                worden.
                Dit kan door het gebruik van de slider. <br><br>
                Daarna is de categorie stellingen. Hierin staan verschillende opvattingen en als deze bij jou passen,
                dan vink je ze aan.
                Er zit geen maximum of minum aan, zolang het maar bij jou past.
                <br><br>
                Als laatste zijn er ook nog een paar algemene vragen.
                <br><br>
                <iframe src="https://giphy.com/embed/d1E1YlkOTe4IfdNC" width="150" height="150" frameBorder="0"
                    class="giphy-embed" allowFullScreen></iframe>

            </p>
            <hr>
            <div class="kernwoorden">
                <h2> Kernwoorden </h2>
                <label for="k1"><b>Flexibele werktijden </b> zijn een belangrijk voor mij.</label>: {{ questionnaire.k1
                }}%
                <input type="range" id="k1" v-model.number="questionnaire.k1" min="0" max="100" step="5" />

                <br><br>
                <label for="k2">Ik <b>denk</b> graag <b>mee</b> over verbetering</label>: {{ questionnaire.k2 }}%
                <input type="range" id="k2" v-model.number="questionnaire.k2" min="0" max="100" step="5" />

                <br><br>
                <label for="k3"><b>Stilteruimte</b> is voor mij belangrijk</label>: {{ questionnaire.k3 }}%
                <input type="range" id="k3" v-model.number="questionnaire.k3" min="0" max="100" step="5" />

                <br><br>
                <label for="k4">Ik ben een <b>geek</b></label> : {{ questionnaire.k4 }}%
                <input type="range" id="k4" v-model.number="questionnaire.k4" min="0" max="100" step="5" />

                <br><br>
                <label for="k5">Intercollegiale sfeer is belangrijk</label> : {{ questionnaire.k5 }}%
                <input type="range" id="k5" v-model.number="questionnaire.k5" min="0" max="100" step="5" />

                <br><br>
            </div>
            <hr>
            <div class="stellingen">
                <h2>Stellingen </h2>
                <p> Kies de stellingen die bij uw bedrijf passen </p>
                <input type="checkbox" id="s1" v-model="questionnaire.s1" name="s1" class="s" />
                <label for="s1">Ik werk liever thuis.</label>
                <br>
                <input type="checkbox" id="s2" v-model="questionnaire.s21" name="s2" class="s" />
                <label for="s2">Diverse taken houden mij actief.</label>
                <br>
                <input type="checkbox" id="s3" v-model="questionnaire.s22" name="s3" class="s" />
                <label for="s3">Ik erger mij aan collega's die lang bij mijn bureau blijven praten.</label>
                <br>
                <input type="checkbox" id="s4" v-model="questionnaire.s23" name="s4" class="s" />
                <label for="s4">Ik ben spontaan.</label>
                <br>
                <input type="checkbox" id="s5" v-model="questionnaire.s24" name="s5" class="s" />
                <label for="s5">Mijn koptelefoon is essentieel voor mijn concentratie.</label>

            </div>
            <hr>
            <div class="vragen">
                <h2>Vragen </h2>

                <label for="min_uren">Hoeveel uur per week zou je in de ideale wereld willen werken?</label>
                <!-- TODO v-model vanuit een select pakken??? -->
                <select id="min_uren" style="margin-left : 30px;" v-model="questionnaire.d4">
                    <option value="24">24</option>
                    <option value="32">32</option>
                    <option value="36">36</option>
                    <option value="40">40</option>
                </select>
                <label> uren </label>

                <br><br>
                <label>Ben je meer een front-end of een back-end developperer? </label><br>
                <div class="front_backL">
                    <label for="front">Front-end : {{ questionnaire.d1 }}%</label>
                    <input type="range" id="front" v-model.number="questionnaire.d1" min="0" max="100" step="5" />
                </div>

                <div class="front_backL">
                    <label for="back">Back-end : {{ questionnaire.d2 }}%</label>
                    <input type="range" id="back" v-model.number="questionnaire.d2" min="0" max="100" step="5" />
                </div>
                <div v-if="this.questionnaire.back >= 85 && this.questionnaire.front >= 85">

                    <div class="gifje">
                        <iframe src="https://giphy.com/embed/RiuMMt2r242LqRyRZn" width="200" height="200"
                            frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </div>
                    Dus eigenlijk gewoon fullstack ;) good to know

                </div>


                <div class="casus">
                    <p>
                        "
                        <br>
                        Stel je voor je zit op kantoor. Je werkt rustig aan je taken en iemand vraagt om je help
                        meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer tekst meeeeeeeeeeeeeeeeeeeeer tekste
                        en nog wat meer en nog meer en nog meer. Beschrijft een situatie.
                        <br>
                        "
                    </p>
                </div>

                <div class="reaction">
                    <iframe src="https://giphy.com/embed/spfi6nabVuq5y" width="150" height="150" frameBorder="0"
                        class="giphy-embed" allowFullScreen></iframe>
                    <input type="radio" class="selectboxes" name="casus_reaction" value=1>
                </div>
                <div class="reaction">

                    <iframe src="https://giphy.com/embed/p6qWfRJ4RxltUEmrl9" width="150" height="150" frameBorder="0"
                        class="giphy-embed" allowFullScreen></iframe>
                    <input type="radio" class="selectboxes" name="casus_reaction" v-model="questionnaire.s25" value=2>
                </div>
                <div class="reaction">
                    <iframe src="https://giphy.com/embed/7jmyzkeInJKhHiaaje" width="150" height="150" frameBorder="0"
                        class="giphy-embed" allowFullScreen></iframe>
                    <input type="radio" class="selectboxes" name="casus_reaction" v-model="questionnaire.s25" value=3>
                </div>
                <div class="reaction">
                    <iframe src="https://giphy.com/embed/2gZHwhx0EC5lv3Fl36" width="150" height="150" frameBorder="0"
                        class="giphy-embed" allowFullScreen></iframe>
                    <input type="radio" class="selectboxes" name="casus_reaction" v-model="questionnaire.s25" value=4>
                </div>


                <hr>
            </div>

        </form>
        <iframe src="https://giphy.com/embed/hcpVSCSwDcKju" width="300" frameBorder="0" class="giphy-embed"
            allowFullScreen></iframe>
        <br>
        <button @click="questionnaire1"> Bevestig vragenlijst </button>
    </div>

</template>

<script>
// TODO buttons samenvoegen van bevestigen + bevestig vragenlijst 
import { add_questionnaire } from "../../db"
import { prediction_model } from "../../main"

export default {
    data() {
        return {
            questionnaire: {
                // kernwoorden 
                k1: 0,
                k2: 25,
                k3: 50,
                k4: 75,
                k5: 100,
                // stelingen 
                s1: true,
                s21: false,
                s22: false,
                s23: false,
                s24: false,
                s25: 0,
                // diverse vragen 
                d1: 50,
                d2: 50,
                d4: 0,
                // conclusie vanuit meerdere vragen 
                personality : 0 , 

            }
        }
    },
    methods: {
            calculate_personality() {
            /*

                s21: false, // x 20
                s22: false, // x 20 
                s23: false, // x 20
                s24: false, // x 20
                s25: 0,     // x 5 
                ----------------------- + 
                        range 0-100

            */
            const personality = this.questionnaire.s21 * 20  + this.questionnaire.s22 * 20 + this.questionnaire.s23 * 20 + this.questionnaire.s24 * 20 +  parseInt(this.questionnaire.s25)* 5 
            console.log(this.questionnaire.s21 ,this.questionnaire.s22 ,this.questionnaire.s23 , this.questionnaire.s24 ,  parseInt(this.questionnaire.s25) , " = ", personality  )  
            this.questionnare.personality = personality
            return personality; 
        }, 
        questionnaire1() {


            this.$store.commit('set_kernwoorden', [
                this.questionnaire.k1,
                this.questionnaire.k2,
                this.questionnaire.k3,
                this.questionnaire.k4,
                this.questionnaire.k5
            ])
            this.calculate_personality()
            
            const prediction = prediction_model(this.questionnaire.k1, this.questionnaire.k2, this.questionnaire.k3, this.questionnaire.k4, this.questionnaire.k5, this.questionnaire.s1, this.questionnaire.personality, this.questionnaire.d4)
            add_questionnaire(prediction,  'cursist', this.$store.state.user.UID)
            console.log("Prediction voor deze user/vragenlijst is : ")

            add_questionnaire(this.questionnaire, 'cursist', this.$store.state.user.UID)
            this.$store.commit("setFilledInQuestionnaire", true)
            this.$router.push("./DashboardUser");

        },


    }
}
</script>

<style>
.formCompany {
    padding: 40px;
}

.reaction {
    display: inline;
    margin: 2%;
}


.selectboxes {
    width: 10px;

}


.casus {
    background-color: #f2f2f2;
    padding: 50px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;

}

.front_backL {
    width: 30%;
    text-align: center;
    align-items: center;
    display: inline-block;
    align-self: center;
    margin-top: 10px;
    margin-right: 20px;
}


.s {
    display: inline-block;
    width: 5%;
    margin-bottom: 30px;
}

label {
    display: inline;
    font-size: larger;
}

hr {
    color: #270043;
    margin-top: 40px;
    margin-bottom: 40px;
}

select {
    padding: 10px 6px;

    box-sizing: border-box;
    border: none;
    text-align: center;

}

.verhouding {
    display: inline;
    width: 5%;
    margin: 10px;
}

.labels_verhouding {
    display: inline;
    width: 20%;

}

.stellingen {
    text-align: left;
}

.vragen {
    text-align: left;
}
</style>