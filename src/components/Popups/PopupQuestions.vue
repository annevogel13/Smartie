<script>
    export default{
        data(){
            return{
                visible : false,
            }
        },
    }

</script>
<template>
    <div class="popupquestions">
        <div id="myModal" class="modal" v-if = "visible">

            <div class="modal-content">
                <span class="close" @click = "visible = !visible" >&times;</span>
                <p>Overzicht met de antwoorden van de bedrijven/cursisten in deze popup </p>
            </div>

        </div>

    </div>

</template>

<style scoped >

/* The Popup (background) */
.modal {

  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Popup content  */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
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