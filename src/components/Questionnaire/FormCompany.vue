<template>
    <div class="formCompany">
        <form>
            <br><br>
            <div class="kernwoorden">
                <h2> Kernwoorden </h2>
                <label for="v1">Ons bedrijf is zeer <b>hiërarchisch</b></label>:  {{ v1 }}%
                <input type="range" id="v1" v-model.number="v1" min="0" max="100" step="5" />
                
                <br><br>
                <label for="v2">Ons bedrijf en <b>thuiswerken</b> gaan goed samen </label>: {{ v2 }}%
                <input type="range" id="v2" v-model.number="v2" min="0" max="100" step="5" />
                
                <br><br>
                <label for="v3"><b>Vrijmibo</b> is belangrijk voor de sfeer </label>: {{ v3 }}%
                <input type="range" id="v3" v-model.number="v3" min="0" max="100" step="5" />
                
                <br><br>
                <label for="v4"><b>Muziek</b> in het kantoor is toegestaan</label> : {{ v4 }}%
                <input type="range" id="v4" v-model.number="v4" min="0" max="100" step="5" />
                
                <br><br>
                <label for="v5">Kernwoorden vraag 5 </label> : {{ v5 }}%
                <input type="range" id="v5" v-model.number="v5" min="0" max="100" step="5" />
                
                <br><br>
            </div>
            <div class="stellingen">
                <h2>Stellingen </h2>
                <p> Kies de stellingen die bij uw bedrijf passen </p>
                <input type="checkbox" id="s1" v-model="s1" name="s1" class="s" />
                <label for="s1">Wij vinden het belangrijk dat je je werk af hebt, en als dit om 14.00 uur al is, ben je
                    vrij.</label>
                <br>
                <input type="checkbox" id="s2" v-model="s2" name="s2" class="s" />
                <label for="s2">Wij zijn het bedrijf dat bijvoorbeeld elke 2 jaar een trip naar Parijs
                    organiseren.</label>
                <br>
                <input type="checkbox" id="s3" v-model="s3" name="s3" class="s" />
                <label for="s3">Wij verkiezen personaliteit over skills.</label>
                <br>
                <input type="checkbox" id="s4" v-model="s4" name="s4" class="s" />
                <label for="s4">Muziek in het kantoor is toegestaan.</label>

            </div>
            <div class = "vragen">
                <h2>Vragen </h2>
                vraag 1 3enz. 
            </div>
        </form>


    </div>

</template>

<script>


export default {
    data: () => ({
        v1: 0,
        v2: 25,
        v3: 50,
        v4: 75,
        v5: 100,
        s1: true,
        s2: false,
        s3: false,
        s4: false,
    })
}
</script>

<style>

.formCompany{
    background-color : BFD7FF ; 
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
</style>