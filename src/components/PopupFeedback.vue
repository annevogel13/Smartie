<script>
    export default{
        data(){
            return{
                visible : false,
            }

        },
        methods : {
        }
    }

</script>
<template>
    <div class="popupfeedback">
        <div id="myModal" class="modal" v-if = "visible">

            <div class="modal-content" >
                <span class="close" @click = "visible = !visible" >&times;</span>
                <p>Wil je feedback geven waarom je niet voor dit bedrijf/cursist kiest ? </p>
            </div>

        </div>

    </div>

</template>

<style>

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