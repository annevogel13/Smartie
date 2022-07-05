<script>
import { add_feedback } from '../../db'

export default {
  data() {
    return {
      visible: false,
      feedback: '',
    }

  },
  methods: {
    submit() {
      // feedback toevoegen aan data_to_be_displayed is een array
      add_feedback(this.feedback, this.$store.state.user.data_to_be_displayed.role, this.$store.state.user.data_to_be_displayed.UID)
      this.visible = false 
      this.feedback = ''
    }
  }
}

</script>
<template>
  <div class="popupfeedback">
    <div id="myModal" class="modal" v-if="visible">

      <div class="modal-content">
        <span class="close" @click="visible = !visible">&times;</span>
        <p>Wil je feedback geven waarom je niet voor dit bedrijf/cursist kiest ? </p>
        <input type="texte" v-model="feedback" placeholder="Give your feedback">
        <button type="submit" @click="submit">Submit</button>
        <button type="reset" @click="visible = !visible">Annuleren</button>
      </div>

    </div>

  </div>

</template>

<style scoped>
/* The Popup (background) */
.modal {

  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Popup content  */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  /* Could be more or less, depending on screen size */
  align-self: center;

}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>