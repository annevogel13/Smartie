<script>

import { add_questionnaire, add_prediction } from "../../db"
import { prediction_model } from "../../main"

export default {
    data() {
        return {
            // de nummers van elke vraag zijn terug te vinden in de pdf genaamd questionnaire 
            questionnaire: {
                k1: 0,
                k2: 25,
                k3: 50,
                k4: 75,
                k5: 0,

                k50: 100,
                k51: false,
                k52: true,
                k53: 100,

                s1: 0,
                s2: false,

                d4: 0,
                d5: 0,

                d60: 0,
                d61: 0,
                d62: 0,
                d63: 0,

                ambiance: 0
            }
        }
    },
    methods: {
        calculate_ambiance() {
            
            /*
                op deze manier wordt de ambiance berekent
                s21: false, // x 20
                s22: false, // x 20 
                s23: false, // x 20
                s24: false, // x 20
                s25: 0,     // x 5 
                ----------------------- + 
                        range 0-100
            */

            const ambiance = this.questionnaire.k50 * 0.25 + this.questionnaire.k51 * 25 + this.questionnaire.k52 * 25 + this.questionnaire.k53 * 0.25
            console.log(this.questionnaire.k50, this.questionnaire.k51, this.questionnaire.k52, this.questionnaire.k53, " = ", ambiance)
            this.questionnaire.ambiance = ambiance
            return ambiance;
        },
        submitQuestionnaire() {
            // berekenen van de ambiance 
            this.calculate_ambiance() 

            // prediction vanuit het model halen met de input van de vragen 
            const prediction = prediction_model(this.questionnaire.k1, this.questionnaire.k2, this.questionnaire.k3, this.questionnaire.k4, this.questionnaire.ambiance, this.questionnaire.s1, this.questionnaire.s2, parseInt(this.questionnaire.d4))
            
            // toevoegen van de voorspelling aan de database 
            add_prediction(prediction, 'bedrijf', this.$store.state.user.UID)
            add_questionnaire(this.questionnaire, 'bedrijf', this.$store.state.user.UID)

            // aanpassen van de vuex state 
            this.$store.commit("setQuestionnaire", true)
            this.$store.commit("setPrediction", prediction)
            this.$router.push("./DashboardUser");
        }
    }
}
</script>

<template>
    <div class="formCompany">

        <form>
            <h1>Welkom bij de vragenlijst</h1>
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
                <label for="k1">Ons bedrijf is zeer <b>hiërarchisch</b></label>: {{ questionnaire.k53 }}%
                <input type="range" id="k1" v-model.number="questionnaire.k53" min="0" max="100" step="5" />

                <br><br>
                <label for="k2">Ons bedrijf en <b>thuiswerken</b> gaan goed samen </label>: {{ questionnaire.s1 }}%
                <input type="range" id="k2" v-model.number="questionnaire.s1" min="0" max="100" step="5" />

                <br><br>
                <label for="k3"><b>Vrijmibo</b> is belangrijk voor de sfeer </label>: {{ questionnaire.k50 }}%
                <input type="range" id="k3" v-model.number="questionnaire.k50" min="0" max="100" step="5" />

                <br><br>
                <label for="k4">Wij hebben een <b>entertainment room</b></label> : {{ questionnaire.k4 }}%
                <input type="range" id="k4" v-model.number="questionnaire.k4" min="0" max="100" step="5" />

                <br><br>
                <label for="k5"><b>Meedenken</b> wordt gewaardeerd </label> : {{ questionnaire.k2 }}%
                <input type="range" id="k5" v-model.number="questionnaire.k2" min="0" max="100" step="5" />

                <br><br>
            </div>
            <hr>
            <div class="stellingen">
                <h2>Stellingen </h2>
                <p> Kies de stellingen die bij uw bedrijf passen </p>
                <input type="checkbox" id="s1" v-model="questionnaire.k1" name="s1" class="s" />
                <label for="s1">De focus ligt bij ons op je taken afhebben en niet op aantal werkuren. </label>
                <br>
                <input type="checkbox" id="s2" v-model="questionnaire.k51" name="s2" class="s" />
                <label for="s2">Wij zijn het bedrijf dat bijvoorbeeld elke 2 jaar een trip naar Parijs
                    organiseren.</label>
                <br>
                <input type="checkbox" id="s3" v-model="questionnaire.s2" name="s3" class="s" />
                <label for="s3">Wij verkiezen personaliteit over skills.</label>
                <br>
                <input type="checkbox" id="s4" v-model="questionnaire.k52" name="s4" class="s" />
                <label for="s4">Muziek in het kantoor is toegestaan.</label>
                <br>
                <input type="checkbox" id="s5" v-model="questionnaire.k3" name="s4" class="s" />
                <label for="s5">Kantoor kan aangepast worden naar benodigdheden </label>

            </div>
            <hr>
            <div class="vragen">
                <h2>Vragen </h2>
                <label>Hoeveel senioren, medioren en junioren werken er bij jullie?
                    <br>
                    (geef het antwoord of in de echte getallen of in verhoudingen)
                </label>
                <br><br>

                <label class="labels_verhouding" for="verhouding_j">Junioren : </label>
                <input class="verhouding" type="number" v-model="questionnaire.d60" id="verhouding_j" min="0" />
                <br>

                <label class="labels_verhouding" for="verhouding_m">Medioren : </label>
                <input class="verhouding" type="number" v-model="questionnaire.d61" id="verhouding_m" min="0" />
                <br>

                <label class="labels_verhouding" for="verhouding_s">Senioren : </label>
                <input class="verhouding" type="number" v-model="questionnaire.d62" id="verhouding_s" min="0" />
                <br>

                <label for="begeleiding_h">Hoeveel begeleiding bieden jullie gemiddeld bij junioren?</label>
                <input type="number" class="verhouding" v-model="questionnaire.d63" id="begeleiding_h" min="0" />
                <label> uren per week </label>
                <br><br>

                <label>Wat typeert jullie bedrijf?</label>
                <select style="margin-left : 30px;">
                    <option value="0">Productiebedrijf</option>
                    <option value="1">Agency</option>
                    <option value="2">E-commerce</option>
                    <option value="3">Non-profit</option>
                </select><br><br>

                <label for="min_uren">Wat is het minimum aantal uren dat een werknemer moet draaien?</label>

                <select id="min_uren" style="margin-left : 30px;" v-model="questionnaire.d4">
                    <option value="24">24</option>
                    <option value="32">32</option>
                    <option value="36">36</option>
                    <option value="40">40</option>
                </select>
                <label> uren </label>
                <hr>

            </div>

        </form>
        <iframe src="https://giphy.com/embed/hcpVSCSwDcKju" width="300" frameBorder="0" class="giphy-embed"
            allowFullScreen></iframe>
        <br>

        <button @click="submitQuestionnaire"> Bevestig vragenlijst </button>
    </div>

</template>

<style>
.formCompany {
    padding: 40px;
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